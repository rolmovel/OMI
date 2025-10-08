# Assets para Aplicaciones Navegables

Este directorio contiene recursos compartidos para las aplicaciones navegables de OMI.

## 📁 Contenido

### 🖼️ Imágenes
- `logo-placeholder.png` - Logo genérico para desarrollo
- `favicon.ico` - Icono para pestañas del navegador
- `clinic-logo.svg` - Logo de clínica en formato vectorial

### 🎨 Iconos
- Se utilizan Font Awesome 6.0.0 (CDN)
- Iconos principales: fas fa-home, fas fa-users, fas fa-calendar-alt, etc.

### 📄 Documentos
- No hay documentos adicionales aquí, ver README en cada aplicación

## 🔄 Uso de Assets

### Logo Placeholder
Se utiliza en todas las aplicaciones como logo temporal:

```html
<img src="../assets/logo-placeholder.png" alt="Logo Clínica" class="clinic-logo">
```

### Personalización
Para usar logos reales:

1. **Reemplaza** `logo-placeholder.png` con tu logo
2. **Actualiza** `logoUrl` en `config.js` de cada aplicación
3. **Asegúrate** de que el logo tenga fondo transparente (PNG recomendado)

### Favicon
```html
<link rel="icon" href="../assets/favicon.ico" type="image/x-icon">
```

## 📊 Especificaciones de Assets

### Logo Principal
- **Formato**: PNG transparente
- **Tamaño recomendado**: 200x60px
- **Usos**: Headers, login, carnets

### Favicon
- **Formato**: ICO
- **Tamaño**: 32x32px
- **Usos**: Pestañas del navegador

## 🚀 Próximos Assets

### Pendientes de Crear
- [ ] Logos específicos para diferentes clínicas de ejemplo
- [ ] Iconos personalizados para logros y achievements
- [ ] Imágenes de ejemplo para informes médicos
- [ ] Avatares de pacientes genéricos

### Assets por Aplicación
Cada aplicación puede tener sus propios assets específicos en su carpeta.

---

**Última actualización**: Enero 2024
