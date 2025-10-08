# 🎨 Guía de Personalización Visual - OMI

Esta guía te ayudará a personalizar fácilmente las imágenes y elementos visuales de las aplicaciones navegables de OMI.

## 🚀 Inicio Rápido

### 1. Logos
```javascript
// En clinica/config.js o familias/config.js
const whiteLabelConfig = {
    logoUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=60&fit=crop&crop=center&auto=format'
};
```

### 2. Avatares
```css
/* En styles.css */
.patient-avatar {
    background: url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face&auto=format') center/cover;
}
```

## 📸 Fuentes de Imágenes

### Recomendadas
1. **Unsplash** - Imágenes profesionales gratuitas
2. **Pexels** - Fotos de alta calidad
3. **Pixabay** - Recursos gratuitos
4. **Freepik** - Vectores e imágenes

### Búsquedas Útiles en Unsplash
- `child portrait` - Avatares de niños
- `dentist` - Profesionales dentales
- `dental clinic` - Consultorios dentales
- `tooth` - Iconos dentales
- `medical background` - Fondos médicos

## 🎯 Personalización Paso a Paso

### Paso 1: Elegir Logo
1. Ve a [Unsplash Dental](https://unsplash.com/s/photos/dental)
2. Busca "dental logo" o "clinic logo"
3. Copia la URL de la imagen
4. Añade parámetros: `?w=200&h=60&fit=crop&crop=center&auto=format`
5. Pega en `config.js`

### Paso 2: Avatares de Pacientes
1. Busca "child portrait" en Unsplash
2. Elige fotos de niños sonrientes
3. Usa parámetros: `?w=100&h=100&fit=crop&crop=face&auto=format`
4. Añade diferentes avatares para variedad

### Paso 3: Fondos y Texturas
1. Para fondos médicos: "medical background"
2. Para texturas: "paper texture" o "gradient"
3. Usa baja opacidad para no interferir con el texto

## 🔧 Herramientas de Edición

### Online Gratuitas
- **Canva** - Diseñar logos personalizados
- **Remove.bg** - Quitar fondos de imágenes
- **TinyPNG** - Comprimir imágenes
- **Squoosh** - Optimizar imágenes web

### Consejos de Diseño
- **Colores consistentes** con la paleta de OMI
- **Contraste adecuado** para accesibilidad
- **Tamaños optimizados** para carga rápida
- **Formatos modernos** (WebP cuando sea posible)

## 📱 Optimización para Dispositivos

### Tamaños Recomendados
| Elemento | Móvil | Desktop |
|----------|-------|---------|
| Logo | 150x45px | 200x60px |
| Avatar | 60x60px | 80x80px |
| Iconos | 24x24px | 32x32px |
| Fondos | 800x600px | 1920x1080px |

### URLs Optimizadas
```javascript
// Móvil
logoUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=45&fit=crop&crop=center&auto=format&q=80'

// Desktop
logoUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=60&fit=crop&crop=center&auto=format&q=90'
```

## 🎨 Paleta de Colores OMI

```css
:root {
    --primary: #4F46E5;     /* Azul principal */
    --secondary: #06B6D4;   /* Cyan */
    --success: #10B981;     /* Verde éxito */
    --warning: #F59E0B;     /* Amarillo alerta */
    --danger: #EF4444;      /* Rojo error */
}
```

## 🚨 Mejores Prácticas

### Accesibilidad
- **Contraste mínimo** 4.5:1 para texto sobre fondo
- **Texto alternativo** en todas las imágenes
- **Tamaño mínimo** 44px para elementos táctiles

### Rendimiento
- **Lazy loading** para imágenes fuera de vista
- **WebP format** para mejor compresión
- **CDN** para entrega rápida

### Marca Blanca
- **Consistencia** entre aplicaciones
- **Escalabilidad** para diferentes clínicas
- **Fácil reemplazo** de todos los assets

## 📋 Checklist de Personalización

- [ ] Logo principal actualizado
- [ ] Avatares de pacientes cambiados
- [ ] Colores de marca aplicados
- [ ] Textos personalizados
- [ ] Imágenes de fondo agregadas
- [ ] Iconos personalizados
- [ ] Pruebas en móvil y desktop
- [ ] Accesibilidad verificada

## 🔍 Recursos Adicionales

### Tutoriales
- [Unsplash API](https://unsplash.com/developers) para integración dinámica
- [WebP Converter](https://squoosh.app/) para optimización
- [Color Palette Generator](https://coolors.co/) para paletas armónicas

### Comunidades
- [Dribbble](https://dribbble.com/) para inspiración de diseño
- [Behance](https://www.behance.net/) para diseños profesionales
- [Figma Community](https://www.figma.com/community) para recursos UI

---

## ✅ Próximos Pasos

1. **Elige imágenes** que representen tu marca
2. **Personaliza colores** en `config.js`
3. **Añade logos reales** reemplazando placeholders
4. **Crea avatares únicos** para tus pacientes de ejemplo
5. **Optimiza para producción** con imágenes propias

**¡Tus aplicaciones se verán profesionales y personalizadas!** 🎨✨

---

**Última actualización**: Enero 2024
