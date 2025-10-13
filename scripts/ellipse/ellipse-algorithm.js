// Algoritmo del punto medio para elipses
class ElipseAlgorithm {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.datosRegion1 = [];
        this.datosRegion2 = [];
    }

    dibujarElipsePuntoMedio(cx, cy, rx, ry, color = '#4a6bff') {
        const scale = this.canvas.width / 400;
        const scaledCx = cx * scale;
        const scaledCy = cy * scale;
        const scaledRx = rx * scale;
        const scaledRy = ry * scale;
        
        // Reiniciar datos
        this.datosRegion1 = [];
        this.datosRegion2 = [];
        
        // Inicialización de variables
        let x = 0;
        let y = scaledRy;
        
        // Parámetros iniciales para la región 1
        let d1 = (scaledRy * scaledRy) - (scaledRx * scaledRx * scaledRy) + (0.25 * scaledRx * scaledRx);
        let dx = 2 * scaledRy * scaledRy * x;
        let dy = 2 * scaledRx * scaledRx * y;
        
        let iteracion = 0;
        
        // Región 1
        while (dx < dy) {
            this.dibujarPuntosElipse(scaledCx, scaledCy, x, y, color);
            
            // Guardar estado actual
            const xActual = Math.round(x);
            const yActual = Math.round(y);
            const p1Actual = d1;
            
            x++;
            dx = dx + (2 * scaledRy * scaledRy);
            
            if (d1 < 0) {
                d1 = d1 + dx + (scaledRy * scaledRy);
            } else {
                y--;
                dy = dy - (2 * scaledRx * scaledRx);
                d1 = d1 + dx - dy + (scaledRy * scaledRy);
            }
            
            // Guardar datos para la tabla
            this.datosRegion1.push({
                iteracion: iteracion++,
                xActual: xActual,
                yActual: yActual,
                p: p1Actual.toFixed(2),
                xSiguiente: Math.round(x),
                ySiguiente: Math.round(y)
            });
        }
        
        // Parámetros iniciales para la región 2
        let d2 = ((scaledRy * scaledRy) * ((x + 0.5) * (x + 0.5))) +
                 ((scaledRx * scaledRx) * ((y - 1) * (y - 1))) -
                 (scaledRx * scaledRx * scaledRy * scaledRy);
        
        iteracion = 0;
        
        // Región 2
        while (y >= 0) {
            this.dibujarPuntosElipse(scaledCx, scaledCy, x, y, color);
            
            // Guardar estado actual
            const xActual = Math.round(x);
            const yActual = Math.round(y);
            const p2Actual = d2;
            
            y--;
            dy = dy - (2 * scaledRx * scaledRx);
            
            if (d2 > 0) {
                d2 = d2 + (scaledRx * scaledRx) - dy;
            } else {
                x++;
                dx = dx + (2 * scaledRy * scaledRy);
                d2 = d2 + dx - dy + (scaledRx * scaledRx);
            }
            
            // Guardar datos para la tabla
            this.datosRegion2.push({
                iteracion: iteracion++,
                xActual: xActual,
                yActual: yActual,
                p: p2Actual.toFixed(2),
                xSiguiente: Math.round(x),
                ySiguiente: Math.round(y)
            });
        }
        
        return {
            region1: this.datosRegion1,
            region2: this.datosRegion2
        };
    }

    dibujarPuntosElipse(cx, cy, x, y, color) {
        this.ctx.fillStyle = color;
        
        // Dibujar los 4 puntos simétricos
        this.ctx.fillRect(cx + x, cy + y, 1, 1); // Primer cuadrante
        this.ctx.fillRect(cx - x, cy + y, 1, 1); // Segundo cuadrante
        this.ctx.fillRect(cx + x, cy - y, 1, 1); // Cuarto cuadrante
        this.ctx.fillRect(cx - x, cy - y, 1, 1); // Tercer cuadrante
    }

    getDatos() {
        return {
            region1: this.datosRegion1,
            region2: this.datosRegion2
        };
    }
}