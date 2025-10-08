#!/bin/bash

echo "🚀 Iniciando Auth Service..."

# Configurar variables de entorno
export DB_USERNAME=test_user
export DB_PASSWORD=test_password
export JWT_SECRET=mySecretKeyForJWTTokenGenerationThatIsAtLeast256BitsLong!!!

# Verificar que el JAR existe
if [ ! -f "target/auth-service-0.0.1-SNAPSHOT.jar" ]; then
    echo "❌ JAR no encontrado. Compilando..."
    mvn clean package -DskipTests
fi

echo "✅ Variables de entorno configuradas:"
echo "   - DB_USERNAME: $DB_USERNAME"
echo "   - DB_PASSWORD: [HIDDEN]"
echo "   - JWT_SECRET: [CONFIGURED]"

echo "🔗 Conectando a PostgreSQL en puerto 5433..."
echo "📱 Auth Service estará disponible en: http://localhost:8081"
echo ""

# Ejecutar la aplicación
java -jar target/auth-service-0.0.1-SNAPSHOT.jar \
    --eureka.client.enabled=false \
    --spring.profiles.active=local
