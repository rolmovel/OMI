# Aplicaciones Navegables - OMI

## 📋 Descripción General

Este directorio contiene aplicaciones web navegables y completamente funcionales para probar la experiencia de usuario de OMI. Estas aplicaciones sirven como prototipos interactivos y base para el desarrollo real.

## 🎯 Aplicaciones Disponibles

### 🏥 Aplicación Clínica
**Ubicación**: `clinica/`

Aplicación diseñada para dentistas y profesionales de la salud bucodental.

- **Login seguro** con validación
- **Dashboard** con métricas y agenda
- **Gestión de pacientes** con búsqueda avanzada
- **Formulario de revisión** con odontograma interactivo
- **Navegación responsive** (desktop/móvil)

**Inicio**: Abre `clinica/index.html`

### 👨‍👩‍👧‍👦 Aplicación Familias
**Ubicación**: `familias/`

Aplicación diseñada para padres y tutores de pacientes.

- **Login múltiple** (email, teléfono, QR)
- **Dashboard familiar** con carnets de hijos
- **Carnet digital** con sellos y logros
- **Informes detallados** con odontograma
- **Navegación móvil optimizada**

**Inicio**: Abre `familias/index.html`

## 🚀 Cómo Usar las Aplicaciones

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Pantalla con resolución mínima 320px

### Inicio Rápido

#### Aplicación Clínica
```bash
# Navegar a la carpeta
cd clinica/

# Abrir en navegador
open index.html  # macOS
# o simplemente abrir index.html en tu navegador
```

#### Aplicación Familias
```bash
# Navegar a la carpeta
cd familias/

# Abrir en navegador
open index.html  # macOS
# o simplemente abrir index.html en tu navegador
```

### Flujo de Navegación

#### Clínica
1. **Login** → Introduce cualquier email/contraseña
2. **Dashboard** → Vista general con métricas
3. **Pacientes** → Lista con filtros y búsqueda
4. **Paciente** → Detalle completo del paciente
5. **Revisión** → Formulario con odontograma

#### Familias
1. **Login** → Prueba diferentes métodos (email, teléfono, QR)
2. **Home** → Carnets de hijos con información resumida
3. **Carnet** → Detalle completo con sellos y logros
4. **Informes** → Lista de informes disponibles
5. **Informe** → Detalle con odontograma y recomendaciones

## 🎨 Marca Blanca (White Label)

### Personalización Fácil

Ambas aplicaciones están diseñadas para ser **100% marca blanca**:

#### Cambiar Colores
Edita `clinica/config.js` o `familias/config.js`:

```javascript
const whiteLabelConfig = {
    primaryColor: '#TU_COLOR_PRINCIPAL',
    secondaryColor: '#TU_COLOR_SECUNDARIO',
    clinicName: 'Nombre de Tu Clínica',
    logoUrl: 'ruta/a/tu/logo.png'
};
```

#### Cambiar Textos
Personaliza textos en `config.js`:

```javascript
texts: {
    welcomeMessage: 'Bienvenido a {clinicName}',
    loginTitle: 'Acceso Profesional'
}
```

#### Cambiar Logo
1. Reemplaza `../assets/logo-placeholder.png` con tu logo
2. Actualiza `logoUrl` en `config.js`

### Ejemplo de Personalización

```javascript
// Configuración actual (Clínica Dental Sonrisa)
const whiteLabelConfig = {
    clinicName: 'Clínica Dental Sonrisa',
    primaryColor: '#4F46E5',
    secondaryColor: '#06B6D4'
};

// Personalización para otra clínica
const whiteLabelConfig = {
    clinicName: 'Clínica Dental Madrid',
    primaryColor: '#8B5CF6',  // Morado
    secondaryColor: '#EC4899'  // Rosa
};
```

## 📱 Responsive Design

### Características Responsive

- **Mobile First**: Optimizado para móviles (320px+)
- **Breakpoints**:
  - Móvil: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Adaptaciones por Dispositivo

#### Móvil
- Navegación inferior táctil
- Botones grandes para touch
- Formularios optimizados
- Contenido apilado verticalmente

#### Desktop
- Navegación lateral completa
- Tablas con más columnas
- Layouts multi-columna
- Tooltips y elementos flotantes

## 🔧 Desarrollo y Mantenimiento

### Tecnologías Utilizadas

| Tecnología | Propósito | Versión |
|------------|-----------|---------|
| **HTML5** | Estructura semántica | - |
| **CSS3** | Estilos y responsividad | Variables CSS |
| **JavaScript** | Interactividad | ES6+ |
| **Font Awesome** | Iconografía | 6.0.0 |

### Estructura de Archivos

Cada aplicación sigue esta estructura:

```
aplicacion/
├── index.html          # Página principal (login)
├── dashboard.html      # Dashboard principal
├── estilos.css         # Estilos específicos
├── script.js           # Lógica de navegación
├── config.js           # Configuración marca blanca
└── README.md           # Documentación específica
```

### Mejores Prácticas

#### CSS
- Usa variables CSS para colores y espaciado
- Sigue metodología BEM para nombres de clases
- Media queries móviles primero

#### JavaScript
- Funciones modulares y reutilizables
- Manejo de errores básico
- Configuración externa para personalización

#### HTML
- Estructura semántica (header, main, nav, etc.)
- Atributos de accesibilidad (aria-*)
- Meta tags para responsive

## 🧪 Testing

### Pruebas Manuales

#### Clínica
- [ ] Login con diferentes credenciales
- [ ] Navegación entre todas las páginas
- [ ] Interacción con odontograma
- [ ] Búsqueda y filtros de pacientes
- [ ] Formulario de revisión completo

#### Familias
- [ ] Login por email, teléfono y QR
- [ ] Visualización de múltiples hijos
- [ ] Navegación del carnet digital
- [ ] Acceso a informes detallados
- [ ] Responsive en móvil y desktop

### Casos de Uso Principales

1. **Dentista realiza revisión completa**
2. **Padres acceden al carnet digital**
3. **Consulta de informes médicos**
4. **Solicitud de citas**
5. **Visualización de logros**

## 🚀 Próximos Pasos

### Funcionalidades Pendientes
- [ ] Integración con APIs reales
- [ ] Autenticación JWT completa
- [ ] Base de datos local para demo
- [ ] Notificaciones push
- [ ] Modo offline

### Mejoras de UX
- [ ] Animaciones de transición
- [ ] Feedback visual mejorado
- [ ] Accesibilidad WCAG 2.1
- [ ] Internacionalización (i18n)

## 📞 Soporte

Para problemas o mejoras:

1. **Documentación**: Lee los README específicos
2. **Issues**: Crea issue en GitHub con detalles
3. **Contacto**: dev@omi-health.com

### Recursos Adicionales
- [Documentación General](../../../README.md)
- [Especificaciones Técnicas](../../../docs/technical-specs/)
- [Wireframes Originales](../wireframes.md)

---

## ✅ Checklist de Aplicaciones

### Clínica
- [x] Login funcional
- [x] Dashboard con métricas
- [x] Lista de pacientes navegable
- [x] Formulario de revisión completo
- [x] Marca blanca implementada
- [x] Responsive design
- [x] Documentación específica

### Familias
- [x] Login múltiple (email/teléfono/QR)
- [x] Dashboard con carnets de hijos
- [x] Carnet digital detallado
- [x] Informes con odontograma
- [x] Navegación móvil optimizada
- [x] Marca blanca implementada
- [x] Documentación específica

**Estado**: ✅ Aplicaciones 100% funcionales y navegables

---

**Versión**: 1.0.0 - Prototipos Completos
**Última actualización**: Enero 2024
**Mantenido por**: Equipo OMI
