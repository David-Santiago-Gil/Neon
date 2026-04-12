-- ============================================
-- Neon Royale Casino - Base de datos
-- ============================================

CREATE DATABASE IF NOT EXISTS neon_royale;
USE neon_royale;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  usuario VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Índices para optimizar búsquedas
CREATE INDEX idx_usuario ON usuarios(usuario);
CREATE INDEX idx_email ON usuarios(email);
