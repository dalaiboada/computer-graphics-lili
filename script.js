import EJERCICIO_1 from './ejercicios/ejercicio1.js';
import EJERCICIO_2 from './ejercicios/ejercicio2.js';
import EJERCICIO_3 from './ejercicios/ejercicio3.js';

/**
 * Muestra el contenido correspondiente al algoritmo seleccionado y el tipo de contenido (código, explicación o demostración).
 * @param {string} algoritmo - El nombre del algoritmo (ejemplo: "linea", "elipse", "fractal").
 * @param {string} tabType - El tipo de contenido a mostrar ("codigo", "explicacion", "demo").
 */
const showTab = (algoritmo, tabType) =>{
    const contents = document.querySelectorAll(`#${algoritmo}-codigo, #${algoritmo}-demo, #${algoritmo}-explicacion`);
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(`${algoritmo}-${tabType}`).classList.add('active');

    const container = document.getElementById(`${algoritmo}-${tabType}`).closest('.demo-container');
    container.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
}

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.demo-tabs .tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const container = event.target.closest('section');
            const prefix = container.querySelector('[id$="-codigo"]').id.split('-')[0];

            let tabType;
            const buttonText = event.target.textContent.trim();

            if (buttonText.includes('Explicación')) { tabType = 'explicacion'; } 
            else if (buttonText.includes('Código')) { tabType = 'codigo'; } 
            else if (buttonText.includes('Demostración')) {  tabType = 'demo'; }
                        
            showTab(prefix, tabType);
            
            event.target.classList.add('active');
        });
    });
});

const Ejercicios = [EJERCICIO_1, EJERCICIO_2, EJERCICIO_3];

const $codigoEjercicios = document.querySelectorAll('code');
try {
    $codigoEjercicios.forEach((codigo, index) => {
        codigo.textContent = Ejercicios[index];
    });
} catch (error) {
    console.log("Error al mostrar el código: " + error);
}

