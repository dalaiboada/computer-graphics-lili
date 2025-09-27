// La función showTab (la dejaremos igual a menos que tenga problemas con 'event.target')
function showTab(algoritmo, tabType) {
    // Asegúrate de que esta función NO use 'event.target'
    const contents = document.querySelectorAll(`#${algoritmo}-codigo, #${algoritmo}-demo, #${algoritmo}-explicacion`);
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(`${algoritmo}-${tabType}`).classList.add('active');

    // Quitar la clase 'active' de todos los botones en el contenedor
    const container = document.getElementById(`${algoritmo}-${tabType}`).closest('.demo-container');
    container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    // ¡La clase 'active' al botón clickeado se añadirá DESDE abajo!
}


// === Lógica de Inicialización y Manejo de Eventos ===
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Selecciona todos los botones de las pestañas
    const tabButtons = document.querySelectorAll('.demo-tabs .tab-button');
    
    tabButtons.forEach(button => {
        // 2. Asigna el evento click a cada botón
        button.addEventListener('click', function(event) {
            
            // a) Obtener el ID de la demo (ej: 'linea', 'elipse')
            // Se usa el ID del div que contiene el código/demo/explicacion
            const container = event.target.closest('.demo-container');
            const prefix = container.querySelector('[id$="-codigo"]').id.split('-')[0]; // Obtiene 'linea' de 'linea-codigo'

            // b) Deducir el tipo de pestaña (ej: 'codigo', 'explicacion')
            let tabType;
            const buttonText = event.target.textContent.trim();
            if (buttonText.includes('Explicación')) {
                tabType = 'explicacion';
            } else if (buttonText.includes('Código')) {
                tabType = 'codigo';
            } else if (buttonText.includes('Demostración')) {
                tabType = 'demo';
            }
            
            // c) Llamar a la función showTab
            showTab(prefix, tabType);
            
            // d) Marcar el botón clickeado como activo
            event.target.classList.add('active');
        });
        
        // 3. (Opcional) Inicializar el estado activo
        // Si tu HTML ya tiene una pestaña 'active' (como en tu código), no necesitas esta parte.
    });
});