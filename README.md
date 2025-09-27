#  Algoritmos de Computaci n Gr fica

Este proyecto implementa y demuestra visualmente tres algoritmos fundamentales de gr ficos por computadora utilizando JavaScript puro. La interfaz web permite explorar cada algoritmo a trav s de explicaciones detalladas, visualizaciones interactivas y el c digo fuente correspondiente.

##  Caracter sticas

1.  **L nea con Interpolaci n de Color**
   - Implementaci n del algoritmo DDA (Digital Differential Analyzer)
   - Interpolaci n de color RGB entre dos colores cualesquiera
   - Control de grosor de l nea
   - Visualizaci n interactiva

2.  **Algoritmo de Elipse por Punto Medio***
   - Implementaci n eficiente usando simetr a de cuadrantes
   - C lculo preciso de puntos en la elipse
   - Visualizaci n clara del proceso de dibujo

3.  **Fractal Floral***
   - Generaci n recursiva de patrones florales
   - Control de profundidad de recursi n
   - Visualizaci n de la estructura fractal

##  Estructura del Proyecto

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

##  Explicaci n de los Algoritmos

### 1. Algoritmo DDA para L neas con Interpolaci n de Color

El algoritmo DDA (Digital Differential Analyzer) es un algoritmo de conversi n de l neas que calcula posiciones de p xels en intervalos iguales a lo largo de una l nea. En esta implementaci n:

- Se calculan incrementos fraccionarios para suavizar la l nea
- Se implementa interpolaci n lineal de color entre dos colores RGB
- Se permite controlar el grosor de la l nea

### 2. Algoritmo de Elipse por Punto Medio

Este algoritmo dibuja una elipse utilizando la simetr a de los cuatro cuadrantes. La implementaci n:

- Divide el dibujo en dos regiones para un trazado ptimo
- Utiliza la ecuaci n de la elipse para determinar los p xels a dibujar
- Aprovecha la simetr a para reducir c lculos

### 3. Fractal Floral

Un fractal recursivo que genera patrones florales mediante:

- Dibujo recursivo de c rculos y elipses
- Rotaci n y escalado de p talos
- Control de profundidad para la recursi n

##  C mo Usar

1. Abre el archivo `index.html` en un navegador web moderno
2. Navega por las diferentes secciones usando las pesta as
3. Para cada algoritmo:
   - Revisa la explicaci n te rica
   - Explora el c digo fuerte
   - Observa la demostraci n visual

##  Notas de Implementaci n

- El proyecto utiliza JavaScript moderno (ES6+)
- No se requieren dependencias externas
- El c digo est  organizado en m dulos para mejorar mantenibilidad


##  Cr ditos

Desarrollado para la clase de Computaci n Gr fica - UGMA
