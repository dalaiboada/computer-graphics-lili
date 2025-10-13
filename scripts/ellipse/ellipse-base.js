// Punto de entrada principal - Coordinación de módulos
class ElipseApp {
    constructor() {
        this.canvasManager = new CanvasManager('lienzo');
        this.tableManager = new TableManager();
        this.uiManager = new UIManager();
        this.algorithm = new ElipseAlgorithm(
            this.canvasManager.getContext(), 
            this.canvasManager.getCanvas()
        );

        this.initializeEventListeners();
        this.initializeApp();
    }

    initializeEventListeners() {
        document.getElementById('btnDibujar').addEventListener('click', () => this.dibujarDesdeInputs());
        document.getElementById('btnLimpiar').addEventListener('click', () => this.limpiarTodo());
        window.addEventListener('resize', () => this.canvasManager.resizeCanvas());
    }

    initializeApp() {
        this.canvasManager.resizeCanvas();
        this.dibujarElipse(200, 200, 80, 50);
    }

    dibujarDesdeInputs() {
        try {
            const {cx, cy, rx, ry} = this.uiManager.getInputValues();
            this.uiManager.validarInputs(cx, cy, rx, ry);
            this.dibujarElipse(cx, cy, rx, ry);
            this.uiManager.hideError();
        } catch (error) {
            this.uiManager.showError(error.message);
        }
    }

    dibujarElipse(cx, cy, rx, ry, color = '#4a6bff') {
        this.canvasManager.limpiarCanvas();

        // Ejecutar algoritmo y obtener datos
        const datos = this.algorithm.dibujarElipsePuntoMedio(cx, cy, rx, ry, color);

        // Dibujar puntos de referencia
        this.canvasManager.dibujarPunto(cx, cy, '#ff4a4a', 6); // Punto central
        this.canvasManager.dibujarPunto(cx - rx, cy, '#4a6bff', 4); // Izquierdo
        this.canvasManager.dibujarPunto(cx + rx, cy, '#4a6bff', 4); // Derecho
        this.canvasManager.dibujarPunto(cx, cy - ry, '#4a6bff', 4); // Superior
        this.canvasManager.dibujarPunto(cx, cy + ry, '#4a6bff', 4); // Inferior

        // Actualizar tablas
        this.tableManager.actualizarTabla('region1', datos.region1);
        this.tableManager.actualizarTabla('region2', datos.region2);

        // Guardar estado
        this.canvasManager.lastDrawn = {cx, cy, rx, ry, color};
    }

    limpiarTodo() {
        this.canvasManager.limpiarCanvas();
        this.tableManager.limpiarTablas();
        this.uiManager.hideError();
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new ElipseApp();
});