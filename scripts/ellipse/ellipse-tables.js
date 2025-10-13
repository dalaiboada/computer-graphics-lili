// Manejo de las tablas de datos del algoritmo
class TableManager {
    constructor() {
        this.tablas = {
            region1: document.getElementById('tabla-region1'),
            region2: document.getElementById('tabla-region2')
        };
    }

    actualizarTabla(regionId, datos) {
        const tabla = this.tablas[regionId];
        const tbody = tabla.querySelector('tbody');
        
        // Limpiar tabla
        tbody.innerHTML = '';
        
        // Si no hay datos, mostrar mensaje
        if (datos.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="4" class="empty-table">
                        <i class="fas fa-chart-line"></i>
                        Dibuja una elipse para ver los datos del algoritmo
                    </td>
                </tr>
            `;
            return;
        }
        
        // Agregar filas con los datos
        datos.forEach(dato => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${dato.iteracion}</td>
                <td>(${dato.xActual}, ${dato.yActual})</td>
                <td>${dato.p}</td>
                <td>(${dato.xSiguiente}, ${dato.ySiguiente})</td>
            `;
            tbody.appendChild(fila);
        });
    }

    limpiarTablas() {
        this.actualizarTabla('region1', []);
        this.actualizarTabla('region2', []);
    }
}