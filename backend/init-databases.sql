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
