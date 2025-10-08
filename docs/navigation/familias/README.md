# Aplicación Familias - OMI

## 📋 Descripción

Esta aplicación web simula la interfaz para familias de pacientes de OMI, diseñada para que padres y tutores puedan acceder al carnet digital de sus hijos, ver informes y gestionar citas.

## 🎯 Características

### ✅ Funcionalidades Implementadas
- **Login múltiple** (email, teléfono, QR)
- **Dashboard familiar** con carnets de hijos
- **Carnet digital completo** con sellos y logros
- **Informes de revisión** detallados con odontograma
- **Sistema de navegación móvil** optimizado
- **Marca blanca** totalmente personalizable

### 👨‍👩‍👧‍👦 Experiencia Familiar
- **Interfaz amigable** para padres y niños
- **Información clara** sobre salud dental
- **Seguimiento de logros** y motivación
- **Acceso fácil** a recursos educativos

## 🚀 Cómo Usar

### Instalación
1. Abre `index.html` en tu navegador web
2. Prueba diferentes métodos de login
3. Explora las funcionalidades familiares

### Navegación
- **Login**: `index.html`
- **Home**: `home.html` (carnets de hijos)
- **Carnet Digital**: `carnet.html`
- **Informes**: `informes.html`
- **Detalle Informe**: `informe-detalle.html`

### Métodos de Login
1. **Email/Contraseña** tradicional
2. **Teléfono + SMS** para acceso rápido
3. **Código QR** para acceso directo

## ⚙️ Personalización

### Marca Blanca
Edita `config.js` para personalizar:

```javascript
const whiteLabelConfig = {
    clinicName: 'Tu Clínica Dental',
    primaryColor: '#4F46E5',
    secondaryColor: '#06B6D4',
    logoUrl: 'path/to/your/logo.png',
    texts: {
        welcomeMessage: 'Hola, {parentName} 👋',
        subtitle: 'Tus hijos tienen excelente cuidado dental'
    }
};
```

### Planes y Niveles de Riesgo
Configura planes y niveles en `config.js`:

```javascript
plans: {
    PREVENTIVO: { name: 'Preventivo', color: '#10B981' },
    HIM: { name: 'HIM', color: '#F59E0B' }
},
riskLevels: {
    BAJO: { name: 'Bajo', color: '#10B981', icon: '🟢' }
}
```

## 📱 Responsive Design

- **Móvil primero**: Optimizado para smartphones
- **Navegación táctil**: Menú inferior intuitivo
- **Tablets y Desktop**: Adaptación automática

## 🔧 Desarrollo

### Tecnologías
- **HTML5** con estructura semántica
- **CSS3** con variables y flexbox
- **Vanilla JavaScript** para interactividad
- **Font Awesome** para iconos consistentes

### Estructura de Archivos
```
familias/
├── index.html          # Página de login
├── home.html           # Dashboard familiar
├── carnet.html         # Carnet digital
├── informes.html       # Lista de informes
├── informe-detalle.html # Detalle de informe
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── config.js           # Configuración marca blanca
```

## 🎯 Características Especiales

### Carnet Digital
- **Sellos de revisiones** con fechas
- **Logros y achievements** para motivar
- **Estadísticas de salud** claras
- **Próxima revisión** destacada

### Informes Detallados
- **Odontograma visual** completo
- **Hallazgos clínicos** detallados
- **Recomendaciones** específicas
- **Fotografías clínicas** incluidas

### Recursos Educativos
- **Contenido preparado** para integración
- **Categorías organizadas** por tema
- **Interfaz amigable** para niños

## 📞 Soporte

Para personalización o soporte técnico:
- Email: familias@omi-health.com
- Documentación: [OMI Docs](../../README.md)

---

**Versión**: 1.0.0 - Prototipo Navegable
**Última actualización**: Enero 2024
