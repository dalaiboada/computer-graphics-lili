// Manejo de la interfaz de usuario y validaciones
class UIManager {
    constructor() {
        this.errorDiv = document.getElementById('error-message');
        this.errorTimeout = null;
    }

    getInputValues() {
        return {
            cx: parseInt(document.getElementById('cx').value),
            cy: parseInt(document.getElementById('cy').value),
            rx: parseInt(document.getElementById('rx').value),
            ry: parseInt(document.getElementById('ry').value)
        };
    }

    validarInputs(cx, cy, rx, ry) {
        if (isNaN(cx) || isNaN(cy) || isNaN(rx) || isNaN(ry)) {
            throw new Error('Por favor, ingresa valores numéricos válidos');
        }
        
        if (rx <= 0 || ry <= 0) {
            throw new Error('Los radios deben ser mayores a 0');
        }

        if (cx - rx < 0 || cx + rx > 400 || 
            cy - ry < 0 || cy + ry > 400) {
            throw new Error('La elipse no cabe en el canvas con los valores actuales');
        }

        return true;
    }

    showError(message) {
        this.errorDiv.textContent = message;
        this.errorDiv.style.display = 'block';
        this.errorDiv.classList.remove('hidden');
        
        // Ocultar después de 3 segundos
        clearTimeout(this.errorTimeout);
        this.errorTimeout = setTimeout(() => {
            this.errorDiv.classList.add('hidden');
            setTimeout(() => {
                this.errorDiv.style.display = 'none';
            }, 500);
        }, 3000);
    }

    hideError() {
        this.errorDiv.classList.add('hidden');
        setTimeout(() => {
            this.errorDiv.style.display = 'none';
        }, 500);
    }
}