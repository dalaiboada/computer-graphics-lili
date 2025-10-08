/**
 * Lee el contenido de un archivo de ejercicio.
 *
 * @param {number} nEjercicio - Número del ejercicio (0-based).
 * @param {string} extension - La extensión del archivo a cargar (ej: 'py', 'cpp').
 * @returns {Promise<string>} Contenido del archivo o mensaje de error.
 */
async function leerArchivoEjercicio(nEjercicio, extension) {
    try {
        const nombreBase = `./ejercicios/ejercicio${nEjercicio + 1}/ejercicio-${nEjercicio + 1}`;
        const rutaCompleta = `${nombreBase}.${extension}`;

        const archivo = await fetch(rutaCompleta);

        if (!archivo.ok) {
            throw new Error(`Error al leer el archivo: ${archivo.status} en la ruta: ${rutaCompleta}`);
        }

        return await archivo.text();
    } catch (error) {
        return `// Error al cargar el ejercicio ${nEjercicio + 1} (${extension}): ${error.message}`;
    }
}

/**
 * Muestra los ejercicios en los elementos <code> de la página utilizando highlight.js.
 */
async function mostrarEjercicios() {
    const $codigoEjercicios = document.querySelectorAll('code');

    try {
        const contenidos = await Promise.all(
            Array.from($codigoEjercicios).map((codigoElement, index) => {
                const extension = codigoElement.dataset.extension || 'py';
                return leerArchivoEjercicio(index, extension);
            })
        );

        $codigoEjercicios.forEach((codigo, index) => {
            if (contenidos[index]) {

                // Lenguaje basado en la extensión
                const extension = codigo.dataset.extension || 'py';
                const lenguaje = extension === 'cpp' ? 'cpp' :
                               extension === 'py' ? 'python' : 'python';

                // Aplicar el contenido y configurar el lenguaje
                codigo.textContent = contenidos[index];
                codigo.className = `language-${lenguaje}`;
            }
        });

        // Aplicar highlight.js a todos los elementos 
        hljs.highlightAll();
        
    } catch (error) {
        console.error("Error al mostrar los ejercicios:", error);
    }
}

export function init() {
    mostrarEjercicios();
}
