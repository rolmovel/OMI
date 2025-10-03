# Arquitectura del Sistema - OMI

## 🏗️ Visión General de la Arquitectura

OMI utiliza una arquitectura de microservicios basada en Spring Boot para el backend y Tauri + React para el frontend, diseñada para ser escalable, mantenible y segura.

### Principios Arquitectónicos

1. **Separación de Responsabilidades**: Cada microservicio tiene una responsabilidad única y bien definida
2. **Escalabilidad Horizontal**: Los servicios pueden escalar independientemente según la demanda
3. **Resiliencia**: Implementación de circuit breakers y fallbacks
4. **Seguridad por Diseño**: Autenticación y autorización en todas las capas
5. **Observabilidad**: Logging, métricas y tracing distribuido
6. **API First**: Diseño de APIs antes de la implementación

---

## 📐 Diagrama de Arquitectura de Alto Nivel

```
┌─────────────────────────────────────────────────────────────────┐
│                         CAPA DE PRESENTACIÓN                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐ │
│  │   Tauri Desktop  │  │    Web Portal    │  │  Mobile PWA  │ │
│  │  (Clínica)       │  │   (Familias)     │  │  (Familias)  │ │
│  │  React + TS      │  │   React + TS     │  │  React + TS  │ │
│  └──────────────────┘  └──────────────────┘  └──────────────┘ │
│           │                     │                     │          │
└───────────┼─────────────────────┼─────────────────────┼─────────┘
            │                     │                     │
            └─────────────────────┴─────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                         CAPA DE API GATEWAY                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐│
│  │           Spring Cloud Gateway (Port 8080)                  ││
│  │  - Routing                                                  ││
│  │  - Load Balancing                                           ││
│  │  - Authentication                                           ││
│  │  - Rate Limiting                                            ││
│  │  - CORS                                                     ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                  │
└──────────────────────────────────────┬───────────────────────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
                    ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                    CAPA DE SERVICE DISCOVERY                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐│
│  │         Eureka Service Registry (Port 8761)                 ││
│  │  - Service Registration                                     ││
│  │  - Service Discovery                                        ││
│  │  - Health Checks                                            ││
│  └────────────────────────────────────────────────────────────┘│
│                                                                  │
└──────────────────────────────────────┬───────────────────────────┘
                                       │
        ┌──────────────────────────────┼──────────────────────────┐
        │              │               │               │           │
        ▼              ▼               ▼               ▼           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CAPA DE MICROSERVICIOS                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Auth       │  │   Patient    │  │  Appointment │         │
│  │   Service    │  │   Service    │  │   Service    │         │
│  │  (Port 8081) │  │  (Port 8082) │  │  (Port 8083) │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ Notification │  │   Report     │  │   Payment    │         │
│  │   Service    │  │   Service    │  │   Service    │         │
│  │  (Port 8084) │  │  (Port 8085) │  │  (Port 8086) │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Media      │  │  Analytics   │  │   Config     │         │
│  │   Service    │  │   Service    │  │   Server     │         │
│  │  (Port 8087) │  │  (Port 8088) │  │  (Port 8888) │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                  │
└──────────────────────────────────────┬───────────────────────────┘
                                       │
        ┌──────────────────────────────┼──────────────────────────┐
        │              │               │               │           │
        ▼              ▼               ▼               ▼           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CAPA DE PERSISTENCIA                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  PostgreSQL  │  │    Redis     │  │   MinIO/S3   │         │
│  │  (Relacional)│  │   (Cache)    │  │  (Archivos)  │         │
│  │  Port 5432   │  │  Port 6379   │  │  Port 9000   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    SERVICIOS EXTERNOS                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │    Email     │  │     SMS      │  │   Payment    │         │
│  │   Provider   │  │   Provider   │  │   Gateway    │         │
│  │   (SMTP)     │  │   (Twilio)   │  │   (Stripe)   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔧 Descripción de Componentes

### Frontend

#### 1. Tauri Desktop (Área Clínica)
**Tecnologías**: Tauri, React, TypeScript, TailwindCSS, Shadcn/ui

**Responsabilidades**:
- Interfaz para profesionales de la clínica
- Gestión de pacientes
- Registro de revisiones
- Generación de informes
- Dashboard y estadísticas
- Gestión de agenda

**Características**:
- Aplicación nativa multiplataforma (Windows, macOS, Linux)
- Acceso a recursos del sistema (cámara, impresora)
- Almacenamiento local para trabajo offline
- Sincronización automática cuando hay conexión

#### 2. Web Portal (Área Familias)
**Tecnologías**: React, TypeScript, TailwindCSS, Shadcn/ui

**Responsabilidades**:
- Visualización de carnets digitales
- Acceso a informes
- Solicitud de citas
- Gestión de pagos
- Recursos educativos

**Características**:
- Responsive design
- Progressive Web App (PWA)
- Optimizado para móviles
- Notificaciones push

### Backend - Microservicios

#### 1. API Gateway (Spring Cloud Gateway)
**Puerto**: 8080

**Responsabilidades**:
- Punto de entrada único para todas las peticiones
- Enrutamiento a microservicios
- Balanceo de carga
- Autenticación y autorización
- Rate limiting
- CORS
- Request/Response logging

**Configuración**:
```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: auth-service
          uri: lb://AUTH-SERVICE
          predicates:
            - Path=/api/auth/**
        - id: patient-service
          uri: lb://PATIENT-SERVICE
          predicates:
            - Path=/api/patients/**
```

#### 2. Service Discovery (Eureka Server)
**Puerto**: 8761

**Responsabilidades**:
- Registro de microservicios
- Descubrimiento de servicios
- Health checks
- Load balancing

#### 3. Config Server (Spring Cloud Config)
**Puerto**: 8888

**Responsabilidades**:
- Configuración centralizada
- Gestión de propiedades por entorno
- Actualización dinámica de configuración
- Almacenamiento en Git

#### 4. Auth Service
**Puerto**: 8081
**Base de Datos**: PostgreSQL (auth_db)

**Responsabilidades**:
- Autenticación de usuarios (JWT)
- Gestión de sesiones
- Autenticación de dos factores (2FA)
- Generación de códigos QR
- Gestión de roles y permisos
- Recuperación de contraseñas
- Registro de accesos (audit log)

**Endpoints Principales**:
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/register` - Registro
- `POST /api/auth/forgot-password` - Recuperar contraseña
- `POST /api/auth/verify-2fa` - Verificar 2FA
- `GET /api/auth/qr-code/{userId}` - Generar QR

**Tecnologías**:
- Spring Security
- JWT (JSON Web Tokens)
- BCrypt para passwords
- TOTP para 2FA

#### 5. Patient Service
**Puerto**: 8082
**Base de Datos**: PostgreSQL (patient_db)

**Responsabilidades**:
- Gestión de pacientes (CRUD)
- Gestión de planes de salud
- Historial clínico
- Gestión de revisiones
- Cálculo de nivel de riesgo
- Odontograma
- Búsqueda y filtrado de pacientes

**Endpoints Principales**:
- `GET /api/patients` - Listar pacientes
- `GET /api/patients/{id}` - Obtener paciente
- `POST /api/patients` - Crear paciente
- `PUT /api/patients/{id}` - Actualizar paciente
- `DELETE /api/patients/{id}` - Eliminar paciente
- `GET /api/patients/{id}/history` - Historial
- `POST /api/patients/{id}/reviews` - Crear revisión
- `GET /api/patients/{id}/risk-level` - Nivel de riesgo
- `GET /api/patients/{id}/carnet` - Carnet digital

**Modelos Principales**:
- Patient
- HealthPlan
- Review
- RiskAssessment
- Odontogram
- Treatment

#### 6. Appointment Service
**Puerto**: 8083
**Base de Datos**: PostgreSQL (appointment_db)

**Responsabilidades**:
- Gestión de citas (CRUD)
- Calendario de disponibilidad
- Recordatorios de citas
- Lista de espera
- Integración con calendarios externos (Google Calendar)
- Estadísticas de asistencia

**Endpoints Principales**:
- `GET /api/appointments` - Listar citas
- `GET /api/appointments/{id}` - Obtener cita
- `POST /api/appointments` - Crear cita
- `PUT /api/appointments/{id}` - Actualizar cita
- `DELETE /api/appointments/{id}` - Cancelar cita
- `GET /api/appointments/availability` - Disponibilidad
- `POST /api/appointments/{id}/confirm` - Confirmar cita
- `GET /api/appointments/patient/{patientId}` - Citas de paciente

**Modelos Principales**:
- Appointment
- Availability
- WaitingList
- AppointmentType

#### 7. Notification Service
**Puerto**: 8084
**Base de Datos**: PostgreSQL (notification_db)

**Responsabilidades**:
- Envío de notificaciones push
- Envío de emails
- Envío de SMS
- Gestión de plantillas
- Programación de notificaciones
- Historial de notificaciones
- Preferencias de notificación por usuario

**Endpoints Principales**:
- `POST /api/notifications/send` - Enviar notificación
- `POST /api/notifications/schedule` - Programar notificación
- `GET /api/notifications/user/{userId}` - Notificaciones de usuario
- `PUT /api/notifications/{id}/read` - Marcar como leída
- `GET /api/notifications/preferences/{userId}` - Preferencias
- `PUT /api/notifications/preferences/{userId}` - Actualizar preferencias

**Integraciones**:
- SMTP para emails
- Twilio para SMS
- Firebase Cloud Messaging para push notifications

#### 8. Report Service
**Puerto**: 8085
**Base de Datos**: PostgreSQL (report_db)

**Responsabilidades**:
- Generación de informes PDF
- Plantillas de informes
- Almacenamiento de informes generados
- Envío automático de informes
- Historial de informes

**Endpoints Principales**:
- `POST /api/reports/generate` - Generar informe
- `GET /api/reports/{id}` - Obtener informe
- `GET /api/reports/patient/{patientId}` - Informes de paciente
- `POST /api/reports/{id}/send` - Enviar informe
- `GET /api/reports/{id}/download` - Descargar PDF

**Tecnologías**:
- Apache PDFBox o iText para generación de PDFs
- Thymeleaf para plantillas HTML
- Flying Saucer para HTML to PDF

#### 9. Payment Service
**Puerto**: 8086
**Base de Datos**: PostgreSQL (payment_db)

**Responsabilidades**:
- Gestión de pagos
- Integración con pasarela de pago
- Gestión de suscripciones
- Facturación
- Historial de transacciones
- Domiciliaciones bancarias

**Endpoints Principales**:
- `POST /api/payments/process` - Procesar pago
- `GET /api/payments/patient/{patientId}` - Pagos de paciente
- `POST /api/payments/subscription` - Crear suscripción
- `PUT /api/payments/subscription/{id}` - Actualizar suscripción
- `GET /api/payments/invoices/{id}` - Obtener factura
- `POST /api/payments/refund` - Procesar reembolso

**Integraciones**:
- Stripe o Redsys para pagos
- SEPA para domiciliaciones

#### 10. Media Service
**Puerto**: 8087
**Base de Datos**: PostgreSQL (media_db) + MinIO/S3

**Responsabilidades**:
- Almacenamiento de imágenes clínicas
- Procesamiento de imágenes (resize, compress)
- Gestión de fotos de pacientes
- Almacenamiento de recursos educativos
- CDN para entrega rápida
- Encriptación de imágenes sensibles

**Endpoints Principales**:
- `POST /api/media/upload` - Subir archivo
- `GET /api/media/{id}` - Obtener archivo
- `DELETE /api/media/{id}` - Eliminar archivo
- `GET /api/media/patient/{patientId}` - Imágenes de paciente
- `POST /api/media/process` - Procesar imagen

**Tecnologías**:
- MinIO o AWS S3 para almacenamiento
- ImageMagick o Thumbnailator para procesamiento
- AES-256 para encriptación

#### 11. Analytics Service
**Puerto**: 8088
**Base de Datos**: PostgreSQL (analytics_db)

**Responsabilidades**:
- Recopilación de métricas
- Generación de estadísticas
- Dashboard de la clínica
- Reportes personalizados
- Exportación de datos
- KPIs del negocio

**Endpoints Principales**:
- `GET /api/analytics/dashboard` - Dashboard principal
- `GET /api/analytics/patients/stats` - Estadísticas de pacientes
- `GET /api/analytics/appointments/stats` - Estadísticas de citas
- `GET /api/analytics/revenue/stats` - Estadísticas financieras
- `POST /api/analytics/export` - Exportar datos
- `GET /api/analytics/reports/custom` - Reportes personalizados

---

## 🗄️ Estrategia de Base de Datos

### Database per Service Pattern

Cada microservicio tiene su propia base de datos PostgreSQL para mantener la independencia y permitir escalado individual.

```
┌─────────────────┐
│  auth_db        │  - users, roles, permissions, sessions
├─────────────────┤
│  patient_db     │  - patients, health_plans, reviews, risk_assessments
├─────────────────┤
│  appointment_db │  - appointments, availability, waiting_list
├─────────────────┤
│  notification_db│  - notifications, templates, preferences
├─────────────────┤
│  report_db      │  - reports, report_templates
├─────────────────┤
│  payment_db     │  - payments, subscriptions, invoices
├─────────────────┤
│  media_db       │  - media_metadata (archivos en MinIO/S3)
├─────────────────┤
│  analytics_db   │  - aggregated_data, metrics
└─────────────────┘
```

### Gestión de Transacciones Distribuidas

Para operaciones que involucran múltiples servicios, se utiliza el patrón **Saga**:

**Ejemplo: Crear Paciente y Enviar Bienvenida**

1. Patient Service crea el paciente
2. Auth Service crea las credenciales
3. Notification Service envía email de bienvenida

Si algún paso falla, se ejecutan compensaciones:
- Si falla el email, se marca para reintento
- Si falla la creación de credenciales, se elimina el paciente

---

## 🔐 Seguridad

### Autenticación y Autorización

#### JWT (JSON Web Tokens)

```json
{
  "sub": "user123",
  "name": "Dr. Juan Pérez",
  "role": "ODONTOLOGO",
  "clinicId": "clinic456",
  "iat": 1234567890,
  "exp": 1234571490
}
```

**Access Token**: 15 minutos de validez
**Refresh Token**: 7 días de validez

#### Flujo de Autenticación

```
Cliente                 API Gateway           Auth Service
   │                         │                      │
   │  1. POST /auth/login    │                      │
   ├────────────────────────>│                      │
   │                         │  2. Validate         │
   │                         ├─────────────────────>│
   │                         │                      │
   │                         │  3. JWT Tokens       │
   │                         │<─────────────────────┤
   │  4. Tokens              │                      │
   │<────────────────────────┤                      │
   │                         │                      │
   │  5. GET /patients       │                      │
   │  (Authorization: Bearer)│                      │
   ├────────────────────────>│                      │
   │                         │  6. Verify JWT       │
   │                         ├─────────────────────>│
   │                         │  7. Valid            │
   │                         │<─────────────────────┤
   │                         │  8. Forward Request  │
   │                         ├──────────────────────> Patient Service
```

### Roles y Permisos

```yaml
Roles:
  ADMIN:
    - Acceso completo al sistema
    - Gestión de usuarios
    - Configuración de la clínica
    
  ODONTOLOGO:
    - Gestión de pacientes
    - Registro de revisiones
    - Generación de informes
    - Visualización de estadísticas
    
  HIGIENISTA:
    - Registro de sesiones de higiene
    - Seguimiento HIM
    - Educación preventiva
    - Visualización de historial
    
  RECEPCION:
    - Gestión de citas
    - Alta de pacientes
    - Gestión de pagos
    - Envío de recordatorios
    
  PADRE:
    - Visualización de carnets de sus hijos
    - Acceso a informes
    - Solicitud de citas
    - Gestión de pagos
    
  NINO:
    - Visualización de su carnet (simplificado)
    - Acceso a contenido educativo
```

### Encriptación

- **En tránsito**: TLS 1.3
- **En reposo**: AES-256
- **Passwords**: BCrypt con salt
- **Datos sensibles**: Encriptación a nivel de campo

### RGPD Compliance

- **Consentimientos**: Registro con timestamp y versión
- **Derecho al olvido**: Anonimización de datos
- **Portabilidad**: Exportación en formato estándar
- **Auditoría**: Log de todos los accesos a datos personales
- **Minimización**: Solo se recopilan datos necesarios
- **Retención**: Políticas de eliminación automática

---

## 📊 Observabilidad

### Logging

**Stack**: ELK (Elasticsearch, Logstash, Kibana) o Loki

**Niveles de Log**:
- ERROR: Errores que requieren atención
- WARN: Situaciones anómalas pero manejables
- INFO: Eventos importantes del negocio
- DEBUG: Información detallada para debugging

**Formato de Log**:
```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "INFO",
  "service": "patient-service",
  "traceId": "abc123",
  "spanId": "def456",
  "userId": "user789",
  "message": "Patient created successfully",
  "data": {
    "patientId": "patient123"
  }
}
```

### Métricas

**Stack**: Prometheus + Grafana

**Métricas Clave**:
- Request rate (requests/second)
- Error rate (%)
- Response time (p50, p95, p99)
- CPU y memoria por servicio
- Conexiones a base de datos
- Tamaño de colas

### Tracing Distribuido

**Stack**: Jaeger o Zipkin

Permite seguir una request a través de todos los microservicios.

### Health Checks

Cada microservicio expone endpoints de health:

```
GET /actuator/health
{
  "status": "UP",
  "components": {
    "db": {
      "status": "UP"
    },
    "diskSpace": {
      "status": "UP"
    }
  }
}
```

---

## 🚀 Despliegue

### Contenedorización

Cada microservicio se empaqueta en un contenedor Docker:

```dockerfile
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### Orquestación

**Opción 1: Docker Compose** (Desarrollo y pequeñas instalaciones)

```yaml
version: '3.8'
services:
  eureka:
    image: omi/service-discovery:latest
    ports:
      - "8761:8761"
  
  api-gateway:
    image: omi/api-gateway:latest
    ports:
      - "8080:8080"
    depends_on:
      - eureka
  
  patient-service:
    image: omi/patient-service:latest
    depends_on:
      - eureka
      - postgres
```

**Opción 2: Kubernetes** (Producción y escalado)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: patient-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: patient-service
  template:
    metadata:
      labels:
        app: patient-service
    spec:
      containers:
      - name: patient-service
        image: omi/patient-service:latest
        ports:
        - containerPort: 8082
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "production"
```

### CI/CD

**Pipeline con GitHub Actions**:

1. **Build**: Compilar código y ejecutar tests
2. **Test**: Tests unitarios e integración
3. **Security Scan**: Análisis de vulnerabilidades
4. **Build Docker Image**: Crear imagen Docker
5. **Push to Registry**: Subir a Docker Hub/GitHub Container Registry
6. **Deploy**: Desplegar en entorno correspondiente

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
      - name: Build with Maven
        run: mvn clean package
      - name: Run tests
        run: mvn test
      - name: Build Docker image
        run: docker build -t omi/patient-service:${{ github.sha }} .
      - name: Push to registry
        run: docker push omi/patient-service:${{ github.sha }}
```

### Entornos

1. **Development**: Desarrollo local
2. **Testing**: Tests automatizados
3. **Staging**: Pre-producción
4. **Production**: Producción

---

## 🔄 Comunicación entre Servicios

### Síncrona: REST API

Para operaciones que requieren respuesta inmediata.

```
Patient Service ──HTTP──> Report Service
                          (Generar informe)
```

### Asíncrona: Message Queue

Para operaciones que pueden ser procesadas en background.

**Stack**: RabbitMQ o Apache Kafka

```
Patient Service ──Publish──> Queue ──Subscribe──> Notification Service
                (Patient Created)                 (Send Welcome Email)
```

**Ventajas**:
- Desacoplamiento
- Resiliencia
- Escalabilidad
- Procesamiento asíncrono

---

## 📈 Escalabilidad

### Escalado Horizontal

Los microservicios pueden escalar independientemente:

```
┌─────────────────────────────────────┐
│  API Gateway (1 instancia)          │
└─────────────────┬───────────────────┘
                  │
      ┌───────────┼───────────┐
      │           │           │
      ▼           ▼           ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Patient  │ │ Patient  │ │ Patient  │
│ Service  │ │ Service  │ │ Service  │
│ (Inst 1) │ │ (Inst 2) │ │ (Inst 3) │
└──────────┘ └──────────┘ └──────────┘
```

### Caché

**Redis** para:
- Sesiones de usuario
- Datos frecuentemente accedidos
- Rate limiting
- Resultados de queries costosas

### CDN

Para servir contenido estático:
- Imágenes de la clínica
- Recursos educativos
- Assets del frontend

---

## 🛡️ Resiliencia

### Circuit Breaker

Implementado con **Resilience4j**:

```java
@CircuitBreaker(name = "reportService", fallbackMethod = "fallbackGenerateReport")
public Report generateReport(Long patientId) {
    return reportServiceClient.generate(patientId);
}

public Report fallbackGenerateReport(Long patientId, Exception e) {
    // Retornar respuesta por defecto o error amigable
    return Report.builder()
        .status("PENDING")
        .message("El informe se generará en breve")
        .build();
}
```

### Retry

Para operaciones que pueden fallar temporalmente:

```java
@Retry(name = "emailService", maxAttempts = 3)
public void sendEmail(Email email) {
    emailProvider.send(email);
}
```

### Timeout

Para evitar que requests se queden colgadas:

```java
@TimeLimiter(name = "default", timeout = 5s)
public CompletableFuture<Response> callExternalService() {
    return externalService.call();
}
```

---

## 📝 Consideraciones de Implementación

### Fase MVP

**Servicios Mínimos**:
1. API Gateway
2. Service Discovery
3. Auth Service
4. Patient Service
5. Report Service
6. Media Service

**Infraestructura Mínima**:
- 1 servidor PostgreSQL (múltiples databases)
- 1 servidor Redis
- 1 servidor MinIO
- 1 servidor para microservicios (Docker Compose)

### Fases Posteriores

**Fase 2**: Añadir Appointment Service, Notification Service
**Fase 3**: Añadir Payment Service, Analytics Service
**Fase 4**: Migrar a Kubernetes, añadir más instancias

---

## 🔧 Tecnologías y Versiones

### Backend
- Java 17
- Spring Boot 3.2.0
- Spring Cloud 2023.0.0
- PostgreSQL 15
- Redis 7
- MinIO (latest)

### Frontend
- Tauri 1.5
- React 18
- TypeScript 5
- TailwindCSS 3
- Vite 5

### DevOps
- Docker 24
- Docker Compose 2
- Kubernetes 1.28 (opcional)
- GitHub Actions

### Observabilidad
- Prometheus
- Grafana
- Jaeger/Zipkin
- ELK Stack

---

## 📚 Referencias

- [Spring Cloud Documentation](https://spring.io/projects/spring-cloud)
- [Microservices Patterns](https://microservices.io/patterns/)
- [Tauri Documentation](https://tauri.app/)
- [RGPD Compliance Guide](https://gdpr.eu/)
- [12 Factor App](https://12factor.net/)
