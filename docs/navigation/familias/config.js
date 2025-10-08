// Configuración de Marca Blanca para OMI Familias
// Este archivo permite personalizar fácilmente la apariencia y contenido

const whiteLabelConfig = {
    // Información de la clínica
    clinicName: 'Clínica Dental Sonrisa',
    clinicSlogan: 'Tu sonrisa, nuestra prioridad',

    // URLs e imágenes
    logoUrl: '../assets/logo-placeholder.png',
    faviconUrl: '../assets/favicon.ico',

    // Colores principales (usa colores HEX)
    primaryColor: '#4F46E5',     // Azul principal
    secondaryColor: '#06B6D4',   // Cyan secundario
    accentColor: '#10B981',      // Verde para éxito
    warningColor: '#F59E0B',     // Amarillo para alertas
    dangerColor: '#EF4444',      // Rojo para errores

    // Información de contacto
    supportEmail: 'familias@clinica-dental-sonrisa.com',
    phoneNumber: '+34 912 345 678',
    address: 'Calle Dental 123, Madrid',

    // Configuración de funcionalidades
    features: {
        enableNotifications: true,
        enableAppointments: true,
        enableReports: true,
        enableResources: true,
        enableAchievements: true,
        enableMultiChild: true
    },

    // Textos personalizados
    texts: {
        appTitle: 'OMI Familias',
        welcomeMessage: 'Hola, {parentName} 👋',
        subtitle: 'Tus hijos tienen un excelente cuidado dental',
        carnetTitle: 'Carnet Digital',
        reportsTitle: 'Informes de Revisión',
        copyright: '© 2024 Clínica Dental Sonrisa. Todos los derechos reservados.'
    },

    // Configuración de navegación móvil
    bottomNavigation: {
        home: { label: 'Inicio', icon: 'fas fa-home' },
        citas: { label: 'Citas', icon: 'fas fa-calendar-alt' },
        informes: { label: 'Informes', icon: 'fas fa-file-medical' },
        recursos: { label: 'Educación', icon: 'fas fa-graduation-cap' },
        carnet: { label: 'Carnet', icon: 'fas fa-id-card' }
    },

    // Configuración de planes
    plans: {
        PREVENTIVO: { name: 'Preventivo', color: '#10B981', description: 'Plan básico de prevención' },
        HIM: { name: 'HIM', color: '#F59E0B', description: 'Higiene e Intervención Mínima' },
        CRECIMIENTO: { name: 'Crecimiento', color: '#4F46E5', description: 'Seguimiento del desarrollo' }
    },

    // Configuración de niveles de riesgo
    riskLevels: {
        BAJO: { name: 'Bajo', color: '#10B981', icon: '🟢' },
        MEDIO: { name: 'Medio', color: '#F59E0B', icon: '🟡' },
        ALTO: { name: 'Alto', color: '#EF4444', icon: '🔴' }
    },

    // Configuración de notificaciones
    notifications: {
        emailEnabled: true,
        smsEnabled: false,
        pushEnabled: true,
        reminderDays: [1, 3, 7] // Días antes de cita para recordar
    },

    // Configuración de recursos educativos
    educationalContent: {
        videos: true,
        articles: true,
        games: true,
        categories: ['higiene', 'alimentacion', 'desarrollo', 'prevencion']
    }
};

// Función para aplicar configuración en tiempo de ejecución
function applyWhiteLabelConfig() {
    // Aplicar colores CSS personalizados
    const root = document.documentElement;
    root.style.setProperty('--primary-color', whiteLabelConfig.primaryColor);
    root.style.setProperty('--secondary-color', whiteLabelConfig.secondaryColor);
    root.style.setProperty('--accent-color', whiteLabelConfig.accentColor);
    root.style.setProperty('--warning-color', whiteLabelConfig.warningColor);
    root.style.setProperty('--danger-color', whiteLabelConfig.dangerColor);

    // Actualizar elementos de texto
    if (whiteLabelConfig.texts) {
        Object.keys(whiteLabelConfig.texts).forEach(key => {
            const elements = document.querySelectorAll(`[data-text="${key}"]`);
            elements.forEach(element => {
                let text = whiteLabelConfig.texts[key];
                // Reemplazar placeholders si existen
                if (text.includes('{parentName}')) {
                    text = text.replace('{parentName}', 'Ana'); // Ejemplo
                }
                element.textContent = text;
            });
        });
    }

    // Actualizar imágenes
    const logos = document.querySelectorAll('.clinic-logo');
    logos.forEach(logo => {
        logo.src = whiteLabelConfig.logoUrl;
        logo.alt = `Logo ${whiteLabelConfig.clinicName}`;
    });

    // Actualizar favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        favicon.href = whiteLabelConfig.faviconUrl;
    }

    // Aplicar configuración de funcionalidades
    if (whiteLabelConfig.features) {
        // Aquí se puede habilitar/deshabilitar elementos según la configuración
        console.log('Características habilitadas:', whiteLabelConfig.features);
    }
}

// Función para obtener configuración actual
function getWhiteLabelConfig() {
    return { ...whiteLabelConfig };
}

// Función para actualizar configuración (útil para admin panel)
function updateWhiteLabelConfig(newConfig) {
    Object.assign(whiteLabelConfig, newConfig);
    applyWhiteLabelConfig();
    // Guardar en localStorage para persistencia
    localStorage.setItem('omiFamiliasWhiteLabelConfig', JSON.stringify(whiteLabelConfig));
}

// Cargar configuración guardada al iniciar
function loadSavedConfig() {
    const saved = localStorage.getItem('omiFamiliasWhiteLabelConfig');
    if (saved) {
        try {
            const savedConfig = JSON.parse(saved);
            Object.assign(whiteLabelConfig, savedConfig);
        } catch (e) {
            console.warn('Error cargando configuración guardada:', e);
        }
    }
}

// Inicializar configuración al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    loadSavedConfig();
    applyWhiteLabelConfig();
});

// Ejemplo de uso para desarrolladores:
/*
// Para cambiar colores dinámicamente:
updateWhiteLabelConfig({
    primaryColor: '#8B5CF6',
    clinicName: 'Nueva Clínica Dental'
});

// Para obtener configuración actual:
const config = getWhiteLabelConfig();
console.log('Configuración actual:', config);

// Para acceder a configuración específica:
console.log('Planes disponibles:', whiteLabelConfig.plans);
console.log('Niveles de riesgo:', whiteLabelConfig.riskLevels);
*/
