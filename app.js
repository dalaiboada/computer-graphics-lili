// Configuración de rutas
const routes = {
    '/': { section: 'ejercicio1', tab: 'explicacion' },
    '/ejercicio1': { section: 'ejercicio1', tab: 'explicacion' },
    '/ejercicio2': { section: 'ejercicio2', tab: 'explicacion' },
    '/ejercicio3': { section: 'ejercicio3', tab: 'explicacion' }
};

// Función para navegar entre secciones
function navigateTo(route) {
    // Obtener la información de la ruta
    const routeInfo = getRouteInfo(route);
    
    // Actualizar la URL sin recargar la página
    if (route === '/') {
        // Si es la ruta raíz, solo actualizamos la URL sin mostrar ninguna sección
        history.pushState({}, '', route);
        // Ocultar todas las secciones
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
    } else if (routeInfo) {
        // Para cualquier otra ruta válida, mostrar la sección correspondiente
        history.pushState({}, '', route);
        showSection(routeInfo.section, routeInfo.tab);
    }
}

// Función para mostrar una sección específica
function showSection(sectionId, tabType = 'explicacion') {
    console.log('Mostrando sección:', sectionId, 'con tab:', tabType);
    
    // Ocultar todas las secciones
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Mostrar la sección seleccionada
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        
        // Llamar a la función showTab para actualizar los tabs
        if (window.showTab) {
            console.log('Llamando a showTab con:', sectionId, tabType);
            window.showTab(sectionId, tabType);
        } else {
            console.error('showTab no está definido');
        }
        
        // Desplazamiento suave a la sección
        setTimeout(() => {
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 50);
    } else {
        console.error('No se encontró la sección:', sectionId);
    }
    
    // Actualizar el botón activo en la navegación
    updateActiveNav(sectionId);
}

// Función para actualizar el botón activo en la navegación
function updateActiveNav(sectionId) {
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Función auxiliar para mapear rutas a IDs de sección
function getRouteInfo(path) {
    // Si el path está vacío o es solo una barra, devolver null para indicar que no hay sección que mostrar
    if (!path || path === '/' || path === '') {
        return null;
    }
    
    // Limpiar la ruta (eliminar barras al principio y al final)
    const cleanPath = path.replace(/^\/+|\/+$/g, '');
    
    // Si la ruta limpia está vacía, devolver null
    if (!cleanPath) {
        return null;
    }
    
    // Si la ruta existe en nuestro objeto de rutas, devolver su información
    if (routes[`/${cleanPath}`]) {
        return routes[`/${cleanPath}`];
    }
    
    // Si no se encuentra la ruta, devolver null
    return null;
}

// Manejar el evento de retroceso/avance del navegador
window.addEventListener('popstate', () => {
    const routeInfo = getRouteInfo(window.location.pathname);
    if (routeInfo) {
        showSection(routeInfo.section, routeInfo.tab);
    } else {
        // Si no hay una ruta válida, ocultar todas las secciones
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        // Quitar la clase 'active' de todos los enlaces de navegación
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
    }
});

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado, inicializando aplicación...');
    
    // Ocultar todas las secciones al cargar la página
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Configurar los manejadores de eventos para los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    console.log('Encontrados', navLinks.length, 'enlaces de navegación');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const route = link.getAttribute('href');
            console.log('Navegando a:', route);
            navigateTo(route);
        });
    });
    
    // Si hay un hash en la URL, navegar a esa sección
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const route = `/${hash}`;
        if (routes[route]) {
            navigateTo(route);
        }
    }
});

// Exportar las funciones necesarias
export { navigateTo, showSection };
