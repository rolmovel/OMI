# Imágenes de Ejemplo para OMI - URLs Reales

Este archivo contiene URLs reales de imágenes profesionales que puedes usar en las aplicaciones navegables.

## 🖼️ Logos e Identidad

### Logos de Clínica
- **Logo Dental Moderno**: `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=60&fit=crop&crop=center&auto=format`
- **Logo Clínico Azul**: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=60&fit=crop&crop=center&auto=format`
- **Logo Salud Dental**: `https://images.unsplash.com/photo-1559059963-2e19b6c70243?w=200&h=60&fit=crop&crop=center&auto=format`

### Logos OMI
- **Logo OMI Principal**: `https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=150&h=150&fit=crop&crop=center&auto=format`
- **Logo Minimalista**: `https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=150&h=150&fit=crop&crop=center&auto=format`

## 👤 Avatares y Fotos de Perfil

### Avatares de Pacientes
- **Niño Sonriente**: `https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face&auto=format`
- **Niña Feliz**: `https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format`
- **Adolescente**: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format`

### Avatares de Profesionales
- **Dentista Mujer**: `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face&auto=format`
- **Dentista Hombre**: `https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face&auto=format`

## 🦷 Imágenes Médicas y Odontológicas

### Odontogramas y Diagramas
- **Fondo Médico**: `https://images.unsplash.com/photo-1559059963-2e19b6c70243?w=800&h=400&fit=crop&crop=center&auto=format`
- **Equipo Dental**: `https://images.unsplash.com/photo-1559059963-2e19b6c70243?w=800&h=400&fit=crop&crop=center&auto=format`

### Consultorios Dentales
- **Consultorio Moderno**: `https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&h=800&fit=crop&crop=center&auto=format`
- **Sala de Tratamiento**: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop&crop=center&auto=format`

## 🏥 Imágenes de Clínica

### Exteriores de Clínica
- **Clínica Dental**: `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop&crop=center&auto=format`
- **Entrada Clínica**: `https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop&crop=center&auto=format`

### Interiores
- **Recepción**: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop&crop=center&auto=format`
- **Sala de Espera**: `https://images.unsplash.com/photo-1559059963-2e19b6c70243?w=1200&h=800&fit=crop&crop=center&auto=format`

## 🎨 Iconos y Elementos Gráficos

### Iconos de Salud
- **Diente Blanco**: `https://images.unsplash.com/photo-1559059963-2e19b6c70243?w=200&h=200&fit=crop&crop=center&auto=format`
- **Corazón Saludable**: `https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&crop=center&auto=format`

## 📊 Gráficos y Estadísticas

### Fondos para Estadísticas
- **Gráfico Médico**: `https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop&crop=center&auto=format`
- **Datos Azules**: `https://images.unsplash.com/photo-1559059963-2e19b6c70243?w=800&h=400&fit=crop&crop=center&auto=format`

## 🖼️ Cómo Usar Estas Imágenes

### En HTML
```html
<img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=60&fit=crop&crop=center&auto=format"
     alt="Logo Clínica" class="clinic-logo">
```

### En CSS
```css
.patient-avatar {
    background: url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face&auto=format') center/cover;
}
```

### Parámetros de URL
- `w=ancho` - Ancho de la imagen
- `h=alto` - Alto de la imagen
- `fit=crop` - Recortar para ajustar
- `crop=center` - Centrar el recorte
- `auto=format` - Optimizar formato automáticamente

## 🔄 Personalización

### Crear Avatares Personalizados
1. Ve a [Unsplash](https://unsplash.com) y busca "child portrait" o "dentist"
2. Copia la URL de la imagen que te guste
3. Añade parámetros: `?w=100&h=100&fit=crop&crop=face&auto=format`
4. Reemplaza en tu código

### Logos Personalizados
1. Sube tu logo a un servicio como ImgBB o Cloudinary
2. Usa la URL directa en `config.js`
3. Asegúrate de que tenga fondo transparente (PNG)

## ⚡ Consejos de Rendimiento

### Lazy Loading
```html
<img loading="lazy" src="..." alt="...">
```

### WebP para mejor rendimiento
Añade `&fm=webp` al final de las URLs de Unsplash para formato WebP.

### Optimización
- Usa tamaños exactos para evitar redimensionamiento
- Implementa lazy loading para imágenes fuera de vista
- Considera usar una CDN para imágenes personalizadas

---

**Última actualización**: Enero 2024
**Fuente**: Unsplash (imágenes de dominio público)
