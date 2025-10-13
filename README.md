# Algoritmos de Computación Gráfica - Proyecto Educativo UGMA

Este proyecto implementa y demuestra visualmente cuatro algoritmos fundamentales de gráficos por computadora utilizando diferentes tecnologías de programación. Cada algoritmo incluye una aplicación interactiva con interfaz gráfica para facilitar el aprendizaje y experimentación.

## 🎯 Objetivos del Proyecto

- **Demostrar** algoritmos clásicos de gráficos computacionales
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

### 4. Generador de Flores con Patrones Geométricos

**Tecnología:** Python + Tkinter

**Características:**

- ✅ Generación de patrones florales complejos
- ✅ Uso de coordenadas polares para creación de pétalos
- ✅ Control interactivo de parámetros (tamaño, número de pétalos, colores)
- ✅ Conversión de colores HSV a RGB para gradientes suaves
- ✅ Interfaz gráfica intuitiva con controles deslizantes

**Ubicación:** `ejercicios/ejercicio4/ejercicio-4.py`

## 🖥️ Interfaz Web Educativa

**Tecnología:** HTML5 + CSS3 + JavaScript (módulos ES6)

**Características:**

- ✅ Presentación organizada por pestañas (Explicación/Código/Demostración)
- ✅ Sistema de navegación intuitivo
- ✅ Integración de recursos multimedia (videos, imágenes)
- ✅ Diseño responsivo y accesible
- ✅ Arquitectura modular de código
- ✅ Páginas interactivas para cada algoritmo
- ✅ Controles intuitivos para manipulación en tiempo real

**Ubicación:**

- `index.html` - Página principal
- `pages/` - Páginas específicas de algoritmos
  - `ellipse.html` - Página interactiva del algoritmo de elipse
- `scripts/` - Código JavaScript
- `styles/` - Hojas de estilo

### Módulo de Elipse Interactiva

**Tecnología:** JavaScript + Canvas API

**Características:**

- ✅ Implementación interactiva del algoritmo de elipse
- ✅ Control de parámetros en tiempo real
- ✅ Validación de entradas
- ✅ Retroalimentación visual inmediata
- ✅ Diseño responsivo que se adapta a diferentes tamaños de pantalla

**Ubicación:** `pages/ellipse.html`, `styles/ellipse/`

## 📁 Estructura del Proyecto

```
computer-graphics-lili/
├── 📄 index.html                    # Página principal educativa
├── 📄 README.md                     # Esta documentación
│   
├── 🎨 styles/                       # Hojas de estilo CSS
│   ├── main.css                     # Estilos principales
│   ├── ellipse-main.css            # Estilos específicos para la página de elipse
│   │
│   ├── 📂 ellipse/                     # Módulos de estilos de elipse
│   │   ├── ellipse-base.css        # Estilos base para la página de elipse
│   │   ├── ellipse-canvas.css      # Estilos para el área de dibujo del canvas
│   │   └── ellipse-tables.css      # Estilos para las tablas de datos
│   │
│   └── 📂 modules/                     # Estilos modulares de la página principal
│       ├── base.css                 # Estilos base
│       ├── code-block.css           # Estilos para bloques de código
│       ├── demo-container.css       # Contenedores de demostración
│       ├── header.css               # Estilos de la cabecera
│       ├── tabs.css                 # Estilos para pestañas
│       ├── utils.css                # Utilidades de estilos
│       └── video.css                # Estilos para videos
│   
├── ⚙️ scripts/                      # Código JavaScript
│   ├── main.js                      # Punto de entrada principal
│   │
│   ├── 📂 ellipse/                     # Módulos de funcionalidades de elipse
│   │   ├── ellipse-algorithm.js    # Implementación del algoritmo de elipse
│   │   ├── ellipse-base.js         # Funcionalidades base
│   │   ├── ellipse-canvas.js       # Manejo del canvas de dibujo
│   │   ├── ellipse-tables.js       # Generación de tablas de datos
│   │   └── ellipse-ui.js           # Manejo de la interfaz de usuario
│   │
│   └── 📂 modules/                     # Funcionalidades modulares de la página principal
│       ├── fileLoader.js            # Cargador de archivos de los ejercicios
│       └── tabs.js                  # Sistema de pestañas
│   
├── 📚 ejercicios/                   # Implementaciones prácticas
│   ├── 📂 ejercicio1/                  # Línea con interpolación RGB
│   │   ├── ejercicio-1.py           # Código fuente principal   
│   │   └── demo_ejercicio-1_H264.mp4     # Video demostrativo 
│   │
│   ├── 📂 ejercicio2/                  # Algoritmo de elipse
│   │   ├── ejercicio-2.py           # Código fuente del algoritmo
│   │   ├── ejercicio_2.py           # Versión fuente del programa del video demostrativo
│   │   └── midpoint_circle_algorithm_animation_full.gif 	#Imagen de la explicación
│   │
│   ├── 📂 ejercicio3/                  # Análisis de circunferencias
│   │   ├── ejercicio-3.cpp          # Código fuente principal
│   │   ├── ejercicio_3.exe          # Ejecutable compilado
│   │   └── demo_ejercicio-3_H264.mp4     # Video demostrativo optimizado
│   │
│   └── 📂 ejercicio4/                  # Generador de flores
│       ├── ejercicio-4.py           # Código fuente principal
│       └── demo_ejercicio-4_H264.mp4     # Video demostrativo
│
└── 📄 pages/                         # Páginas web interactivas
    └── ellipse.html                # Página interactiva del algoritmo de elipse
└── 
```

## 🚀 Cómo Usar

### Aplicaciones Interactivas

**Requisitos:**

- Python 3.7+
- Pygame (`pip install pygame`)
- pygame_gui (`pip install pygame-gui`)

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

### Generación de Patrones Florales

- **Ventajas:** Creación de figuras complejas con patrones repetitivos
- **Aplicación:** Gráficos generativos, visualización de datos
- **Complejidad:** O(n²) donde n es el tamaño del patrón

## 🔧 Tecnologías Utilizadas

| Tecnología          | Uso                         | Ejercicio |
| -------------------- | --------------------------- | --------- |
| **Python**     | Implementación interactiva | 1, 2      |
| **C++**        | Cálculo eficiente          | 3         |
| **Pygame**     | Gráficos 2D                | 1, 2      |
| **HTML5/CSS3** | Interfaz educativa          | Web       |
| **JavaScript** | Funcionalidad web           | Web       |

## 👨‍🏫 Créditos

**Desarrollado para:**

- Curso de Computación Gráfica
- Universidad UGMA
- Año académico 2025-II

**Características Implementadas:**

- ✅ Implementaciones funcionales y documentadas
- ✅ Interfaces gráficas intuitivas
- ✅ Código fuente comentado
- ✅ Recursos multimedia educativos

---

*Este proyecto demuestra la aplicación práctica de conceptos teóricos de gráficos por computadora mediante implementaciones concretas y herramientas educativas interactivas.*
