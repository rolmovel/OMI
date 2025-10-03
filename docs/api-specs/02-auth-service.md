# Auth Service API - Especificación

## 📋 Endpoints de Autenticación

### POST /api/auth/login

Autenticar usuario y obtener tokens JWT.

**Request**:
```json
{
  "email": "doctor@clinica.com",
  "password": "SecurePass123!"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
    "tokenType": "Bearer",
    "expiresIn": 900,
    "user": {
      "id": 123,
      "email": "doctor@clinica.com",
      "firstName": "Juan",
      "lastName": "Pérez",
      "role": "ODONTOLOGO",
      "clinicId": 1
    }
  }
}
```

**Errores**:
- `401`: Credenciales incorrectas
- `403`: Cuenta bloqueada
- `422`: Datos de entrada inválidos

---

### POST /api/auth/login/phone

Login con teléfono y código OTP.

**Request** (Paso 1 - Solicitar OTP):
```json
{
  "phone": "+34612345678"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "message": "Código enviado por SMS",
    "expiresIn": 300
  }
}
```

**Request** (Paso 2 - Verificar OTP):
```json
{
  "phone": "+34612345678",
  "code": "123456"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "accessToken": "...",
    "refreshToken": "...",
    "user": { ... }
  }
}
```

---

### POST /api/auth/login/qr

Login con código QR.

**Request**:
```json
{
  "qrCode": "QR_ABC123XYZ789"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "accessToken": "...",
    "refreshToken": "...",
    "user": { ... },
    "isFirstLogin": true
  }
}
```

Si `isFirstLogin` es `true`, el cliente debe solicitar crear contraseña.

---

### POST /api/auth/refresh

Renovar access token usando refresh token.

**Request**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "expiresIn": 900
  }
}
```

**Errores**:
- `401`: Refresh token inválido o expirado

---

### POST /api/auth/logout

Cerrar sesión y revocar tokens.

**Headers**:
```
Authorization: Bearer <access_token>
```

**Request**:
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response** (204 No Content)

---

### POST /api/auth/register

Registrar nuevo usuario (solo para área clínica, requiere rol ADMIN).

**Headers**:
```
Authorization: Bearer <admin_access_token>
```

**Request**:
```json
{
  "email": "nuevo@clinica.com",
  "firstName": "María",
  "lastName": "García",
  "role": "HIGIENISTA",
  "clinicId": 1,
  "sendWelcomeEmail": true
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": 124,
    "email": "nuevo@clinica.com",
    "firstName": "María",
    "lastName": "García",
    "role": "HIGIENISTA",
    "temporaryPassword": "TempPass123!",
    "mustChangePassword": true
  }
}
```

---

### POST /api/auth/forgot-password

Solicitar recuperación de contraseña.

**Request**:
```json
{
  "email": "doctor@clinica.com"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "message": "Si el email existe, recibirás instrucciones para recuperar tu contraseña"
  }
}
```

---

### POST /api/auth/reset-password

Restablecer contraseña con token de recuperación.

**Request**:
```json
{
  "token": "reset_token_abc123",
  "newPassword": "NewSecurePass123!"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "message": "Contraseña actualizada exitosamente"
  }
}
```

**Errores**:
- `400`: Token inválido o expirado
- `422`: Contraseña no cumple requisitos

---

### POST /api/auth/change-password

Cambiar contraseña (usuario autenticado).

**Headers**:
```
Authorization: Bearer <access_token>
```

**Request**:
```json
{
  "currentPassword": "OldPass123!",
  "newPassword": "NewPass123!"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "message": "Contraseña actualizada exitosamente"
  }
}
```

---

## 📋 Endpoints de 2FA

### POST /api/auth/2fa/enable

Habilitar autenticación de dos factores.

**Headers**:
```
Authorization: Bearer <access_token>
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "secret": "JBSWY3DPEHPK3PXP",
    "qrCodeUrl": "data:image/png;base64,iVBORw0KGgo...",
    "backupCodes": [
      "12345678",
      "87654321",
      "11223344"
    ]
  }
}
```

---

### POST /api/auth/2fa/verify

Verificar código 2FA para completar habilitación.

**Headers**:
```
Authorization: Bearer <access_token>
```

**Request**:
```json
{
  "code": "123456"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "message": "2FA habilitado exitosamente"
  }
}
```

---

### POST /api/auth/2fa/disable

Deshabilitar 2FA.

**Headers**:
```
Authorization: Bearer <access_token>
```

**Request**:
```json
{
  "password": "CurrentPass123!",
  "code": "123456"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "message": "2FA deshabilitado exitosamente"
  }
}
```

---

## 📋 Endpoints de Códigos QR

### POST /api/auth/qr/generate

Generar código QR para una familia (requiere rol RECEPCION o ADMIN).

**Headers**:
```
Authorization: Bearer <access_token>
```

**Request**:
```json
{
  "userId": 456,
  "expiresInDays": 30
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "code": "QR_ABC123XYZ789",
    "qrCodeImage": "data:image/png;base64,iVBORw0KGgo...",
    "expiresAt": "2024-02-15T10:30:00Z"
  }
}
```

---

### GET /api/auth/qr/{code}

Validar código QR.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "isValid": true,
    "userId": 456,
    "expiresAt": "2024-02-15T10:30:00Z"
  }
}
```

---

## 📋 Endpoints de Permisos

### GET /api/auth/permissions

Obtener permisos del usuario autenticado.

**Headers**:
```
Authorization: Bearer <access_token>
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "userId": 123,
    "role": "ODONTOLOGO",
    "permissions": [
      {
        "resource": "patients",
        "actions": ["create", "read", "update"]
      },
      {
        "resource": "reviews",
        "actions": ["create", "read", "update"]
      },
      {
        "resource": "reports",
        "actions": ["create", "read"]
      }
    ]
  }
}
```

---

### GET /api/auth/permissions/check

Verificar si el usuario tiene un permiso específico.

**Headers**:
```
Authorization: Bearer <access_token>
```

**Query Parameters**:
- `resource`: Recurso a verificar (ej. "patients")
- `action`: Acción a verificar (ej. "delete")

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "hasPermission": true
  }
}
```

---

## 📋 Endpoints de Auditoría

### GET /api/auth/audit-logs

Obtener logs de auditoría (requiere rol ADMIN).

**Headers**:
```
Authorization: Bearer <admin_access_token>
```

**Query Parameters**:
- `userId`: Filtrar por usuario
- `action`: Filtrar por acción
- `resourceType`: Filtrar por tipo de recurso
- `from`: Fecha desde (ISO 8601)
- `to`: Fecha hasta (ISO 8601)
- `page`: Número de página
- `size`: Tamaño de página

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 1,
        "userId": 123,
        "userName": "Juan Pérez",
        "action": "LOGIN",
        "resourceType": null,
        "resourceId": null,
        "ipAddress": "192.168.1.100",
        "userAgent": "Mozilla/5.0...",
        "details": {},
        "createdAt": "2024-01-15T10:30:00Z"
      },
      {
        "id": 2,
        "userId": 123,
        "userName": "Juan Pérez",
        "action": "UPDATE",
        "resourceType": "PATIENT",
        "resourceId": 456,
        "ipAddress": "192.168.1.100",
        "details": {
          "changes": {
            "riskLevel": {
              "from": "GREEN",
              "to": "YELLOW"
            }
          }
        },
        "createdAt": "2024-01-15T10:35:00Z"
      }
    ],
    "page": 0,
    "size": 20,
    "totalElements": 150,
    "totalPages": 8
  }
}
```

---

## 📋 Endpoints de Gestión de Usuarios

### GET /api/auth/users

Listar usuarios (requiere rol ADMIN).

**Headers**:
```
Authorization: Bearer <admin_access_token>
```

**Query Parameters**:
- `role`: Filtrar por rol
- `clinicId`: Filtrar por clínica
- `isActive`: Filtrar por estado
- `search`: Búsqueda por nombre o email
- `page`, `size`, `sort`

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "content": [
      {
        "id": 123,
        "email": "doctor@clinica.com",
        "firstName": "Juan",
        "lastName": "Pérez",
        "role": "ODONTOLOGO",
        "clinicId": 1,
        "isActive": true,
        "emailVerified": true,
        "twoFactorEnabled": false,
        "lastLoginAt": "2024-01-15T10:30:00Z",
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ],
    "page": 0,
    "size": 20,
    "totalElements": 15,
    "totalPages": 1
  }
}
```

---

### GET /api/auth/users/{id}

Obtener detalles de un usuario.

**Headers**:
```
Authorization: Bearer <access_token>
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 123,
    "email": "doctor@clinica.com",
    "firstName": "Juan",
    "lastName": "Pérez",
    "phone": "+34612345678",
    "role": "ODONTOLOGO",
    "clinicId": 1,
    "isActive": true,
    "emailVerified": true,
    "phoneVerified": true,
    "twoFactorEnabled": false,
    "lastLoginAt": "2024-01-15T10:30:00Z",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### PUT /api/auth/users/{id}

Actualizar usuario (requiere rol ADMIN o ser el propio usuario).

**Headers**:
```
Authorization: Bearer <access_token>
```

**Request**:
```json
{
  "firstName": "Juan Carlos",
  "lastName": "Pérez García",
  "phone": "+34612345679",
  "role": "ODONTOLOGO"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": 123,
    "email": "doctor@clinica.com",
    "firstName": "Juan Carlos",
    "lastName": "Pérez García",
    "phone": "+34612345679",
    "role": "ODONTOLOGO",
    "updatedAt": "2024-01-15T11:00:00Z"
  }
}
```

---

### DELETE /api/auth/users/{id}

Desactivar usuario (soft delete, requiere rol ADMIN).

**Headers**:
```
Authorization: Bearer <admin_access_token>
```

**Response** (204 No Content)

---

## 🔐 Requisitos de Contraseña

Las contraseñas deben cumplir:
- Mínimo 8 caracteres
- Al menos una mayúscula
- Al menos una minúscula
- Al menos un número
- Al menos un carácter especial (!@#$%^&*)

## 🔒 Bloqueo de Cuenta

- Después de 5 intentos fallidos de login, la cuenta se bloquea por 30 minutos
- Un administrador puede desbloquear la cuenta manualmente

## 📊 Tokens JWT

### Access Token
- **Duración**: 15 minutos
- **Uso**: Autenticación en todas las APIs

### Refresh Token
- **Duración**: 7 días
- **Uso**: Renovar access token
- **Almacenamiento**: Base de datos (puede ser revocado)

### Estructura del JWT

```json
{
  "sub": "123",
  "email": "doctor@clinica.com",
  "name": "Juan Pérez",
  "role": "ODONTOLOGO",
  "clinicId": 1,
  "permissions": ["patients:read", "patients:write", ...],
  "iat": 1705315800,
  "exp": 1705316700
}
```

## 🔍 Validación de Email/Teléfono

### POST /api/auth/verify-email

Enviar email de verificación.

**Headers**:
```
Authorization: Bearer <access_token>
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "message": "Email de verificación enviado"
  }
}
```

---

### GET /api/auth/verify-email/{token}

Verificar email con token.

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "message": "Email verificado exitosamente"
  }
}
```

---

## 📝 Notas de Implementación

### Seguridad
- Usar BCrypt para hash de contraseñas (cost factor: 12)
- Implementar rate limiting estricto en endpoints de autenticación
- Registrar todos los intentos de login (exitosos y fallidos)
- Implementar CSRF protection para operaciones sensibles
- Usar HTTPS en todas las comunicaciones

### Performance
- Cachear permisos de usuario en Redis (TTL: 5 minutos)
- Implementar token blacklist en Redis para logout
- Usar índices en base de datos para búsquedas frecuentes

### Monitoreo
- Alertar sobre múltiples intentos fallidos de login
- Monitorear tiempo de respuesta de endpoints
- Registrar todas las operaciones de cambio de contraseña
