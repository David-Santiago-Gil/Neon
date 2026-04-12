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
    origin: process.env.FRONTEND_URL || 'http://localhost:4200',
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
      { id: result.insertId, usuario, email },
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
      { id: user.id, usuario: user.usuario, email: user.email },
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
      'SELECT id, nombre, email, usuario, created_at FROM usuarios WHERE id = ?',
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
