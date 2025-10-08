# Algoritmos de Computación Gráfica - Proyecto Educativo UGMA

Este proyecto implementa y demuestra visualmente tres algoritmos fundamentales de gráficos por computadora utilizando diferentes tecnologías de programación. Cada algoritmo incluye una aplicación interactiva con interfaz gráfica para facilitar el aprendizaje y experimentación.

## 🎯 Objetivos del Proyecto

- **Demostrar** algoritmos clásicos de gráficos computacionales
- **Comparar** diferentes enfoques de implementación (Python vs C++)
- **Proporcionar** herramientas interactivas para el aprendizaje
- **Documentar** el proceso paso a paso con explicaciones detalladas

## 📋 Algoritmos Implementados

### 1. Línea con Interpolación RGB y Grosor Dinámico

**Tecnología:** Python + Pygame + pygame_gui

**Características:**
- ✅ Algoritmo DDA (Digital Differential Analyzer)
- ✅ Interpolación de color RGB entre dos colores
- ✅ Control dinámico de grosor de línea (1-20 píxeles)
- ✅ Interfaz gráfica interactiva con validación de entrada
- ✅ Área de dibujo separada del panel de controles

**Ubicación:** `ejercicios/ejercicio1/ejercicio-1.py`

### 2. Algoritmo de Elipse por Punto Medio

**Tecnología:** Python + Pygame

**Características:**
- ✅ Implementación eficiente usando simetría de cuadrantes
- ✅ Cálculo preciso de puntos en la elipse
- ✅ Algoritmo del punto medio optimizado
- ✅ Visualización clara del proceso de dibujo
- ✅ Uso de colores para identificar cuadrantes

**Ubicación:** `ejercicios/ejercicio2/ejercicio-2.py`

### 3. Análisis de Circunferencias

**Tecnología:** C++ (nativo)

**Características:**
- ✅ Verificación de colinealidad de puntos
- ✅ Cálculo de centro y radio de circunferencia
- ✅ Validación de pertenencia de puntos a la circunferencia
- ✅ Manejo eficiente de estructuras de datos
- ✅ Implementación compilada para máximo rendimiento

**Ubicación:** `ejercicios/ejercicio3/ejercicio-3.cpp`

## 🖥️ Interfaz Web Educativa

**Tecnología:** HTML5 + CSS3 + JavaScript (módulos ES6)

**Características:**
- ✅ Presentación organizada por pestañas (Explicación/Código/Demostración)
- ✅ Sistema de navegación intuitivo
- ✅ Integración de recursos multimedia (videos, imágenes)
- ✅ Diseño responsivo y accesible
- ✅ Arquitectura modular de código

**Ubicación:** `index.html`, `scripts/`, `styles/`

## 📁 Estructura del Proyecto

```
computer-graphics-lili/
├── 📄 index.html                    # Página principal educativa
├── 📄 README.md                     # Esta documentación
├── 🎨 styles/                       # Hojas de estilo CSS
│   ├── main.css                     # Estilos principales
│   └── modules/                     # Estilos modulares
│       ├── base.css
│       ├── code-block.css
│       ├── demo-container.css
│       ├── header.css
│       ├── tabs.css
│       ├── utils.css
│       └── video.css
├── ⚙️ scripts/                      # Código JavaScript
│   ├── main.js                      # Punto de entrada principal
│   └── modules/                     # Funcionalidades modulares
│       ├── fileLoader.js            # Cargador de archivos
│       └── tabs.js                  # Sistema de pestañas
├── 📚 ejercicios/                   # Implementaciones prácticas
│   ├── ejercicio1/                  # Línea con interpolación RGB
│   │   ├── ejercicio-1.py           # Código fuente principal
│   │   └── demo_ejercicio-1.mp4     # Video demostrativo
│   ├── ejercicio2/                  # Algoritmo de elipse
│   │   ├── ejercicio-2.py           # Código fuente principal
│   │   ├── ejercicio_2.py           # Versión alternativa
│   │   └── midpoint_circle_algorithm_animation_full.gif
│   └── ejercicio3/                  # Análisis de circunferencias
│       ├── ejercicio-3.cpp          # Código fuente principal
│       └── ejercicio_3.exe          # Ejecutable compilado
└── .vscode/                         # Configuración del editor
```

## 🚀 Cómo Usar

### Aplicaciones Interactivas (Python)

**Requisitos:**
- Python 3.7+
- Pygame (`pip install pygame`)
- pygame_gui (`pip install pygame-gui`)

**Ejecución:**
```bash
cd ejercicios/ejercicio1/
python ejercicio-1.py
```

```bash
cd ejercicios/ejercicio2/
python ejercicio-2.py
```

### Aplicación C++

**Compilación:**
```bash
cd ejercicios/ejercicio3/
g++ ejercicio-3.cpp -o ejercicio_3.exe
```

**Ejecución:**
```bash
./ejercicio_3.exe
```

### Interfaz Web

1. Abrir `index.html` en navegador moderno
2. Navegar por las diferentes secciones usando las pestañas
3. Revisar explicaciones teóricas
4. Examinar código fuente
5. Ver demostraciones en video

## 📚 Recursos de Aprendizaje

### Algoritmo DDA (Digital Differential Analyzer)
- **Ventajas:** Suavizado de líneas, fácil implementación
- **Aplicación:** Líneas con gradientes de color
- **Complejidad:** O(n) donde n es la longitud de la línea

### Algoritmo del Punto Medio para Elipses
- **Ventajas:** Eficiencia usando aritmética entera
- **Aplicación:** Dibujo preciso de elipses y círculos
- **Complejidad:** O(a*b) donde a,b son semiejes

### Análisis Geométrico de Circunferencias
- **Ventajas:** Precisión matemática, aplicación directa
- **Aplicación:** Validación de conjuntos de puntos
- **Complejidad:** O(n) para n puntos

## 🔧 Tecnologías Utilizadas

| Tecnología | Uso | Ejercicio |
|------------|-----|-----------|
| **Python** | Implementación interactiva | 1, 2 |
| **C++** | Cálculo eficiente | 3 |
| **Pygame** | Gráficos 2D | 1, 2 |
| **HTML5/CSS3** | Interfaz educativa | Web |
| **JavaScript** | Funcionalidad web | Web |

## 🎓 Aspectos Educativos

- **Aprendizaje progresivo** de algoritmos gráficos
- **Comparación** entre diferentes lenguajes de programación
- **Comprensión** de conceptos matemáticos subyacentes
- **Desarrollo** de habilidades prácticas de implementación
- **Documentación** clara y estructurada

## 📈 Mejoras Futuras

- [ ] Implementar algoritmo de Bresenham para líneas
- [ ] Agregar más algoritmos de relleno (flood fill, scanline)
- [ ] Desarrollar versión web interactiva en Canvas API
- [ ] Crear comparativas de rendimiento entre algoritmos
- [ ] Agregar modo de depuración paso a paso

## 👨‍🏫 Créditos

**Desarrollado para:**
- Curso de Computación Gráfica
- Universidad UGMA
- Año académico 2024-2025

**Características destacadas:**
- ✅ Implementaciones funcionales y documentadas
- ✅ Interfaces gráficas intuitivas
- ✅ Código fuente comentado
- ✅ Recursos multimedia educativos
- ✅ Arquitectura modular y mantenible

---

*Este proyecto demuestra la aplicación práctica de conceptos teóricos de gráficos por computadora mediante implementaciones concretas y herramientas educativas interactivas.*
