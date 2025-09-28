export const EJERCICIO_1 = `
import pygame
import sys

# Inicializar Pygame
pygame.init()

# Configurar la ventana
WIDTH, HEIGHT = 800, 800
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Ejercicio 01")

# Colores iniciales y finales
RED = (255, 0, 0)
MAGENTA = (255, 0, 255)

# Puntos de la línea
x1, y1 = 100, 100
x2, y2 = 700, 700

# Grosor inicial y final
min_thickness = 3
max_thickness = 20


# Algoritmo DDA
def draw_dda_line(x1, y1, x2, y2):
    # Calcular diferencias
    dx = x2 - x1
    dy = y2 - y1

    # Calcular pasos (usamos la mayor diferencia)
    steps = max(abs(dx), abs(dy))

    if steps == 0:
        return

    # Incrementos por paso
    x_inc = dx / steps
    y_inc = dy / steps

    # Inicializar coordenadas
    x, y = x1, y1

    # Dibujar píxeles
    for i in range(steps + 1):
        # Interpolación de color (solo cambia B de 0 a 255)
        b_value = int(255 * (i / steps))  # De 0 a 255
        color = (255, 0, b_value)

        # Interpolación de grosor
        thickness = min_thickness + (max_thickness - min_thickness) * (i / steps)

        # Dibujar un círculo en cada punto para simular grosor
        pygame.draw.circle(screen, color, (int(x), int(y)), int(thickness))

        # Avanzar al siguiente píxel
        x += x_inc
        y += y_inc


# Fondo blanco
screen.fill((155, 155, 155))

# Dibujar la línea
draw_dda_line(x1, y1, x2, y2)

# Actualizar pantalla
pygame.display.flip()

# Bucle principal
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

# Cerrar Pygame
pygame.quit()
sys.exit()
`;

export default EJERCICIO_1;