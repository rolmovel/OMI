# OMI - Plan de Salud Infantil 🦷

<div align="center">

![OMI Logo](docs/assets/logo.png)

**Sistema integral para la gestión del Plan de Salud Infantil**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Tauri](https://img.shields.io/badge/Tauri-1.5-purple.svg)](https://tauri.app/)

[Documentación](docs/) · [Reportar Bug](https://github.com/tu-org/omi/issues) · [Solicitar Feature](https://github.com/tu-org/omi/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Características Principales](#características-principales)
- [Arquitectura](#arquitectura)
- [Tecnologías](#tecnologías)
- [Comenzando](#comenzando)
- [Documentación](#documentación)
- [Roadmap](#roadmap)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## 🎯 Sobre el Proyecto

**OMI** es una aplicación integral que conecta clínicas dentales con familias, facilitando el seguimiento preventivo de la salud bucodental infantil. El sistema digitaliza el proceso del Plan de Salud Infantil, mejora la comunicación clínica-familia, y gamifica la experiencia para motivar a los niños.

### Problema que Resuelve

- ❌ Gestión manual y en papel de historiales clínicos
- ❌ Comunicación ineficiente con las familias
- ❌ Falta de seguimiento preventivo sistemático
- ❌ Baja adherencia de los niños a tratamientos preventivos
- ❌ Dificultad para medir efectividad de intervenciones

### Solución

- ✅ Digitalización completa del proceso
- ✅ Carnet digital gamificado para niños
- ✅ Comunicación directa y automática
- ✅ Dashboard con métricas y estadísticas
- ✅ Sistema de alertas y recordatorios

## ✨ Características Principales

### Para la Clínica 🏥

- **Gestión de Pacientes**: Alta, búsqueda, filtrado y ficha completa
- **Registro de Revisiones**: Odontograma interactivo, fotografías clínicas, índices de higiene
- **Generación de Informes**: PDFs profesionales con envío automático
- **Evaluación de Riesgo**: Cálculo automático con posibilidad de ajuste manual
- **Dashboard**: Métricas en tiempo real y estadísticas clínicas
- **Agenda**: Gestión de citas con recordatorios automáticos
- **Multi-usuario**: Roles diferenciados (admin, odontólogo, higienista, recepción)

### Para las Familias 👨‍👩‍👧‍👦

- **Carnet Digital**: Visualización del estado de salud con código de colores
- **Sellos de Revisiones**: Registro visual de cada visita
- **Sistema de Logros**: Medallas y reconocimientos para motivar a los niños
- **Informes de Revisión**: Acceso a todos los informes con fotos clínicas
- **Gestión de Citas**: Solicitud y gestión online
- **Recursos Educativos**: Vídeos, artículos e infografías
- **Notificaciones**: Recordatorios de citas y alertas importantes

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                    CAPA DE PRESENTACIÓN                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Tauri Desktop│  │  Web Portal  │  │  Mobile PWA  │      │
│  │  (Clínica)   │  │  (Familias)  │  │  (Familias)  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      API GATEWAY                             │
│              Spring Cloud Gateway (Port 8080)                │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Auth Service │  │Patient Service│  │Appointment   │
│  (Port 8081) │  │  (Port 8082)  │  │Service (8083)│
└──────────────┘  └──────────────┘  └──────────────┘
        │                   │                   │
        └───────────────────┴───────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  CAPA DE PERSISTENCIA                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │PostgreSQL│  │  Redis   │  │ MinIO/S3 │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

Ver [Arquitectura Completa](docs/technical-specs/01-arquitectura.md)

## 🛠️ Tecnologías

### Frontend
- **Tauri** - Framework para aplicación desktop nativa
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **TailwindCSS** - Estilos utilitarios
- **Shadcn/ui** - Componentes UI
- **Vite** - Build tool

### Backend
- **Java 17** - Lenguaje de programación
- **Spring Boot 3.2** - Framework de aplicación
- **Spring Cloud** - Microservicios (Gateway, Eureka, Config)
- **PostgreSQL 15** - Base de datos relacional
- **Redis 7** - Caché y sesiones
- **MinIO** - Almacenamiento de archivos

### DevOps
- **Docker** - Containerización
- **GitHub Actions** - CI/CD
- **Prometheus + Grafana** - Monitorización
- **ELK Stack** - Logging

## 🚀 Comenzando

### Prerequisitos

```bash
# Node.js y npm
node --version  # v18+
npm --version   # v9+

# Rust (para Tauri)
rustc --version  # 1.70+

# Java
java --version  # 17+

# Maven
mvn --version  # 3.8+

# Docker (opcional)
docker --version  # 24+
```

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-org/omi.git
   cd omi
   ```

2. **Configurar Backend**
   ```bash
   cd backend
   
   # Copiar archivo de configuración
   cp src/main/resources/application-example.yml src/main/resources/application.yml
   
   # Editar con tus configuraciones
   nano src/main/resources/application.yml
   
   # Instalar dependencias y compilar
   mvn clean install
   ```

3. **Configurar Frontend**
   ```bash
   cd frontend
   
   # Instalar dependencias
   npm install
   
   # Copiar archivo de configuración
   cp .env.example .env
   
   # Editar con tus configuraciones
   nano .env
   ```

4. **Iniciar Base de Datos (con Docker)**
   ```bash
   cd ..
   docker-compose up -d postgres redis minio
   ```

5. **Iniciar Backend**
   ```bash
   cd backend
   
   # Iniciar Service Discovery
   cd service-discovery
   mvn spring-boot:run
   
   # En otra terminal, iniciar API Gateway
   cd ../api-gateway
   mvn spring-boot:run
   
   # Iniciar otros servicios según necesites
   ```

6. **Iniciar Frontend**
   ```bash
   cd frontend
   npm run tauri dev
   ```

La aplicación estará disponible en:
- Frontend Desktop: Se abrirá automáticamente
- API Gateway: http://localhost:8080
- Service Discovery: http://localhost:8761

### Configuración Rápida con Docker Compose

```bash
# Iniciar todo el stack
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener todo
docker-compose down
```

## 📚 Documentación

La documentación completa está en el directorio [`/docs`](docs/):

### Especificaciones Funcionales
- [Requisitos Funcionales](docs/functional-specs/01-requisitos-funcionales.md)
- [Casos de Uso](docs/functional-specs/02-casos-de-uso.md)

### Especificaciones Técnicas
- [Arquitectura del Sistema](docs/technical-specs/01-arquitectura.md)
- [Modelo de Datos](docs/technical-specs/02-modelo-datos.md)
- [Seguridad y RGPD](docs/technical-specs/03-seguridad-rgpd.md)

### API
- [API Gateway](docs/api-specs/01-api-gateway.md)
- [Auth Service](docs/api-specs/02-auth-service.md)
- [Patient Service](docs/api-specs/03-patient-service.md)

### Diseño
- [Wireframes](docs/mockups/wireframes.md)
- [Guía de Estilo](docs/mockups/style-guide.md)

### Historias de Usuario
- [Área Familias](docs/user-stories/01-familias.md)
- [Área Clínica](docs/user-stories/02-clinica.md)

## 🗺️ Roadmap

### Fase 1: MVP (Q1 2024) ✅
- [x] Autenticación y gestión de usuarios
- [x] Gestión básica de pacientes
- [x] Registro de revisiones
- [x] Carnet digital
- [x] Generación de informes PDF
- [x] Dashboard básico

### Fase 2: Funcionalidades Avanzadas (Q2 2024) 🚧
- [ ] Sistema completo de citas
- [ ] Recordatorios automáticos
- [ ] Módulo de pagos
- [ ] Estadísticas avanzadas
- [ ] Integración con calendarios

### Fase 3: Gamificación (Q3 2024) 📅
- [ ] Sistema completo de logros
- [ ] Recursos educativos
- [ ] Mensajería bidireccional
- [ ] Notificaciones push

### Fase 4: Integraciones (Q4 2024) 📅
- [ ] Integración con software dental (Nemo, etc.)
- [ ] WhatsApp Business API
- [ ] Pasarela de pagos avanzada
- [ ] Módulo de ortodoncia

Ver [Issues](https://github.com/tu-org/omi/issues) para más detalles.

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor lee nuestra [Guía de Contribución](CONTRIBUTING.md) para conocer el proceso.

### Proceso Rápido

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Código de Conducta

Este proyecto se adhiere a un Código de Conducta. Al participar, se espera que mantengas este código.

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

## 👥 Equipo

- **Product Owner** - [Nombre](https://github.com/usuario)
- **Tech Lead** - [Nombre](https://github.com/usuario)
- **Frontend Developer** - [Nombre](https://github.com/usuario)
- **Backend Developer** - [Nombre](https://github.com/usuario)

## 📞 Contacto

- **Email**: info@omi-health.com
- **Website**: https://omi-health.com
- **Issues**: https://github.com/tu-org/omi/issues

## 🙏 Agradecimientos

- [Spring Boot](https://spring.io/projects/spring-boot)
- [Tauri](https://tauri.app/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)

---

<div align="center">

**Hecho con ❤️ para mejorar la salud bucodental infantil**

[⬆ Volver arriba](#omi---plan-de-salud-infantil-)

</div>
