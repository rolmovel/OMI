# 🔐 Auth Service - Microservicio de Autenticación

## 📖 Descripción

El **Auth Service** es un microservicio desarrollado en Spring Boot que proporciona servicios de autenticación y autorización para el sistema OMI (Organizador Médico Integral). Maneja el registro de usuarios, autenticación con JWT, y gestión de roles por clínica médica.

## 🚀 Inicio Rápido

### Prerrequisitos
- Java 17+
- Maven 3.8+
- PostgreSQL 15+
- Docker (opcional, para testing)

### Instalación y Ejecución

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd auth-service
```

2. **Configurar base de datos**
```bash
# Crear base de datos PostgreSQL
createdb auth_db
```

3. **Configurar variables de entorno**
```bash
export DB_USERNAME=omi
export DB_PASSWORD=omi_password
export JWT_SECRET=mySecretKeyForJWTTokenGenerationThatIsAtLeast256BitsLong!!!
```

4. **Compilar y ejecutar**
```bash
mvn clean compile
mvn spring-boot:run
```

El servicio estará disponible en: `http://localhost:8081`

## 📚 Documentación

### 📋 Documentación Principal
- **[API Documentation](./API-DOCUMENTATION.md)** - Documentación completa de endpoints REST
- **[Services Documentation](./SERVICES-DOCUMENTATION.md)** - Documentación detallada de servicios internos

### 🔗 Enlaces Rápidos
- [Endpoints de la API](#endpoints-principales)
- [Configuración](#configuración)
- [Testing](#testing)
- [Despliegue](#despliegue)

## 🔗 Endpoints Principales

### Autenticación
- `POST /api/auth/register` - Registro de usuarios
- `POST /api/auth/login` - Login y generación de tokens JWT

### Ejemplo de Uso
```bash
# Registro
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "dr_martinez",
    "email": "martinez@clinica.com",
    "password": "password123",
    "clinicIdentifier": "clinica-central",
    "roleName": "MEDICO"
  }'

# Login
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "dr_martinez",
    "password": "password123"
  }'
```

## ⚙️ Configuración

### Variables de Entorno
| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `DB_USERNAME` | Usuario de PostgreSQL | `omi` |
| `DB_PASSWORD` | Contraseña de PostgreSQL | `omi_password` |
| `JWT_SECRET` | Clave secreta para JWT | (requerido) |

### Archivo de Configuración
```yaml
# application.yml
spring:
  application:
    name: auth-service
  datasource:
    url: jdbc:postgresql://postgres:5432/auth_db
    username: ${DB_USERNAME:omi}
    password: ${DB_PASSWORD:omi_password}

app:
  jwt:
    secret: ${JWT_SECRET}
    expiration: 900000  # 15 minutos
    refresh-expiration: 604800000 # 7 días

server:
  port: 8081
```

## 🧪 Testing

### Tests Unitarios
```bash
mvn test
```

### Tests de Integración con Base de Datos
```bash
# 1. Iniciar base de datos de test
./start-test-db.sh

# 2. Ejecutar tests de integración
mvn test -Dtest=SimpleAuthTest
```

### Base de Datos de Test
- **Puerto**: 5433
- **Base de datos**: `auth_test_db`
- **Usuario**: `test_user`
- **Contraseña**: `test_password`

## 🏗️ Arquitectura

### Componentes Principales
- **AuthController**: Controlador REST para endpoints de autenticación
- **AuthService**: Lógica de negocio para registro y login
- **JwtService**: Gestión de tokens JWT
- **UserService**: Servicios relacionados con usuarios
- **SecurityConfiguration**: Configuración de Spring Security

### Modelo de Datos
- **User**: Usuarios del sistema
- **Clinic**: Clínicas médicas
- **Role**: Roles de usuario (MEDICO, ENFERMERO, ADMIN, etc.)
- **UserClinicRole**: Relación entre usuarios, clínicas y roles

## 🔒 Seguridad

### Características de Seguridad
- ✅ Passwords encriptados con BCrypt
- ✅ Tokens JWT con expiración
- ✅ Refresh tokens para renovación
- ✅ Autorización basada en roles
- ✅ Endpoints protegidos con Spring Security

### Flujo de Autenticación
1. Usuario se registra con credenciales
2. Usuario hace login con username/password
3. Sistema valida credenciales
4. Sistema genera token JWT y refresh token
5. Cliente usa token JWT para requests autenticados

## 🚀 Despliegue

### Docker
```bash
# Construir imagen
docker build -t auth-service .

# Ejecutar contenedor
docker run -p 8081:8081 \
  -e DB_USERNAME=omi \
  -e DB_PASSWORD=omi_password \
  -e JWT_SECRET=your-secret-key \
  auth-service
```

### Docker Compose
```yaml
version: '3.8'
services:
  auth-service:
    build: .
    ports:
      - "8081:8081"
    environment:
      - DB_USERNAME=omi
      - DB_PASSWORD=omi_password
      - JWT_SECRET=your-secret-key
    depends_on:
      - postgres
      
  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=auth_db
      - POSTGRES_USER=omi
      - POSTGRES_PASSWORD=omi_password
    ports:
      - "5432:5432"
```

## 📊 Monitoreo

### Health Check
```bash
curl http://localhost:8081/actuator/health
```

### Métricas
```bash
curl http://localhost:8081/actuator/metrics
```

## 🛠️ Desarrollo

### Estructura del Proyecto
```
src/
├── main/
│   ├── java/com/omi/auth/
│   │   ├── config/          # Configuración de seguridad
│   │   ├── controller/      # Controladores REST
│   │   ├── domain/          # Entidades JPA
│   │   ├── dto/             # Data Transfer Objects
│   │   ├── repository/      # Repositorios JPA
│   │   └── service/         # Servicios de negocio
│   └── resources/
│       └── application.yml  # Configuración de aplicación
└── test/
    ├── java/com/omi/auth/
    │   └── integration/     # Tests de integración
    └── resources/
        └── application-test.yml
```

### Comandos de Desarrollo
```bash
# Compilar
mvn clean compile

# Ejecutar tests
mvn test

# Ejecutar aplicación
mvn spring-boot:run

# Generar JAR
mvn clean package
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Changelog

### v0.0.1-SNAPSHOT
- ✅ Implementación inicial del microservicio
- ✅ Registro y autenticación de usuarios
- ✅ Gestión de tokens JWT
- ✅ Autorización basada en roles por clínica
- ✅ Tests de integración con base de datos
- ✅ Documentación completa de API y servicios

## 📞 Soporte

Para reportar bugs o solicitar features:
1. Crear un issue en el repositorio
2. Contactar al equipo de desarrollo
3. Consultar la documentación detallada

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

**Desarrollado con ❤️ para el sistema OMI**
