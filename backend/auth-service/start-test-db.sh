#!/bin/bash

echo "🚀 Iniciando base de datos PostgreSQL para tests..."

# Detener y eliminar contenedor existente si existe
docker-compose -f docker-compose.test.yml down

# Iniciar la base de datos
docker-compose -f docker-compose.test.yml up -d

echo "⏳ Esperando a que PostgreSQL esté listo..."

# Esperar hasta que la base de datos esté lista
until docker exec auth-service-test-db pg_isready -U test_user -d auth_test_db; do
  echo "Esperando PostgreSQL..."
  sleep 2
done

echo "✅ Base de datos PostgreSQL lista en puerto 5433"
echo "📊 Conexión: jdbc:postgresql://localhost:5433/auth_test_db"
echo "👤 Usuario: test_user"
echo "🔑 Contraseña: test_password"
echo ""
echo "Para ejecutar los tests, usa:"
echo "mvn test -Dtest=AuthServiceIntegrationTest"
