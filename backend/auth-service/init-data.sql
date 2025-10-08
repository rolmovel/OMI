-- Script de inicialización de datos para Auth Service
-- Inserta clínicas y roles de prueba

-- Insertar clínicas de ejemplo
INSERT INTO clinics (id, identifier, name) VALUES 
    (gen_random_uuid(), 'CLINIC001', 'Clínica Central'),
    (gen_random_uuid(), 'CLINIC002', 'Clínica Norte'),
    (gen_random_uuid(), 'CLINIC003', 'Clínica Sur')
ON CONFLICT (identifier) DO NOTHING;

-- Insertar roles del sistema
INSERT INTO roles (name) VALUES 
    ('DOCTOR'),
    ('NURSE'),
    ('ADMIN'),
    ('RECEPTIONIST'),
    ('TECHNICIAN')
ON CONFLICT (name) DO NOTHING;

-- Verificar datos insertados
SELECT 'Clínicas creadas:' as info;
SELECT id, identifier, name FROM clinics;

SELECT 'Roles creados:' as info;
SELECT id, name FROM roles;
