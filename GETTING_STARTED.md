# Guía de Inicio Rápido - OMI

Esta guía te ayudará a configurar y ejecutar el proyecto OMI en tu entorno local en menos de 30 minutos.

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

### Obligatorios
- **Node.js** v18+ y npm v9+
- **Java** 17+
- **Maven** 3.8+
- **Docker** 24+ y Docker Compose
- **Git**

### Opcionales (para desarrollo)
- **Rust** 1.70+ (para Tauri)
- **PostgreSQL** 15+ (si no usas Docker)
- **Redis** 7+ (si no usas Docker)
- **IntelliJ IDEA** o **VS Code**

## 🚀 Instalación Rápida (con Docker)

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-org/omi.git
cd omi
```

### 2. Configurar Variables de Entorno

```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env

# Edita los archivos .env con tus configuraciones
```

### 3. Iniciar con Docker Compose

```bash
# Iniciar solo la infraestructura (PostgreSQL, Redis, MinIO)
docker-compose up -d postgres redis minio

# O iniciar todo el stack completo
docker-compose up -d
```

### 4. Verificar que Todo Está Funcionando

```bash
# Ver logs
docker-compose logs -f

# Verificar servicios
docker-compose ps
```

### 5. Acceder a las Aplicaciones

- **API Gateway**: http://localhost:8080
- **Service Discovery (Eureka)**: http://localhost:8761
- **MinIO Console**: http://localhost:9001 (minioadmin/minioadmin)
- **PostgreSQL**: localhost:5432 (omi/omi_password)
- **Redis**: localhost:6379

## 💻 Instalación Manual (sin Docker)

### 1. Configurar Base de Datos

```bash
# Instalar PostgreSQL
brew install postgresql@15  # macOS
# o
sudo apt install postgresql-15  # Linux

# Iniciar PostgreSQL
brew services start postgresql@15  # macOS
# o
sudo systemctl start postgresql  # Linux

# Crear usuario y bases de datos
psql postgres
```

```sql
CREATE USER omi WITH PASSWORD 'omi_password';
CREATE DATABASE auth_db OWNER omi;
CREATE DATABASE patient_db OWNER omi;
CREATE DATABASE appointment_db OWNER omi;
CREATE DATABASE notification_db OWNER omi;
CREATE DATABASE report_db OWNER omi;
CREATE DATABASE payment_db OWNER omi;
CREATE DATABASE media_db OWNER omi;
CREATE DATABASE analytics_db OWNER omi;
\q
```

### 2. Configurar Redis

```bash
# Instalar Redis
brew install redis  # macOS
# o
sudo apt install redis-server  # Linux

# Iniciar Redis
brew services start redis  # macOS
# o
sudo systemctl start redis  # Linux
```

### 3. Configurar Backend

```bash
cd backend

# Compilar todos los módulos
mvn clean install -DskipTests

# Iniciar Service Discovery
cd service-discovery
mvn spring-boot:run &

# Esperar 30 segundos para que Eureka esté listo
sleep 30

# Iniciar Config Server
cd ../config-server
mvn spring-boot:run &

# Esperar 20 segundos
sleep 20

# Iniciar API Gateway
cd ../api-gateway
mvn spring-boot:run &

# Iniciar Auth Service
cd ../auth-service
mvn spring-boot:run &

# Iniciar Patient Service
cd ../patient-service
mvn spring-boot:run &

# Iniciar otros servicios según necesites...
```

### 4. Configurar Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run tauri dev
```

## 🔧 Configuración Detallada

### Backend Configuration

Edita `backend/*/src/main/resources/application.yml`:

```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/auth_db
    username: omi
    password: omi_password
  
  redis:
    host: localhost
    port: 6379

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka/

jwt:
  secret: tu-secret-key-muy-segura-de-al-menos-256-bits
  expiration: 900000  # 15 minutos
```

### Frontend Configuration

Edita `frontend/.env`:

```env
VITE_API_URL=http://localhost:8080
VITE_API_TIMEOUT=30000
VITE_ENABLE_MOCK=false
```

## 🧪 Ejecutar Tests

### Backend Tests

```bash
cd backend

# Tests unitarios
mvn test

# Tests de integración
mvn verify

# Tests con cobertura
mvn clean test jacoco:report
```

### Frontend Tests

```bash
cd frontend

# Tests unitarios
npm test

# Tests con cobertura
npm run test:coverage

# Tests E2E
npm run test:e2e
```

## 📊 Verificar la Instalación

### 1. Health Checks

```bash
# API Gateway
curl http://localhost:8080/actuator/health

# Service Discovery
curl http://localhost:8761/actuator/health

# Auth Service
curl http://localhost:8081/actuator/health

# Patient Service
curl http://localhost:8082/actuator/health
```

### 2. Crear Usuario de Prueba

```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@test.com",
    "password": "Admin123!",
    "firstName": "Admin",
    "lastName": "Test",
    "role": "ADMIN",
    "clinicId": 1
  }'
```

### 3. Login

```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@test.com",
    "password": "Admin123!"
  }'
```

## 🐛 Troubleshooting

### Error: Puerto ya en uso

```bash
# Encontrar proceso usando el puerto
lsof -i :8080

# Matar el proceso
kill -9 <PID>
```

### Error: Base de datos no conecta

```bash
# Verificar que PostgreSQL está corriendo
pg_isready

# Verificar conexión
psql -h localhost -U omi -d auth_db
```

### Error: Redis no conecta

```bash
# Verificar que Redis está corriendo
redis-cli ping
# Debería responder: PONG
```

### Error: Eureka no encuentra servicios

```bash
# Verificar que Eureka está corriendo
curl http://localhost:8761/eureka/apps

# Reiniciar servicios en orden:
# 1. Service Discovery
# 2. Config Server
# 3. API Gateway
# 4. Otros servicios
```

### Error: Frontend no compila

```bash
# Limpiar caché
rm -rf node_modules
rm package-lock.json
npm install

# Verificar versión de Node
node --version  # Debe ser v18+
```

## 📚 Próximos Pasos

Una vez que tengas todo funcionando:

1. **Lee la documentación completa**: [docs/](docs/)
2. **Revisa las historias de usuario**: [docs/user-stories/](docs/user-stories/)
3. **Explora la arquitectura**: [docs/technical-specs/01-arquitectura.md](docs/technical-specs/01-arquitectura.md)
4. **Revisa los wireframes**: [docs/mockups/wireframes.md](docs/mockups/wireframes.md)
5. **Configura tu IDE**: Ver [IDE_SETUP.md](IDE_SETUP.md)

## 🤝 Contribuir

Si encuentras algún problema o quieres contribuir:

1. Lee [CONTRIBUTING.md](CONTRIBUTING.md)
2. Crea un issue describiendo el problema
3. Haz un fork y crea un Pull Request

## 📞 Soporte

Si necesitas ayuda:

- **Documentación**: [docs/](docs/)
- **Issues**: https://github.com/tu-org/omi/issues
- **Email**: dev@omi-health.com

## ✅ Checklist de Instalación

- [ ] Prerequisitos instalados
- [ ] Repositorio clonado
- [ ] Variables de entorno configuradas
- [ ] Base de datos creada y conectando
- [ ] Redis funcionando
- [ ] Service Discovery corriendo (puerto 8761)
- [ ] API Gateway corriendo (puerto 8080)
- [ ] Al menos un microservicio corriendo
- [ ] Frontend compilando
- [ ] Health checks pasando
- [ ] Usuario de prueba creado
- [ ] Login exitoso

¡Felicidades! 🎉 Ya tienes OMI funcionando en tu máquina local.
