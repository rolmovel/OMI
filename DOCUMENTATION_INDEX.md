# Índice Completo de Documentación - OMI

Este documento proporciona un índice completo de toda la documentación del proyecto OMI.

## 📚 Documentación Principal

### Documentos de Inicio
| Documento | Descripción | Ubicación |
|-----------|-------------|-----------|
| **README.md** | Visión general del proyecto, características, instalación | [README.md](README.md) |
| **GETTING_STARTED.md** | Guía paso a paso para configurar el entorno | [GETTING_STARTED.md](GETTING_STARTED.md) |
| **NEXT_STEPS.md** | Roadmap y próximos pasos del proyecto | [NEXT_STEPS.md](NEXT_STEPS.md) |
| **PROJECT_SUMMARY.md** | Resumen ejecutivo completo del proyecto | [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) |
| **CONTRIBUTING.md** | Guía para contribuir al proyecto | [CONTRIBUTING.md](CONTRIBUTING.md) |
| **CHANGELOG.md** | Registro de cambios del proyecto | [CHANGELOG.md](CHANGELOG.md) |
| **LICENSE** | Licencia MIT del proyecto | [LICENSE](LICENSE) |

---

## 📋 Especificaciones Funcionales

### Requisitos y Casos de Uso
| Documento | Contenido | Ubicación |
|-----------|-----------|-----------|
| **Requisitos Funcionales** | 10 épicas con 100+ requisitos detallados | [docs/functional-specs/01-requisitos-funcionales.md](docs/functional-specs/01-requisitos-funcionales.md) |
| **Casos de Uso** | 13 casos de uso principales con flujos detallados | [docs/functional-specs/02-casos-de-uso.md](docs/functional-specs/02-casos-de-uso.md) |

#### Épicas de Requisitos Funcionales
1. **RF-01**: Acceso y Perfiles
2. **RF-02**: Gestión de Pacientes
3. **RF-03**: Carnet Digital
4. **RF-04**: Informes de Revisión
5. **RF-05**: Agenda y Recordatorios
6. **RF-06**: Comunicación con Familias
7. **RF-07**: Ventajas Económicas y Pagos
8. **RF-08**: Panel de Control Clínica
9. **RF-09**: Personalización
10. **RF-10**: Seguridad y Legalidad

#### Casos de Uso Principales
- **CU-01**: Login Profesional
- **CU-02**: Dar de Alta un Paciente
- **CU-03**: Realizar una Revisión
- **CU-04**: Generar y Enviar Informe
- **CU-05**: Gestionar Citas
- **CU-06**: Actualizar Nivel de Riesgo
- **CU-07**: Ver Dashboard y Estadísticas
- **CU-08**: Login Familia
- **CU-09**: Ver Carnet Digital
- **CU-10**: Solicitar Cita
- **CU-11**: Ver Informes de Revisión
- **CU-12**: Gestionar Pagos
- **CU-13**: Acceder a Recursos Educativos

---

## 🏗️ Especificaciones Técnicas

### Arquitectura y Diseño
| Documento | Contenido | Ubicación |
|-----------|-----------|-----------|
| **Arquitectura del Sistema** | Diseño de microservicios, stack tecnológico, infraestructura | [docs/technical-specs/01-arquitectura.md](docs/technical-specs/01-arquitectura.md) |
| **Modelo de Datos** | Esquemas de 8 bases de datos, relaciones, índices | [docs/technical-specs/02-modelo-datos.md](docs/technical-specs/02-modelo-datos.md) |

#### Microservicios Documentados
1. **Service Discovery** (Eureka) - Puerto 8761
2. **Config Server** - Puerto 8888
3. **API Gateway** - Puerto 8080
4. **Auth Service** - Puerto 8081
5. **Patient Service** - Puerto 8082
6. **Appointment Service** - Puerto 8083
7. **Notification Service** - Puerto 8084
8. **Report Service** - Puerto 8085
9. **Payment Service** - Puerto 8086
10. **Media Service** - Puerto 8087
11. **Analytics Service** - Puerto 8088

#### Bases de Datos
- `auth_db` - Usuarios, roles, permisos, sesiones
- `patient_db` - Pacientes, revisiones, planes de salud
- `appointment_db` - Citas, disponibilidad, lista de espera
- `notification_db` - Notificaciones, plantillas, preferencias
- `report_db` - Informes, plantillas de informes
- `payment_db` - Pagos, suscripciones, facturas
- `media_db` - Archivos multimedia, recursos educativos
- `analytics_db` - Métricas y estadísticas

---

## 🔌 Especificaciones de API

### Documentación de APIs REST
| Documento | Contenido | Ubicación |
|-----------|-----------|-----------|
| **API Gateway** | Rutas, autenticación, rate limiting, CORS | [docs/api-specs/01-api-gateway.md](docs/api-specs/01-api-gateway.md) |
| **Auth Service API** | Endpoints de autenticación, 2FA, gestión de usuarios | [docs/api-specs/02-auth-service.md](docs/api-specs/02-auth-service.md) |
| **Patient Service API** | CRUD pacientes, revisiones, carnet digital, riesgo | [docs/api-specs/03-patient-service.md](docs/api-specs/03-patient-service.md) |

#### Endpoints Principales por Servicio

**Auth Service**
- `POST /api/auth/login` - Login con email/contraseña
- `POST /api/auth/login/phone` - Login con teléfono + OTP
- `POST /api/auth/login/qr` - Login con código QR
- `POST /api/auth/refresh` - Renovar access token
- `POST /api/auth/logout` - Cerrar sesión
- `POST /api/auth/2fa/enable` - Habilitar 2FA
- `GET /api/auth/users` - Listar usuarios

**Patient Service**
- `GET /api/patients` - Listar pacientes
- `POST /api/patients` - Crear paciente
- `GET /api/patients/{id}` - Obtener paciente
- `PUT /api/patients/{id}` - Actualizar paciente
- `POST /api/patients/{id}/reviews` - Crear revisión
- `GET /api/patients/{id}/carnet` - Obtener carnet digital
- `GET /api/patients/{id}/risk-assessments` - Evaluaciones de riesgo

---

## 🎨 Diseño y UX

### Mockups y Wireframes
| Documento | Contenido | Ubicación |
|-----------|-----------|-----------|
| **Wireframes** | 12 pantallas principales con diseño ASCII | [docs/mockups/wireframes.md](docs/mockups/wireframes.md) |

#### Pantallas Documentadas

**Área Clínica (Desktop)**
1. Login
2. Dashboard Principal
3. Lista de Pacientes
4. Ficha de Paciente
5. Formulario de Revisión

**Área Familias (Web/Mobile)**
6. Login Familias
7. Home - Carnets de Hijos
8. Carnet Digital
9. Informes
10. Detalle de Informe
11. Solicitar Cita
12. Recursos Educativos

#### Guía de Estilo
- **Colores**: Primario (#4F46E5), Secundario (#06B6D4), Éxito, Advertencia, Error
- **Tipografía**: Inter, system-ui, sans-serif
- **Espaciado**: 8px, 16px, 24px, 32px
- **Bordes**: Radio 8px (cards), 4px (inputs)
- **Iconos**: Lucide Icons

---

## 📖 Historias de Usuario

### User Stories por Área
| Documento | Contenido | Ubicación |
|-----------|-----------|-----------|
| **Historias Área Familias** | 30 user stories para padres y niños | [docs/user-stories/01-familias.md](docs/user-stories/01-familias.md) |
| **Historias Área Clínica** | 30 user stories para profesionales | [docs/user-stories/02-clinica.md](docs/user-stories/02-clinica.md) |

#### Épicas de User Stories

**Área Familias**
1. Acceso y Autenticación (US-F-001 a US-F-004)
2. Visualización del Carnet Digital (US-F-005 a US-F-009)
3. Informes de Revisión (US-F-010 a US-F-014)
4. Gestión de Citas (US-F-015 a US-F-019)
5. Recursos Educativos (US-F-020 a US-F-023)
6. Pagos y Facturación (US-F-024 a US-F-027)
7. Perfil y Configuración (US-F-028 a US-F-030)

**Área Clínica**
1. Gestión de Pacientes (US-C-001 a US-C-005)
2. Registro de Revisiones (US-C-006 a US-C-012)
3. Generación de Informes (US-C-013 a US-C-015)
4. Gestión de Nivel de Riesgo (US-C-016 a US-C-018)
5. Dashboard y Estadísticas (US-C-019 a US-C-022)
6. Gestión de Agenda (US-C-023 a US-C-026)
7. Configuración y Administración (US-C-027 a US-C-030)

---

## 🔧 Configuración y Desarrollo

### Archivos de Configuración
| Archivo | Propósito | Ubicación |
|---------|-----------|-----------|
| **docker-compose.yml** | Orquestación de servicios para desarrollo | [docker-compose.yml](docker-compose.yml) |
| **init-databases.sql** | Script de inicialización de bases de datos | [backend/init-databases.sql](backend/init-databases.sql) |
| **.gitignore** | Archivos y directorios ignorados por Git | [.gitignore](.gitignore) |

### Templates de GitHub
| Template | Propósito | Ubicación |
|----------|-----------|-----------|
| **User Story** | Template para historias de usuario | [.github/ISSUE_TEMPLATE/user-story.md](.github/ISSUE_TEMPLATE/user-story.md) |
| **Bug Report** | Template para reportar bugs | [.github/ISSUE_TEMPLATE/bug.md](.github/ISSUE_TEMPLATE/bug.md) |
| **Feature Request** | Template para solicitar funcionalidades | [.github/ISSUE_TEMPLATE/feature.md](.github/ISSUE_TEMPLATE/feature.md) |
| **Pull Request** | Template para pull requests | [.github/pull_request_template.md](.github/pull_request_template.md) |

---

## 📊 Estadísticas de Documentación

### Resumen de Contenido Creado

| Categoría | Cantidad | Detalles |
|-----------|----------|----------|
| **Documentos Markdown** | 25+ | Especificaciones, guías, templates |
| **Requisitos Funcionales** | 100+ | Organizados en 10 épicas |
| **Casos de Uso** | 13 | Con flujos principales y alternativos |
| **Historias de Usuario** | 60+ | Priorizadas por sprints |
| **Wireframes** | 12 | Pantallas principales |
| **Endpoints API** | 50+ | Documentados con ejemplos |
| **Tablas de Base de Datos** | 40+ | Con índices y relaciones |
| **Microservicios** | 11 | Completamente especificados |

### Líneas de Documentación
- **Total aproximado**: 15,000+ líneas de documentación
- **Especificaciones Funcionales**: ~3,000 líneas
- **Especificaciones Técnicas**: ~4,000 líneas
- **APIs**: ~2,000 líneas
- **User Stories**: ~3,000 líneas
- **Wireframes y Diseño**: ~2,000 líneas
- **Guías y README**: ~1,000 líneas

---

## 🎯 Cómo Navegar la Documentación

### Para Desarrolladores Nuevos
1. Empieza con [README.md](README.md) para visión general
2. Lee [GETTING_STARTED.md](GETTING_STARTED.md) para configurar entorno
3. Revisa [Arquitectura](docs/technical-specs/01-arquitectura.md) para entender el sistema
4. Consulta [API Specs](docs/api-specs/) para implementar endpoints
5. Revisa [User Stories](docs/user-stories/) para entender funcionalidades

### Para Product Owners
1. Lee [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) para visión ejecutiva
2. Revisa [Requisitos Funcionales](docs/functional-specs/01-requisitos-funcionales.md)
3. Consulta [User Stories](docs/user-stories/) para backlog
4. Revisa [Wireframes](docs/mockups/wireframes.md) para UX
5. Lee [NEXT_STEPS.md](NEXT_STEPS.md) para roadmap

### Para Diseñadores
1. Revisa [Wireframes](docs/mockups/wireframes.md)
2. Consulta la Guía de Estilo en wireframes
3. Revisa [Casos de Uso](docs/functional-specs/02-casos-de-uso.md) para flujos
4. Lee [User Stories](docs/user-stories/) para entender necesidades

### Para Stakeholders/Inversores
1. Lee [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)
2. Revisa [README.md](README.md) para características
3. Consulta [NEXT_STEPS.md](NEXT_STEPS.md) para roadmap
4. Revisa [Wireframes](docs/mockups/wireframes.md) para visualizar producto

---

## 🔄 Mantenimiento de la Documentación

### Responsabilidades
- **Tech Lead**: Mantener documentación técnica actualizada
- **Product Owner**: Mantener requisitos y user stories
- **Diseñador**: Mantener wireframes y guía de estilo
- **Todos**: Actualizar CHANGELOG.md con cada cambio

### Proceso de Actualización
1. Al implementar una funcionalidad, actualizar documentación correspondiente
2. Al cambiar arquitectura, actualizar diagramas y especificaciones
3. Al añadir endpoints, documentar en API specs
4. Al completar user stories, marcar como completadas
5. Actualizar CHANGELOG.md en cada release

### Versionado de Documentación
- La documentación sigue el mismo versionado que el código
- Cada release tiene su documentación correspondiente
- Documentación obsoleta se marca claramente

---

## 📞 Contacto y Soporte

Para preguntas sobre la documentación:
- **Issues**: https://github.com/tu-org/omi/issues
- **Email**: dev@omi-health.com
- **Wiki**: https://github.com/tu-org/omi/wiki

---

## ✅ Checklist de Documentación Completa

- [x] README principal
- [x] Guía de inicio rápido
- [x] Guía de contribución
- [x] Requisitos funcionales completos
- [x] Casos de uso detallados
- [x] Arquitectura técnica
- [x] Modelo de datos
- [x] Especificaciones de API
- [x] Wireframes y diseño
- [x] Historias de usuario
- [x] Templates de GitHub
- [x] Docker Compose
- [x] Roadmap y próximos pasos
- [x] Resumen ejecutivo
- [x] Changelog
- [x] Licencia
- [x] Este índice

**Estado**: ✅ Documentación 100% Completa

---

**Última actualización**: Enero 2024  
**Versión del documento**: 1.0  
**Mantenido por**: Equipo OMI
