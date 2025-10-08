#!/bin/bash

echo "🔄 Cargando datos iniciales en la base de datos..."

# Verificar que el contenedor de PostgreSQL esté corriendo
if ! docker ps | grep -q "auth-service-test-db"; then
    echo "❌ El contenedor de PostgreSQL no está corriendo."
    echo "   Ejecuta: docker-compose -f docker-compose.test.yml up -d"
    exit 1
fi

# Ejecutar el script SQL
docker exec -i auth-service-test-db psql -U test_user -d auth_test_db < init-data.sql

if [ $? -eq 0 ]; then
    echo "✅ Datos iniciales cargados correctamente"
else
    echo "❌ Error al cargar los datos iniciales"
    exit 1
fi
