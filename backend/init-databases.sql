-- Script de inicialización de bases de datos para OMI
-- Este script crea todas las bases de datos necesarias para los microservicios

-- Crear bases de datos
CREATE DATABASE auth_db;
CREATE DATABASE patient_db;
CREATE DATABASE appointment_db;
CREATE DATABASE notification_db;
CREATE DATABASE report_db;
CREATE DATABASE payment_db;
CREATE DATABASE media_db;
CREATE DATABASE analytics_db;

-- Conectar a cada base de datos y crear extensiones necesarias
\c auth_db;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Creación de tablas para auth_db
CREATE TABLE clinics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    identifier VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE roles (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE user_clinic_roles (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    clinic_id UUID NOT NULL,
    role_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (clinic_id) REFERENCES clinics(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
);

-- Insertar roles iniciales
INSERT INTO roles (name) VALUES ('ADMIN_CLINICA'), ('MEDICO'), ('PACIENTE'), ('ADMIN_SISTEMA');

-- Insertar clínica de ejemplo para desarrollo
INSERT INTO clinics (name, identifier) VALUES ('Clínica OMI de Desarrollo', 'omi-dev');

\c patient_db;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

\c appointment_db;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

\c notification_db;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

\c report_db;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

\c payment_db;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

\c media_db;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

\c analytics_db;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Mensaje de confirmación
\echo 'Todas las bases de datos han sido creadas exitosamente'
