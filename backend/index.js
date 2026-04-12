require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// CONFIGURACIÓN
// ============================================

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      // Permitir todos los orígenes
      callback(null, true);
    },
    credentials: true,
  })
);

// ============================================
// CONEXIÓN A BASE DE DATOS MySQL
// ============================================

let pool;

async function initDatabase() {
  try {
    pool = mysql.createPool({
      host: process.env.MYSQLHOST || process.env.DB_HOST || 'localhost',
      port: process.env.MYSQLPORT || process.env.DB_PORT || 3306,
      user: process.env.MYSQLUSER || process.env.DB_USER || 'root',
      password: process.env.MYSQLPASSWORD || process.env.DB_PASSWORD || '',
      database: process.env.MYSQLDATABASE || process.env.DB_NAME || 'neon_royale',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Verificar conexión
    const connection = await pool.getConnection();
    console.log('✅ Conectado a MySQL exitosamente');
    connection.release();

    // Crear tabla de usuarios si no existe
    await pool.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        usuario VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Asegurar que la columna 'rol' exista para bases de datos antiguas
    try {
      await pool.query("ALTER TABLE usuarios ADD COLUMN rol VARCHAR(20) DEFAULT 'user'");
      console.log('✅ Columna "rol" agregada a usuarios.');
    } catch (e) {
      if (e.code !== 'ER_DUP_FIELDNAME') {
        throw e;
      }
    }
    
    // Crear tabla de juegos si no existe
    await pool.query(`
      CREATE TABLE IF NOT EXISTS juegos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        category VARCHAR(50),
        badge VARCHAR(20),
        rating INT DEFAULT 5,
        image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Auto-crear usuario admin si no existe
    const [adminCheck] = await pool.query('SELECT id FROM usuarios WHERE usuario = ?', ['admin']);
    if (adminCheck.length === 0) {
      const salt = await bcrypt.genSalt(10);
      const tempPass = await bcrypt.hash('admin123', salt);
      await pool.query(
        'INSERT INTO usuarios (nombre, email, usuario, password, rol) VALUES (?, ?, ?, ?, ?)',
        ['Administrador Master', 'admin@neonroyale.com', 'admin', tempPass, 'admin']
      );
      console.log('👑 Usuario Admin (admin:admin123) creado automáticamente.');
    }

    // Opcional: Insertar algunos juegos por defecto si la tabla está vacía
    const [gamesCheck] = await pool.query('SELECT count(*) as count FROM juegos');
    if (gamesCheck[0].count === 0) {
      const defaultGames = [
        ['Neon Slots', 'Slots', 'NUEVO', 5, 'img/Slots.jpg'],
        ['Gold Roulette', 'Mesa', 'HOT', 5, 'img/gold.jpg'],
        ['Blackjack VIP', 'Cartas', '', 5, 'img/VIP.jpg'],
        ['Crash Royale', 'Crash', 'HOT', 4, 'img/clash.jpg']
      ];
      for (const g of defaultGames) {
        await pool.query('INSERT INTO juegos (title, category, badge, rating, image) VALUES (?, ?, ?, ?, ?)', g);
      }
      console.log('🎮 Juegos por defecto insertados.');
    }

    console.log('✅ Tabla "usuarios" verificada/creada');
  } catch (error) {
    console.error('❌ Error al conectar con MySQL:', error.message);
    // En Railway la DB puede tardar en estar lista
    console.log('⏳ Reintentando conexión en 5 segundos...');
    setTimeout(initDatabase, 5000);
  }
}

// ============================================
// MIDDLEWARE DE AUTENTICACIÓN
// ============================================

const JWT_SECRET = process.env.JWT_SECRET || 'neon_royale_secret_key_2026';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token de acceso requerido' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido o expirado' });
    }
    req.user = user;
    next();
  });
}

function authenticateAdmin(req, res, next) {
  authenticateToken(req, res, () => {
    if (req.user.rol !== 'admin') {
      return res.status(403).json({ message: 'Acceso denegado: solo administradores' });
    }
    next();
  });
}

// ============================================
// RUTAS DE AUTENTICACIÓN
// ============================================

// POST /api/auth/register - Registro de usuario
app.post('/api/auth/register', async (req, res) => {
  try {
    const { nombre, email, usuario, password } = req.body;

    // Validaciones
    if (!nombre || !email || !usuario || !password) {
      return res
        .status(400)
        .json({ message: 'Todos los campos son obligatorios' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'La contraseña debe tener al menos 6 caracteres' });
    }

    // Verificar si el usuario o email ya existen
    const [existingUsers] = await pool.query(
      'SELECT id FROM usuarios WHERE email = ? OR usuario = ?',
      [email, usuario]
    );

    if (existingUsers.length > 0) {
      return res
        .status(409)
        .json({ message: 'El usuario o correo ya están registrados' });
    }

    // Hash del password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insertar usuario
    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre, email, usuario, password) VALUES (?, ?, ?, ?)',
      [nombre, email, usuario, hashedPassword]
    );

    // Generar token JWT
    const token = jwt.sign(
      { id: result.insertId, usuario, email, rol: 'user' },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      token,
      user: {
        id: result.insertId,
        nombre,
        email,
        usuario,
        rol: 'user'
      },
    });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// POST /api/auth/login - Inicio de sesión
app.post('/api/auth/login', async (req, res) => {
  try {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
      return res
        .status(400)
        .json({ message: 'Usuario y contraseña son obligatorios' });
    }

    // Buscar usuario
    const [users] = await pool.query(
      'SELECT * FROM usuarios WHERE usuario = ? OR email = ?',
      [usuario, usuario]
    );

    if (users.length === 0) {
      return res
        .status(401)
        .json({ message: 'Credenciales incorrectas' });
    }

    const user = users[0];

    // Verificar contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ message: 'Credenciales incorrectas' });
    }

    // Generar token JWT
    const token = jwt.sign(
      { id: user.id, usuario: user.usuario, email: user.email, rol: user.rol },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        usuario: user.usuario,
        rol: user.rol
      },
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// GET /api/auth/profile - Obtener perfil del usuario autenticado
app.get('/api/auth/profile', authenticateToken, async (req, res) => {
  try {
    const [users] = await pool.query(
      'SELECT id, nombre, email, usuario, rol, created_at FROM usuarios WHERE id = ?',
      [req.user.id]
    );

    if (users.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json({ user: users[0] });
  } catch (error) {
    console.error('Error al obtener perfil:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// ============================================
// RUTAS DE JUEGOS (Y ADMIN)
// ============================================

// GET /api/juegos - Obtener todos los juegos (público)
app.get('/api/juegos', async (req, res) => {
  try {
    const [juegos] = await pool.query('SELECT * FROM juegos ORDER BY created_at DESC');
    res.json(juegos);
  } catch (error) {
    console.error('Error al obtener juegos:', error);
    res.status(500).json({ message: 'Error al obtener juegos' });
  }
});

// POST /api/juegos - Agregar juego (solo admin)
app.post('/api/juegos', authenticateAdmin, async (req, res) => {
  try {
    const { title, category, badge, rating, image } = req.body;
    if (!title || !category || !image) {
      return res.status(400).json({ message: 'Título, categoría e imagen son obligatorios' });
    }
    
    const [result] = await pool.query(
      'INSERT INTO juegos (title, category, badge, rating, image) VALUES (?, ?, ?, ?, ?)',
      [title, category, badge || '', rating || 5, image]
    );
    res.status(201).json({ message: 'Juego creado', id: result.insertId });
  } catch (error) {
    console.error('Error al crear juego:', error);
    res.status(500).json({ message: 'Error interno' });
  }
});

// DELETE /api/juegos/:id - Eliminar juego (solo admin)
app.delete('/api/juegos/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM juegos WHERE id = ?', [id]);
    res.json({ message: 'Juego borrado correctamente' });
  } catch (error) {
    console.error('Error al borrar juego:', error);
    res.status(500).json({ message: 'Error interno' });
  }
});

// ============================================
// RUTA DE SALUD
// ============================================

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Neon Royale API funcionando',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    database: pool ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString(),
  });
});

// ============================================
// INICIAR SERVIDOR
// ============================================

app.listen(PORT, () => {
  console.log(`🚀 Servidor Neon Royale corriendo en puerto ${PORT}`);
  console.log(`📡 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:4200'}`);
  initDatabase();
});
