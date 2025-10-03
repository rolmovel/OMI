# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

### Planeado
- Sistema completo de citas y agenda
- Módulo de pagos integrado
- Notificaciones push
- Recursos educativos
- Sistema de logros y gamificación

## [0.1.0] - 2024-01-15

### Añadido
- Documentación funcional completa
  - Requisitos funcionales (10 épicas, 100+ requisitos)
  - Casos de uso detallados (13 casos principales)
  - Flujos de usuario
  - Reglas de negocio
- Especificaciones técnicas
  - Arquitectura de microservicios
  - Modelo de datos (8 bases de datos)
  - Especificaciones de API (Gateway, Auth, Patient)
  - Documentación de seguridad y RGPD
- Diseño y UX
  - Wireframes de 12 pantallas principales
  - Guía de estilo
  - Sistema de diseño
- Gestión de proyecto
  - 60+ historias de usuario
  - Backlog priorizado
  - Roadmap detallado
  - Templates de GitHub (issues, PRs)
- Infraestructura
  - Docker Compose para desarrollo
  - Scripts de inicialización de BD
  - Configuración de CI/CD básica
- Documentación de desarrollo
  - README completo
  - Guía de contribución
  - Guía de inicio rápido
  - Próximos pasos

### Estructura del Proyecto
```
OMI/
├── backend/                    # Microservicios Spring Boot
│   ├── api-gateway/
│   ├── service-discovery/
│   ├── config-server/
│   ├── auth-service/
│   ├── patient-service/
│   ├── appointment-service/
│   ├── notification-service/
│   ├── report-service/
│   ├── payment-service/
│   ├── media-service/
│   └── analytics-service/
├── frontend/                   # Aplicación Tauri + React
├── docs/                       # Documentación completa
│   ├── functional-specs/
│   ├── technical-specs/
│   ├── api-specs/
│   ├── mockups/
│   └── user-stories/
├── .github/                    # Templates y workflows
├── docker-compose.yml
├── README.md
├── CONTRIBUTING.md
├── GETTING_STARTED.md
├── NEXT_STEPS.md
└── PROJECT_SUMMARY.md
```

## Tipos de Cambios

- `Added` - para nuevas funcionalidades
- `Changed` - para cambios en funcionalidades existentes
- `Deprecated` - para funcionalidades que serán eliminadas
- `Removed` - para funcionalidades eliminadas
- `Fixed` - para corrección de bugs
- `Security` - para vulnerabilidades de seguridad

---

[Unreleased]: https://github.com/tu-org/omi/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/tu-org/omi/releases/tag/v0.1.0
