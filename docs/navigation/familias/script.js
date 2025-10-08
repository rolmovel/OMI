// JavaScript para navegación e interactividad - OMI Familias

// Estado de la aplicación
let currentUser = {
    name: 'Ana Rodríguez',
    email: 'ana@email.com',
    children: ['carlos', 'maria']
};

let currentChild = 'carlos';

// Navegación entre páginas
function navigateTo(page) {
    const routes = {
        'home': 'home.html',
        'citas': 'citas.html',
        'informes': 'informes.html',
        'recursos': 'recursos.html',
        'carnet': 'carnet.html',
        'perfil': 'perfil.html'
    };

    if (routes[page]) {
        window.location.href = routes[page];
    }
}

function goBack() {
    window.history.back();
}

// Funciones de login
function loginWithPhone() {
    document.getElementById('phoneModal').classList.add('show');
}

function loginWithQR() {
    document.getElementById('qrModal').classList.add('show');
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('show');
    });
}

function sendSMSCode() {
    const phone = document.getElementById('phone').value;
    if (phone) {
        alert(`Código SMS enviado a ${phone}`);
        closeModal();
    }
}

function simulateQRScan() {
    alert('Código QR escaneado exitosamente');
    closeModal();
    window.location.href = 'home.html';
}

// Gestión de perfil y configuraciones
function showProfileMenu() {
    alert('Menú de perfil - Funcionalidad pendiente');
}

function showSettings() {
    alert('Configuración - Funcionalidad pendiente');
}

function showNotifications() {
    alert('Notificaciones - Funcionalidad pendiente');
}

// Funciones específicas de familias
function viewCarnet(childId) {
    currentChild = childId;
    window.location.href = `carnet.html?child=${childId}`;
}

function changeChild() {
    const select = document.getElementById('childSelect');
    currentChild = select.value;
    // Aquí se recargarían los datos del niño seleccionado
    console.log('Cambiado a niño:', currentChild);
}

function requestAppointment() {
    alert('Solicitar cita - Funcionalidad pendiente');
}

function viewReports() {
    window.location.href = 'informes.html';
}

function viewReport(reportId) {
    window.location.href = `informe-detalle.html?id=${reportId}`;
}

function downloadReport(reportId) {
    alert(`Descargando informe ${reportId} - Funcionalidad pendiente`);
}

function viewResources() {
    alert('Recursos educativos - Funcionalidad pendiente');
}

function contactClinic() {
    alert('Contactar clínica - Funcionalidad pendiente');
}

function confirmAppointment() {
    alert('Cita confirmada - Funcionalidad pendiente');
}

function viewAchievement() {
    alert('Ver logro - Funcionalidad pendiente');
}

function shareCarnet() {
    if (navigator.share) {
        navigator.share({
            title: 'Carnet Digital OMI',
            text: 'Revisa el carnet digital de tu hijo',
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Enlace copiado al portapapeles');
        });
    }
}

function viewHistory() {
    alert('Historial completo - Funcionalidad pendiente');
}

function downloadPDF() {
    alert('Descarga PDF - Funcionalidad pendiente');
}

// Gestión de formularios
document.addEventListener('DOMContentLoaded', function() {
    // Manejar formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simular login
            if (email && password) {
                alert('Login exitoso - Redirigiendo al home');
                window.location.href = 'home.html';
            }
        });
    }

    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    });
});

// Configuración de marca blanca para familias
const whiteLabelConfig = {
    clinicName: 'Clínica Dental Sonrisa',
    logoUrl: '../assets/logo-placeholder.png',
    primaryColor: '#4F46E5',
    secondaryColor: '#06B6D4',
    supportEmail: 'familias@clinica-dental-sonrisa.com',
    phoneNumber: '+34 912 345 678',
    texts: {
        welcomeMessage: 'Hola, {name} 👋',
        subtitle: 'Tus hijos tienen un excelente cuidado dental'
    }
};

// Aplicar configuración de marca blanca
function applyWhiteLabelConfig() {
    // Aplicar colores CSS personalizados
    const root = document.documentElement;
    root.style.setProperty('--primary-color', whiteLabelConfig.primaryColor);
    root.style.setProperty('--secondary-color', whiteLabelConfig.secondaryColor);

    // Actualizar elementos con configuración
    const clinicLogos = document.querySelectorAll('.clinic-logo');
    clinicLogos.forEach(logo => {
        logo.src = whiteLabelConfig.logoUrl;
        logo.alt = `Logo ${whiteLabelConfig.clinicName}`;
    });

    // Personalizar textos si es necesario
    if (whiteLabelConfig.texts) {
        // Ejemplo de personalización de textos
        const welcomeElements = document.querySelectorAll('[data-text="welcome"]');
        welcomeElements.forEach(element => {
            element.textContent = whiteLabelConfig.texts.welcomeMessage.replace('{name}', currentUser.name);
        });
    }
}

// Inicializar configuración al cargar la página
document.addEventListener('DOMContentLoaded', applyWhiteLabelConfig);

// Funciones de utilidad para desarrolladores
function getCurrentChild() {
    return currentChild;
}

function getCurrentUser() {
    return currentUser;
}

function updateChildData(childId, data) {
    // Función para actualizar datos de un niño
    console.log(`Actualizando datos de ${childId}:`, data);
}

// Ejemplo de uso:
/*
// Para cambiar el niño actual:
currentChild = 'maria';

// Para actualizar datos:
updateChildData('carlos', {
    riskLevel: 'MEDIUM',
    nextAppointment: '2024-06-20'
});
*/
