/**
 * Muestra el contenido correspondiente al algoritmo seleccionado y el tipo de contenido.
 * @param {string} algoritmo - El nombre del algoritmo (ejemplo: "linea", "elipse", "fractal").
 * @param {string} tabType - El tipo de contenido a mostrar ("codigo", "explicacion", "demo").
 */
export const showTab = (algoritmo, tabType) => {
    const contents = document.querySelectorAll(`#${algoritmo}-codigo, #${algoritmo}-demo, #${algoritmo}-explicacion`);
    contents.forEach(content => content.classList.remove('active'));

    const targetElement = document.getElementById(`${algoritmo}-${tabType}`);
    if (targetElement) {
        targetElement.classList.add('active');
    }

    const container = targetElement?.closest('.demo-container');
    container?.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
}

/**
 * Inicializa los event listeners para los botones de pestañas.
 */
export const init = () => {
    const tabButtons = document.querySelectorAll('.demo-tabs .tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const container = event.target.closest('section');
            const prefix = container.querySelector('[id$="-codigo"]')?.id.split('-')[0];

            if (!prefix) return;

            let tabType;
            const buttonText = event.target.textContent.trim();

            if (buttonText.includes('Explicación')) { 
                tabType = 'explicacion'; 
            } else if (buttonText.includes('Código')) { 
                tabType = 'codigo'; 
            } else if (buttonText.includes('Demostración')) {  
                tabType = 'demo'; 
            }
                        
            if (tabType) {
                showTab(prefix, tabType);
                event.target.classList.add('active');
            }
        });
    });
}
