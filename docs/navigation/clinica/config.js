// Configuración de Marca Blanca para OMI Clínica
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
    supportEmail: 'soporte@clinica-dental-sonrisa.com',
    phoneNumber: '+34 912 345 678',
    address: 'Calle Dental 123, Madrid',

    // Configuración de funcionalidades
    features: {
        enableNotifications: true,
        enableReports: true,
        enableAppointments: true,
        enableAnalytics: true,
        enableMultiClinic: false
    },

    // Textos personalizados
    texts: {
        loginTitle: 'Sistema OMI',
        loginSubtitle: 'Plan de Salud Infantil',
        dashboardTitle: 'Panel de Control',
        patientsTitle: 'Gestión de Pacientes',
        copyright: '© 2024 Clínica Dental Sonrisa. Todos los derechos reservados.'
    },

    // Configuración de notificaciones
    notifications: {
        emailEnabled: true,
        smsEnabled: false,
        pushEnabled: true
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
                element.textContent = whiteLabelConfig.texts[key];
            });
        });
    }

    // Actualizar imágenes
    const logos = document.querySelectorAll('.clinic-logo, .header-logo');
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
    localStorage.setItem('omiWhiteLabelConfig', JSON.stringify(whiteLabelConfig));
}

// Cargar configuración guardada al iniciar
function loadSavedConfig() {
    const saved = localStorage.getItem('omiWhiteLabelConfig');
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
*/
