# 📚 Documentación API - Auth Service

## 🏗️ Arquitectura del Microservicio

El **Auth Service** es un microservicio de autenticación y autorización que maneja:
- Registro de usuarios
- Autenticación con JWT
- Gestión de roles por clínica
- Autorización basada en roles

---

## 🔗 Endpoints de la API

### Base URL
```
http://localhost:8081/api/auth
```

---

## 🔐 Autenticación

### 1. Registro de Usuario
**POST** `/register`

Registra un nuevo usuario en el sistema asociándolo a una clínica y rol específicos.

#### Request Body
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "clinicIdentifier": "string",
  "roleName": "string"
}
```

#### Ejemplo de Request
```json
{
  "username": "dr_martinez",
  "email": "martinez@clinica.com",
  "password": "password123",
  "clinicIdentifier": "clinica-central",
  "roleName": "MEDICO"
}
```

#### Response
- **200 OK**: Usuario registrado exitosamente
- **400 Bad Request**: Error en los datos (usuario ya existe, clínica no encontrada, etc.)

#### Ejemplo con cURL
```bash
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "dr_martinez",
    "email": "martinez@clinica.com",
    "password": "password123",
    "clinicIdentifier": "clinica-central",
    "roleName": "MEDICO"
  }'
```

---

### 2. Login de Usuario
**POST** `/login`

Autentica un usuario y devuelve tokens JWT.

#### Request Body
```json
{
  "username": "string",
  "password": "string"
}
```

#### Ejemplo de Request
```json
{
  "username": "dr_martinez",
  "password": "password123"
}
```

#### Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Códigos de Respuesta
- **200 OK**: Login exitoso, tokens devueltos
- **401 Unauthorized**: Credenciales incorrectas
- **403 Forbidden**: Usuario bloqueado o inactivo

#### Ejemplo con cURL
```bash
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "dr_martinez",
    "password": "password123"
  }'
```

---

## 🏥 Modelo de Datos

### Usuario (User)
```java
{
  "id": "UUID",
  "username": "string (único)",
  "email": "string (único)",
  "password": "string (encriptado)",
  "clinicRoles": [
    {
      "clinic": "Clinic",
      "role": "Role"
    }
  ]
}
```

### Clínica (Clinic)
```java
{
  "id": "UUID",
  "name": "string",
  "identifier": "string (único)"
}
```

### Rol (Role)
```java
{
  "id": "Long",
  "name": "string (único)"
}
```

### Relación Usuario-Clínica-Rol (UserClinicRole)
```java
{
  "id": "Long",
  "user": "User",
  "clinic": "Clinic",
  "role": "Role"
}
```

---

## 🔧 Servicios Internos

### AuthService
**Ubicación**: `com.omi.auth.service.impl.AuthServiceImpl`

#### Métodos Principales:
- `register(RegisterRequest)`: Registra un nuevo usuario
- `login(LoginRequest)`: Autentica usuario y genera tokens

### JwtService
**Ubicación**: `com.omi.auth.service.impl.JwtServiceImpl`

#### Métodos Principales:
- `generateToken(UserDetails)`: Genera token JWT
- `generateRefreshToken(Map, UserDetails)`: Genera refresh token
- `extractUserName(String)`: Extrae username del token
- `isTokenValid(String, UserDetails)`: Valida token

### UserService
**Ubicación**: `com.omi.auth.service.impl.UserServiceImpl`

#### Métodos Principales:
- `userDetailsService()`: Servicio para Spring Security

---

## 🗄️ Repositorios

### UserRepository
```java
Optional<User> findByUsername(String username);
Optional<User> findByEmail(String email);
```

### ClinicRepository
```java
Optional<Clinic> findByIdentifier(String identifier);
```

### RoleRepository
```java
Optional<Role> findByName(String name);
```

---

## ⚙️ Configuración

### Variables de Entorno
```properties
# Base de datos
DB_USERNAME=omi
DB_PASSWORD=omi_password

# JWT
JWT_SECRET=mySecretKeyForJWTTokenGenerationThatIsAtLeast256BitsLong!!!
```

### Configuración de Aplicación
```yaml
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

---

## 🔒 Seguridad

### Autenticación JWT
- Los tokens JWT tienen una duración de **15 minutos**
- Los refresh tokens duran **7 días**
- Los passwords se encriptan usando BCrypt
- Spring Security maneja la autorización

### Roles Disponibles
- `MEDICO`: Médico de la clínica
- `ENFERMERO`: Enfermero de la clínica
- `ADMIN`: Administrador de la clínica
- `RECEPCIONISTA`: Personal de recepción

---

## 🧪 Testing

### Base de Datos de Test
```bash
# Iniciar base de datos de test
./start-test-db.sh

# Ejecutar tests
mvn test
```

### Configuración de Test
- **Puerto**: 5433
- **Base de datos**: auth_test_db
- **Usuario**: test_user
- **Contraseña**: test_password

---

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

### Maven
```bash
# Compilar
mvn clean compile

# Ejecutar
mvn spring-boot:run
```

---

## 📊 Monitoreo

### Health Check
```bash
curl http://localhost:8081/actuator/health
```

### Métricas
- Endpoint: `/actuator/metrics`
- Prometheus: `/actuator/prometheus`

---

## 🐛 Troubleshooting

### Problemas Comunes

1. **Error de conexión a BD**
   ```
   Verificar que PostgreSQL esté ejecutándose
   Revisar credenciales en application.yml
   ```

2. **Token JWT inválido**
   ```
   Verificar que JWT_SECRET esté configurado
   Revisar que el token no haya expirado
   ```

3. **Usuario no encontrado**
   ```
   Verificar que el usuario esté registrado
   Revisar que la clínica y rol existan
   ```

---

## 📞 Contacto y Soporte

Para dudas o problemas con el Auth Service, contactar al equipo de desarrollo.

**Versión**: 0.0.1-SNAPSHOT  
**Última actualización**: Octubre 2025
