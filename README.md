# Algoritmos de Computación Gráfica

Este proyecto implementa y demuestra visualmente tres algoritmos fundamentales de gráficos por computadora utilizando JavaScript puro. La interfaz web permite explorar cada algoritmo a través de explicaciones detalladas, visualizaciones interactivas y el código fuente correspondiente.

## Características

1. **Línea con Interpolación de Color**

- Implementación del algoritmo DDA (Digital Differential Analyzer)
- Interpolación de color RGB entre dos colores cualesquiera
- Control de grosor de línea
- Visualización interactiva

2. **Algoritmo de Elipse por Punto Medio***

- Implementación eficiente usando simetría de cuadrantes
- Cáculo preciso de puntos en la elipse
- Visualización clara del proceso de dibujo

3. **Fractal Floral***

- Generación recursiva de patrones florales
- Control de profundidad de recursión
- Visualización de la estructura fractal

## Estructura del Proyecto

```
.
├── index.html          # P gina principal de la aplicaci n
├── script.js           # L gica principal de la aplicaci n
├── styles.css          # Estilos CSS para la interfaz de usuario
├── ejercicios/
│   ├── ejercicio1.js   # Implementaci n del algoritmo de l nea
│   ├── ejercicio2.js   # Implementaci n del algoritmo de elipse
│   └── ejercicio3.js   # Implementaci n del fractal floral
└── plataformas.mp4     # Video demostrativo
```

## Explicaci n de los Algoritmos

### 1. Algoritmo DDA para Líneas con Interpolación de Color

El algoritmo DDA (Digital Differential Analyzer) es un algoritmo de conversión de líneas que calcula posiciones de píxels en intervalos iguales a lo largo de una línea. En esta implementación:

- Se calculan incrementos fraccionarios para suavizar la línea
- Se implementa interpolación lineal de color entre dos colores RGB
- Se permite controlar el grosor de la línea

### 2. Algoritmo de Elipse por Punto Medio

Este algoritmo dibuja una elipse utilizando la simetría de los cuatro cuadrantes. La implementación:

- Divide el dibujo en dos regiones para un trazado óptimo
- Utiliza la ecuación de la elipse para determinar los píxels a dibujar
- Aprovecha la simetría para reducir cálculos

### 3. Fractal Floral

Un fractal recursivo que genera patrones florales mediante:

- Dibujo recursivo de círculos y elipses
- Rotación y escalado de pétalos
- Control de profundidad para la recursión

## C mo Usar

1. Abre el archivo `index.html` en un navegador web moderno
2. Navega por las diferentes secciones usando las pestañas
3. Para cada algoritmo:
   - Revisa la explicación teórica
   - Explora el código fuerte
   - Observa la demostración visual

## Notas de Implementación

- El proyecto utiliza JavaScript moderno (ES6+)
- No se requieren dependencias externas
- El código está  organizado en módulos para mejorar mantenibilidad

## Créditos

Desarrollado para la clase de Computación Gráfica - UGMA
