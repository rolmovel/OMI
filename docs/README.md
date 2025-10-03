# OMI - Documentación del Proyecto

## 📚 Índice de Documentación

### 1. Especificaciones Funcionales
- [Requisitos Funcionales](./functional-specs/01-requisitos-funcionales.md)
- [Casos de Uso](./functional-specs/02-casos-de-uso.md)
- [Flujos de Usuario](./functional-specs/03-flujos-usuario.md)
- [Reglas de Negocio](./functional-specs/04-reglas-negocio.md)

### 2. Especificaciones Técnicas
- [Arquitectura del Sistema](./technical-specs/01-arquitectura.md)
- [Modelo de Datos](./technical-specs/02-modelo-datos.md)
- [Seguridad y RGPD](./technical-specs/03-seguridad-rgpd.md)
- [Infraestructura](./technical-specs/04-infraestructura.md)

### 3. API Specifications
- [API Gateway](./api-specs/01-api-gateway.md)
- [Servicio de Autenticación](./api-specs/02-auth-service.md)
- [Servicio de Pacientes](./api-specs/03-patient-service.md)
- [Servicio de Citas](./api-specs/04-appointment-service.md)
- [Servicio de Notificaciones](./api-specs/05-notification-service.md)

### 4. Mockups y Diseño
- [Wireframes](./mockups/wireframes/)
- [Prototipos de Alta Fidelidad](./mockups/high-fidelity/)
- [Guía de Estilo](./mockups/style-guide.md)
- [Sistema de Diseño](./mockups/design-system.md)

### 5. User Stories
- [Historias de Usuario - Familias](./user-stories/01-familias.md)
- [Historias de Usuario - Clínica](./user-stories/02-clinica.md)
- [Historias de Usuario - Administración](./user-stories/03-administracion.md)

## 🎯 Visión del Proyecto

**OMI** es una aplicación integral para la gestión del Plan de Salud Infantil que conecta clínicas dentales con familias, facilitando el seguimiento preventivo de la salud bucodental infantil.

## 🚀 Objetivos Principales

1. **Digitalizar** el proceso de seguimiento del Plan de Salud Infantil
2. **Mejorar** la comunicación entre clínica y familias
3. **Gamificar** la experiencia para motivar a los niños
4. **Automatizar** recordatorios y seguimientos
5. **Centralizar** toda la información clínica y administrativa

## 👥 Usuarios del Sistema

### Área Clínica
- **Administrador**: Gestión completa del sistema
- **Odontólogo**: Registro de revisiones y tratamientos
- **Higienista**: Seguimiento preventivo y educación
- **Recepción**: Gestión de citas y pagos

### Área Familias
- **Padres/Tutores**: Acceso al carnet digital y comunicación con la clínica
- **Niños**: Visualización de su carnet y gamificación

## 📱 Plataformas

- **Desktop**: Aplicación Tauri para Windows/macOS/Linux (área clínica)
- **Web**: Portal web responsive (área familias)
- **Mobile**: PWA optimizada para móviles (área familias)

## 🏗️ Stack Tecnológico

### Frontend
- **Tauri**: Framework para aplicación desktop
- **React + TypeScript**: Framework UI
- **TailwindCSS**: Estilos
- **Shadcn/ui**: Componentes UI

### Backend
- **Spring Boot**: Microservicios
- **Spring Cloud**: Service Discovery, API Gateway
- **PostgreSQL**: Base de datos principal
- **Redis**: Caché y sesiones
- **MinIO/S3**: Almacenamiento de imágenes

### Infraestructura
- **Docker**: Containerización
- **Kubernetes**: Orquestación (opcional)
- **GitHub Actions**: CI/CD
- **Servidores UE**: Cumplimiento RGPD

## 📅 Fases del Proyecto

### Fase 1: MVP (Mínimo Producto Viable)
- Gestión básica de pacientes
- Carnet digital
- Informes de revisión
- Autenticación y perfiles

### Fase 2: Funcionalidades Avanzadas
- Sistema de notificaciones
- Integración con agenda
- Panel de estadísticas
- Módulo de pagos

### Fase 3: Gamificación y Educación
- Sistema de medallas y logros
- Recursos educativos
- Comunicación bidireccional

### Fase 4: Integraciones
- Integración con Nemo
- Pasarela de pagos
- WhatsApp Business API
- Exportación de datos

## 📊 Métricas de Éxito

- Tasa de adopción por parte de las familias
- Reducción en citas perdidas
- Mejora en adherencia a tratamientos preventivos
- Satisfacción de usuarios (NPS)
- Tiempo ahorrado en tareas administrativas

## 🔒 Cumplimiento Legal

- **RGPD**: Protección de datos personales y sanitarios
- **LOPD**: Ley Orgánica de Protección de Datos
- **Ley 41/2002**: Autonomía del paciente
- **ISO 27001**: Seguridad de la información (objetivo)

## 📞 Contacto y Soporte

- **Repositorio**: GitHub (privado)
- **Gestión de Tareas**: GitHub Projects
- **Documentación**: GitHub Wiki + `/docs`
- **Issues**: GitHub Issues
