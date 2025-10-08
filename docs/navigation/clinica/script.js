// JavaScript para navegación e interactividad - OMI Clínica

// Estado de la aplicación
let currentUser = {
    name: 'Dr. Juan Pérez',
    role: 'dentista',
    clinic: 'Clínica Dental Sonrisa'
};

let currentTab = 1;
let dientesSeleccionados = new Set();

// Navegación entre páginas
function navigateTo(page) {
    const routes = {
        'dashboard': 'dashboard.html',
        'pacientes': 'pacientes.html',
        'agenda': 'agenda.html',
        'estadisticas': 'estadisticas.html',
        'config': 'config.html'
    };

    if (routes[page]) {
        window.location.href = routes[page];
    }
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

// Funciones específicas de pacientes
function newPatient() {
    alert('Nuevo paciente - Funcionalidad pendiente');
}

function viewPatient(patientId) {
    window.location.href = `paciente-detalle.html?id=${patientId}`;
}

function editPatient() {
    alert('Editar paciente - Funcionalidad pendiente');
}

function viewCarnet() {
    alert('Ver carnet digital - Funcionalidad pendiente');
}

function generateReport() {
    alert('Generar informe - Funcionalidad pendiente');
}

// Funciones de citas
function viewAppointment(appointmentId) {
    alert(`Ver cita ${appointmentId} - Funcionalidad pendiente`);
}

function contactPatient(patientId) {
    alert(`Contactar paciente ${patientId} - Funcionalidad pendiente`);
}

// Funciones de revisión
function newReview() {
    window.location.href = 'revision.html';
}

function saveDraft() {
    alert('Borrador guardado - Funcionalidad pendiente');
}

function cancelRevision() {
    if (confirm('¿Estás seguro de que quieres cancelar? Se perderán los cambios no guardados.')) {
        window.location.href = 'pacientes.html';
    }
}

// Navegación entre pestañas de revisión
function nextTab(tabNumber) {
    if (tabNumber > 5) {
        alert('Revisión completada - Funcionalidad pendiente');
        return;
    }

    // Ocultar pestaña actual
    document.getElementById(`tab${currentTab}`).classList.remove('active');

    // Mostrar nueva pestaña
    currentTab = tabNumber;
    document.getElementById(`tab${currentTab}`).classList.add('active');

    // Actualizar indicador de progreso
    updateProgressTabs();
}

function prevTab(tabNumber) {
    if (tabNumber < 1) return;

    document.getElementById(`tab${currentTab}`).classList.remove('active');
    currentTab = tabNumber;
    document.getElementById(`tab${currentTab}`).classList.add('active');
    updateProgressTabs();
}

function updateProgressTabs() {
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach((tab, index) => {
        const tabNumber = index + 1;
        if (tabNumber < currentTab) {
            tab.classList.add('completed');
            tab.classList.remove('active');
        } else if (tabNumber === currentTab) {
            tab.classList.add('active');
            tab.classList.remove('completed');
        } else {
            tab.classList.remove('active', 'completed');
        }
    });
}

// Gestión del odontograma
function toggleDiente(diente) {
    const numero = diente.dataset.diente;

    if (dientesSeleccionados.has(numero)) {
        dientesSeleccionados.delete(numero);
        diente.classList.remove('seleccionado');
    } else {
        dientesSeleccionados.add(numero);
        diente.classList.add('seleccionado');
    }

    console.log('Dientes seleccionados:', Array.from(dientesSeleccionados));
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
                alert('Login exitoso - Redirigiendo al dashboard');
                window.location.href = 'dashboard.html';
            }
        });
    }

    // Inicializar odontograma si existe
    const dientes = document.querySelectorAll('.diente');
    dientes.forEach(diente => {
        diente.addEventListener('click', function() {
            toggleDiente(this);
        });
    });

    // Inicializar filtros de búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            console.log('Buscando:', this.value);
            // Implementar búsqueda en tiempo real
        });
    }

    // Inicializar pestañas
    updateProgressTabs();
});

// Funciones de utilidad
function showTab(tabName) {
    // Ocultar todas las pestañas
    const tabs = document.querySelectorAll('.tab-content > div');
    tabs.forEach(tab => tab.style.display = 'none');

    // Mostrar pestaña seleccionada
    document.getElementById(tabName).style.display = 'block';

    // Actualizar botones de pestaña
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}

// Configuración de marca blanca
const whiteLabelConfig = {
    clinicName: 'Clínica Dental Sonrisa',
    logoUrl: '../assets/logo-placeholder.png',
    primaryColor: '#4F46E5',
    secondaryColor: '#06B6D4',
    supportEmail: 'soporte@clinica-dental-sonrisa.com',
    phoneNumber: '+34 912 345 678'
};

// Aplicar configuración de marca blanca
function applyWhiteLabelConfig() {
    // Actualizar elementos con configuración
    const clinicLogos = document.querySelectorAll('.clinic-logo, .header-logo');
    clinicLogos.forEach(logo => {
        logo.src = whiteLabelConfig.logoUrl;
        logo.alt = `Logo ${whiteLabelConfig.clinicName}`;
    });

    // Aplicar colores personalizados
    document.documentElement.style.setProperty('--primary-color', whiteLabelConfig.primaryColor);
    document.documentElement.style.setProperty('--secondary-color', whiteLabelConfig.secondaryColor);
}

// Inicializar configuración al cargar la página
document.addEventListener('DOMContentLoaded', applyWhiteLabelConfig);
