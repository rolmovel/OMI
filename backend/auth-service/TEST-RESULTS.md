# Resultados de Pruebas - Auth Service

## Fecha: 2025-10-08

### ✅ Servicio Iniciado Correctamente

- **Puerto**: 8081
- **Base de datos**: PostgreSQL en puerto 5433
- **Datos iniciales**: 3 clínicas y 5 roles cargados

---

## Pruebas Realizadas

### 1. ✅ Registro de Usuario - Doctor
**Request:**
```bash
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "doctor_juan",
    "email": "juan@clinic.com",
    "password": "SecurePass123!",
    "clinicIdentifier": "CLINIC001",
    "roleName": "DOCTOR"
  }'
```
**Resultado:** ✅ Usuario registrado exitosamente (HTTP 200)

---

### 2. ✅ Login de Usuario
**Request:**
```bash
curl -X POST http://localhost:8081/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "doctor_juan",
    "password": "SecurePass123!"
  }'
```
**Resultado:** ✅ Tokens JWT generados correctamente
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiJ9..."
}
```

---

### 3. ✅ Registro de Enfermera en Otra Clínica
**Request:**
```bash
curl -X POST http://localhost:8081/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "nurse_ana",
    "email": "ana@clinic.com",
    "password": "SecurePass456!",
    "clinicIdentifier": "CLINIC002",
    "roleName": "NURSE"
  }'
```
**Resultado:** ✅ Usuario registrado exitosamente

---

### 4. ✅ Validación de Usuario Duplicado
**Request:** Intentar registrar usuario con username existente
**Resultado:** ✅ Error manejado correctamente
```json
{
  "error": "Username already exists."
}
```

---

### 5. ✅ Validación de Credenciales Incorrectas
**Request:** Login con contraseña incorrecta
**Resultado:** ✅ Error manejado correctamente
```json
{
  "error": "Internal server error",
  "message": "Bad credentials",
  "type": "org.springframework.security.authentication.BadCredentialsException"
}
```

---

### 6. ✅ Validación de Clínica No Existente
**Request:** Registro con clínica inexistente
**Resultado:** ✅ Error manejado correctamente
```json
{
  "error": "Clinic not found."
}
```

---

## Datos Iniciales Cargados

### Clínicas:
- **CLINIC001** - Clínica Central
- **CLINIC002** - Clínica Norte
- **CLINIC003** - Clínica Sur

### Roles:
- DOCTOR
- NURSE
- ADMIN
- RECEPTIONIST
- TECHNICIAN

---

## Scripts Disponibles

1. **start-app.sh** - Inicia el servicio auth-service
2. **load-initial-data.sh** - Carga datos iniciales (clínicas y roles)
3. **start-test-db.sh** - Inicia la base de datos PostgreSQL de prueba

---

## Configuración

### Variables de Entorno:
- `DB_USERNAME=test_user`
- `DB_PASSWORD=test_password`
- `JWT_SECRET=mySecretKeyForJWTTokenGenerationThatIsAtLeast256BitsLong!!!`

### Base de Datos:
- Host: localhost
- Puerto: 5433
- Database: auth_test_db

---

## Notas Importantes

⚠️ **Hibernate DDL**: El servicio está configurado con `spring.jpa.hibernate.ddl-auto=create-drop`, lo que significa que las tablas se recrean cada vez que se inicia el servicio. Por lo tanto, es necesario ejecutar `./load-initial-data.sh` después de cada reinicio del servicio.

💡 **Recomendación**: Para producción, cambiar a `spring.jpa.hibernate.ddl-auto=validate` y usar migraciones con Flyway o Liquibase.
