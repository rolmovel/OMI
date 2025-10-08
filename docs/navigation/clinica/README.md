# Aplicación Clínica - OMI

## 📋 Descripción

Esta aplicación web simula la interfaz de la aplicación clínica de OMI, diseñada para dentistas y profesionales de la salud bucodental. Proporciona herramientas para gestionar pacientes, revisiones, informes y mucho más.

## 🎯 Características

### ✅ Funcionalidades Implementadas
- **Login seguro** con validación de credenciales
- **Dashboard principal** con métricas clave
- **Gestión de pacientes** con búsqueda y filtros
- **Ficha detallada de paciente** con información completa
- **Formulario de revisión** con odontograma interactivo
- **Sistema de navegación** intuitivo y responsive

### 🎨 Marca Blanca
- **Totalmente personalizable** con colores, logos y textos
- **Configuración centralizada** en `config.js`
- **Fácil adaptación** a diferentes clínicas

## 🚀 Cómo Usar

### Instalación
1. Abre `index.html` en tu navegador web
2. Inicia sesión con cualquier email/contraseña
3. Navega por las diferentes secciones

### Navegación
- **Login**: `index.html`
- **Dashboard**: `dashboard.html`
- **Pacientes**: `pacientes.html`
- **Paciente Detalle**: `paciente-detalle.html`
- **Nueva Revisión**: `revision.html`

## ⚙️ Personalización

### Colores y Branding
Edita `config.js` para personalizar:

```javascript
const whiteLabelConfig = {
    clinicName: 'Tu Clínica',
    primaryColor: '#4F46E5',
    secondaryColor: '#06B6D4',
    logoUrl: 'path/to/your/logo.png'
};
```

### Funcionalidades
Habilita/deshabilita características en `config.js`:

```javascript
features: {
    enableNotifications: true,
    enableReports: true,
    enableAnalytics: false
}
```

## 📱 Responsive Design

- **Desktop**: Navegación lateral completa
- **Móvil**: Navegación inferior táctil
- **Tablets**: Adaptación automática

## 🔧 Desarrollo

### Tecnologías
- **HTML5** para estructura
- **CSS3** con variables personalizables
- **Vanilla JavaScript** para interactividad
- **Font Awesome** para iconos

### Estructura de Archivos
```
clinica/
├── index.html          # Página de login
├── dashboard.html      # Dashboard principal
├── pacientes.html      # Lista de pacientes
├── paciente-detalle.html # Detalle de paciente
├── revision.html       # Formulario de revisión
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── config.js           # Configuración marca blanca
```

## 🎯 Próximas Funcionalidades

- [ ] Sistema de citas completo
- [ ] Generación automática de informes PDF
- [ ] Notificaciones push
- [ ] Sincronización offline
- [ ] Panel administrativo

## 📞 Soporte

Para personalización o soporte técnico:
- Email: soporte@omi-health.com
- Documentación: [OMI Docs](../../README.md)

---

**Versión**: 1.0.0 - Prototipo Navegable
**Última actualización**: Enero 2024
