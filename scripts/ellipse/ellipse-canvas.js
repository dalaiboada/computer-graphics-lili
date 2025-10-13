// Manejo del canvas y dibujo de puntos
class CanvasManager {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.puntos = [];
        this.lastDrawn = null;
    }

    resizeCanvas() {
        const container = document.querySelector('.container');
        const maxWidth = container.clientWidth - 60;
        const size = Math.min(400, maxWidth);
        
        this.canvas.width = size;
        this.canvas.height = size;
        
        // Redibujar si hay algo en el canvas
        if (this.lastDrawn) {
            const {cx, cy, rx, ry, color} = this.lastDrawn;
            this.redibujar(cx, cy, rx, ry, color);
        }
    }

    dibujarPunto(x, y, color = '#ff4a4a', size = 6) {
        const scale = this.canvas.width / 400;
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x * scale, y * scale, size, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Guardar el punto para redibujar
        this.puntos.push({x, y, color, size});
    }

    limpiarCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.lastDrawn = null;
        this.puntos = [];
    }

    redibujar(cx, cy, rx, ry, color) {
        this.limpiarCanvas();
        this.lastDrawn = {cx, cy, rx, ry, color};
        
        // Redibujar puntos guardados
        this.puntos.forEach(punto => {
            this.dibujarPunto(punto.x, punto.y, punto.color, punto.size);
        });
    }

    getContext() {
        return this.ctx;
    }

    getCanvas() {
        return this.canvas;
    }
}