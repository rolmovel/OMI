# 🦷 OMI - Aplicaciones Demostradoras Completas

## 📋 Descripción General

Este directorio contiene **dos aplicaciones demostradoras completas y profesionales** del Sistema OMI (Organización y Manejo Integral) para el Plan de Salud Infantil. Estas aplicaciones están diseñadas como demostradores de alta calidad para presentar a terceros y servir como punto de partida para el desarrollo completo del proyecto.

## 🎯 Objetivo

Demostrar la funcionalidad completa del sistema OMI a través de:
- **Interfaces profesionales** con diseño moderno y UX optimizada
- **Navegación fluida** entre todas las secciones
- **Datos de ejemplo** realistas y contextualizados
- **Interacciones completas** que simulan el flujo real de trabajo

## 🚀 Estructura del Proyecto

```
demos/
├── index.html                 # Página principal de acceso
├── clinica/                   # Área Clínica (Desktop)
│   ├── login.html            # Login profesionales
│   ├── dashboard.html        # Dashboard con estadísticas
│   ├── pacientes.html        # Lista de pacientes
│   ├── ficha-paciente.html   # Ficha completa de paciente
│   ├── agenda.html           # Sistema de citas
│   └── estadisticas.html     # Reportes y análisis
├── familias/                  # Área Familias (Web/Mobile)
│   ├── login.html            # Login familias
│   ├── home.html             # Inicio con carnets
│   ├── carnet.html           # Carnet digital completo
│   ├── informes.html         # Historial de revisiones
│   ├── citas.html            # Solicitud de citas
│   └── recursos.html         # Recursos educativos
└── README.md                  # Esta documentación
```

## 💻 Área Clínica - Aplicación Desktop

### Características Implementadas

#### 🏠 Dashboard
- **Estadísticas en tiempo real**: Pacientes activos, citas del día, alertas
- **Distribución de riesgo**: Visualización gráfica de niveles de riesgo
- **Agenda del día**: Próximas citas con información detallada
- **Revisiones pendientes**: Alertas de seguimiento
- **Diseño responsivo**: Adaptable a diferentes resoluciones

#### 👥 Gestión de Pacientes
- **Lista completa**: Tabla con búsqueda y filtros
- **Información visual**: Avatares con código de color por plan
- **Paginación**: Manejo eficiente de grandes volúmenes
- **Estados claros**: Indicadores visuales de riesgo y plan
- **Acceso rápido**: Navegación directa a fichas individuales

#### 📋 Ficha de Paciente
- **Datos completos**: Información personal, médica y de contacto
- **Sistema de pestañas**: Organización clara de información
- **Historial de revisiones**: Timeline completo de tratamientos
- **Odontograma**: Visualización del estado dental
- **Galería de fotos**: Documentación visual
- **Estadísticas personales**: Métricas de cada paciente

#### 📅 Agenda de Citas
- **Vista diaria**: Horarios con código de color
- **Estados visuales**: Ocupado/Disponible claramente diferenciados
- **Navegación de calendario**: Cambio entre días/semanas/meses
- **Información detallada**: Datos completos de cada cita
- **Acción rápida**: Botones para agendar nuevas citas

#### 📊 Estadísticas y Reportes
- **Métricas clave**: KPIs principales en tarjetas destacadas
- **Distribución de riesgo**: Gráficos y porcentajes
- **Planes contratados**: Desglose por tipo de plan
- **Distribución por edad**: Análisis demográfico
- **Tendencias mensuales**: Gráficos de evolución

### Credenciales de Acceso

```
Email: doctor@clinica.com
Contraseña: demo123
```

### Stack Tecnológico

- **HTML5** con estructura semántica
- **Tailwind CSS** para estilos modernos
- **Font Awesome** para iconografía
- **JavaScript Vanilla** para interactividad
- **Diseño responsive** mobile-first

## 📱 Área Familias - Aplicación Web/Mobile

### Características Implementadas

#### 🏠 Home (Mis Hijos)
- **Tarjetas de hijos**: Vista de todos los niños vinculados
- **Información resumida**: Plan, riesgo, próxima revisión
- **Logros destacados**: Gamificación visible
- **Acciones rápidas**: Accesos directos a funciones principales
- **Navegación inferior**: Menú móvil optimizado

#### 🎴 Carnet Digital
- **Diseño atractivo**: Carnet visual y moderno
- **Información completa**: Datos del plan y estado de salud
- **Sellos de revisiones**: Historial visual con fechas
- **Sistema de logros**: Medallas y reconocimientos
- **Estadísticas personales**: Métricas del niño
- **Compartir**: Función para compartir logros

#### 📄 Informes de Revisión
- **Lista ordenada**: Informes más recientes primero
- **Badges visuales**: Nuevos informes destacados
- **Información completa**: Doctor, fecha, tipo de revisión
- **Tratamientos aplicados**: Detalle de procedimientos
- **Descarga PDF**: Exportación de informes
- **Resumen general**: Estadísticas globales

#### 📅 Solicitud de Citas
- **Selector de paciente**: Elegir hijo para la cita
- **Tipo de cita**: Preventiva, urgente, seguimiento
- **Calendario interactivo**: Visualización mensual
- **Horarios disponibles**: Slots libres claramente marcados
- **Observaciones**: Campo para notas adicionales
- **Resumen claro**: Confirmación antes de agendar

#### 📚 Recursos Educativos
- **Categorías**: Higiene, Dieta, Prevención, Ortodoncia
- **Múltiples formatos**: Videos, infografías, juegos, artículos
- **Búsqueda**: Localización rápida de contenido
- **Información detallada**: Duración, vistas, valoraciones
- **Diseño atractivo**: Cards visuales por tipo de recurso

### Credenciales de Acceso

```
Email: ana@email.com
Contraseña: demo123
```

### Stack Tecnológico

- **HTML5** con semántica móvil
- **Tailwind CSS** con diseño mobile-first
- **Font Awesome** para iconos
- **JavaScript** para interacciones
- **PWA Ready** (preparado para Progressive Web App)

## 🎨 Diseño y UX

### Paleta de Colores

#### Área Clínica
- **Primario**: Indigo (#4F46E5) - Purple (#7C3AED)
- **Secundario**: Blue (#3B82F6)
- **Éxito**: Green (#10B981)
- **Advertencia**: Yellow (#F59E0B) - Orange (#F97316)
- **Error**: Red (#EF4444)

#### Área Familias
- **Primario**: Cyan (#06B6D4) - Blue (#3B82F6)
- **Secundario**: Indigo (#6366F1)
- **Gamificación**: Yellow (#FBBF24) - Orange (#F97316)

### Tipografía
- **Familia**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800
- **Tamaños**: Sistema de escala modular

### Componentes Reutilizables
- Cards con hover effects
- Botones con gradientes
- Badges de estado
- Tablas responsivas
- Formularios modernos
- Navegación sticky

## 🌐 Navegación

### Flujos Principales

#### Clínica
```
Login → Dashboard → Pacientes → Ficha Paciente
                  → Agenda
                  → Estadísticas
```

#### Familias
```
Login → Home → Carnet Digital
            → Informes
            → Solicitar Cita
            → Recursos Educativos
```

### Enlaces de Retorno
Todas las páginas incluyen:
- Botón "Volver" en header
- Link a página principal en navegación
- Breadcrumbs donde aplica

## 📊 Datos de Ejemplo

### Pacientes Demo
1. **Carlos Rodríguez** (5 años) - Plan Preventivo - Riesgo Bajo
2. **María García** (8 años) - Plan HIM - Riesgo Medio
3. **Luis Martínez** (6 años) - Plan Crecimiento - Riesgo Bajo
4. **Ana López** (4 años) - Plan Preventivo - Riesgo Bajo
5. **Pedro Sánchez** (7 años) - Plan HIM - Riesgo Alto
6. **Laura Torres** (5 años) - Plan Preventivo - Riesgo Medio

### Estadísticas Demo
- **150 pacientes** activos
- **12 citas** programadas hoy
- **3 pacientes** de riesgo alto
- **92%** tasa de asistencia
- **248 revisiones** este mes

## 🚀 Cómo Usar

### Método 1: Abrir Directamente
1. Navegar a `/docs/demos/`
2. Abrir `index.html` en un navegador moderno
3. Seleccionar el área a explorar (Clínica o Familias)

### Método 2: Servidor Local (Recomendado)
```bash
# Navegar al directorio
cd /path/to/OMI/docs/demos

# Python 3
python -m http.server 8000

# Node.js (con http-server)
npx http-server -p 8000

# Acceder en navegador
http://localhost:8000
```

### Navegadores Soportados
- ✅ Chrome/Edge (Recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ IE11 (compatibilidad limitada)

## ✨ Características Destacadas

### Interactividad
- ✅ Hover effects en todos los elementos clickables
- ✅ Transiciones suaves entre estados
- ✅ Feedback visual en acciones
- ✅ Animaciones sutiles y profesionales

### Responsividad
- ✅ Mobile-first design
- ✅ Breakpoints optimizados
- ✅ Navegación adaptativa
- ✅ Imágenes y textos escalables

### Accesibilidad
- ✅ Contraste WCAG AA
- ✅ Tamaños de toque adecuados
- ✅ Labels descriptivos
- ✅ Navegación por teclado

### Performance
- ✅ Sin dependencias pesadas
- ✅ Carga rápida de páginas
- ✅ Imágenes optimizadas (placeholders)
- ✅ CSS y JS minificables

## 📝 Próximos Pasos

### Para Desarrollo Completo
1. **Backend Integration**
   - Conectar con API REST
   - Implementar autenticación real
   - Sincronización de datos

2. **Base de Datos**
   - Diseño de esquema PostgreSQL
   - Migraciones
   - Seeders con datos de prueba

3. **Funcionalidades Avanzadas**
   - Notificaciones push
   - Exportación a PDF real
   - Sistema de mensajería
   - Videollamadas

4. **Testing**
   - Unit tests
   - Integration tests
   - E2E tests (Playwright/Cypress)

5. **Deployment**
   - Configuración de servidores
   - CI/CD pipelines
   - Monitoreo y logs

## 🔧 Tecnologías para Producción

### Frontend
- **Framework**: React + TypeScript
- **Routing**: React Router
- **State**: Zustand o Redux Toolkit
- **Forms**: React Hook Form
- **API**: Axios + React Query
- **UI**: Shadcn/ui + Tailwind CSS
- **Desktop**: Tauri

### Backend
- **Framework**: Spring Boot 3
- **Security**: Spring Security + JWT
- **Database**: PostgreSQL 15
- **Cache**: Redis
- **Storage**: MinIO (S3 compatible)
- **API Docs**: Swagger/OpenAPI

### DevOps
- **Container**: Docker + Docker Compose
- **Orchestration**: Kubernetes (opcional)
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Logs**: ELK Stack

## 📞 Soporte

Para preguntas o sugerencias sobre estos demostradores:
- Revisar la documentación en `/docs/`
- Consultar los wireframes en `/docs/mockups/wireframes.md`
- Revisar especificaciones funcionales en `/docs/functional-specs/`

## 📄 Licencia

Proyecto privado - Todos los derechos reservados

---

**Versión**: 1.0.0  
**Fecha**: Enero 2024  
**Autor**: Equipo OMI  
**Estado**: ✅ Demostradores Completos - Listos para Presentación
