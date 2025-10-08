# Algoritmo de DDA para Línea con interpolacion

import pygame
import sys
import pygame_gui

# Inicializar Pygame
pygame.init()

# Configurar la ventana
WIDTH, HEIGHT = 1300, 900
PANEL_WIDTH = 250  # Ancho del panel de entrada
DRAW_AREA_X = PANEL_WIDTH  # Área de dibujo comienza después del panel
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Ejercicio 01")
manager = pygame_gui.UIManager((WIDTH, HEIGHT))

# Crear panel de entrada
panel_rect = pygame.Rect(0, 0, PANEL_WIDTH, HEIGHT)
panel = pygame.Surface((PANEL_WIDTH, HEIGHT))
panel.fill((200, 200, 200))

# Elementos de la interfaz con más espacio
y_offset = 30
r_entry = pygame_gui.elements.UITextEntryLine(
    relative_rect=pygame.Rect(10, y_offset, 230, 35), manager=manager)
r_entry.set_text("255")
y_offset += 60
g_entry = pygame_gui.elements.UITextEntryLine(
    relative_rect=pygame.Rect(10, y_offset, 230, 35), manager=manager)
g_entry.set_text("0")
y_offset += 60
b_entry = pygame_gui.elements.UITextEntryLine(
    relative_rect=pygame.Rect(10, y_offset, 230, 35), manager=manager)
b_entry.set_text("255")
y_offset += 60
x1_entry = pygame_gui.elements.UITextEntryLine(
    relative_rect=pygame.Rect(10, y_offset, 230, 35), manager=manager)
x1_entry.set_text("100")
y_offset += 60
y1_entry = pygame_gui.elements.UITextEntryLine(
    relative_rect=pygame.Rect(10, y_offset, 230, 35), manager=manager)
y1_entry.set_text("100")
y_offset += 60
x2_entry = pygame_gui.elements.UITextEntryLine(
    relative_rect=pygame.Rect(10, y_offset, 230, 35), manager=manager)
x2_entry.set_text("900")
y_offset += 60
y2_entry = pygame_gui.elements.UITextEntryLine(
    relative_rect=pygame.Rect(10, y_offset, 230, 35), manager=manager)
y2_entry.set_text("800")
y_offset += 60
thickness_entry = pygame_gui.elements.UITextEntryLine(
    relative_rect=pygame.Rect(10, y_offset, 230, 35), manager=manager)
thickness_entry.set_text("20")
y_offset += 60
draw_button = pygame_gui.elements.UIButton(
    relative_rect=pygame.Rect(10, y_offset, 230, 35),
    text="Dibujar Línea",
    manager=manager
)

# Etiquetas en español con posiciones ajustadas
labels = [
    ("Rojo (0-255):", (10, 10)),
    ("Verde (0-255):", (10, 70)),
    ("Azul (0-255):", (10, 130)),
    ("X1 (50-1050):", (10, 190)),
    ("Y1 (50-850):", (10, 250)),
    ("X2 (50-1050):", (10, 310)),
    ("Y2 (50-850):", (10, 370)),
    ("Grosor (1-20):", (10, 430))
]

# Algoritmo DDA
def draw_dda_line(x1, y1, x2, y2, color, thickness):
    dx = x2 - x1
    dy = y2 - y1
    steps = max(abs(dx), abs(dy))
    
    if steps == 0:
        return
    
    x_inc = dx / steps
    y_inc = dy / steps
    x, y = x1, y1
    
    for i in range(steps + 1):
        # Ajustar coordenadas para el área de dibujo
        draw_x = x + DRAW_AREA_X
        if PANEL_WIDTH <= draw_x <= WIDTH and 0 <= y <= HEIGHT:
            pygame.draw.circle(screen, color, (int(draw_x), int(y)), int(thickness))
        x += x_inc
        y += y_inc

# Validar entradas
def validate_inputs(r, g, b, x1, y1, x2, y2, thickness):
    try:
        r, g, b = int(r), int(g), int(b)
        x1, y1 = int(x1), int(y1)
        x2, y2 = int(x2), int(y2)
        thickness = int(thickness)
        
        # Validar rangos
        if not (0 <= r <= 255 and 0 <= g <= 255 and 0 <= b <= 255):
            return False, "Los valores RGB deben estar entre 0 y 255"
        if not (50 <= x1 <= WIDTH - PANEL_WIDTH - 50 and 50 <= x2 <= WIDTH - PANEL_WIDTH - 50):
            return False, "Coordenadas X deben estar entre 50 y 1050"
        if not (50 <= y1 <= HEIGHT - 50 and 50 <= y2 <= HEIGHT - 50):
            return False, "Coordenadas Y deben estar entre 50 y 850"
        if not (1 <= thickness <= 20):
            return False, "El grosor debe estar entre 1 y 20"
        
        return True, (r, g, b, x1, y1, x2, y2, thickness)
    except ValueError:
        return False, "Todas las entradas deben ser números válidos"

# Fondo inicial
screen.fill((155, 155, 155))

# Bucle principal
clock = pygame.time.Clock()
running = True
error_message = ""
while running:
    time_delta = clock.tick(60) / 1000.0
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        
        if event.type == pygame_gui.UI_BUTTON_PRESSED:
            if event.ui_element == draw_button:
                valid, result = validate_inputs(
                    r_entry.get_text(),
                    g_entry.get_text(),
                    b_entry.get_text(),
                    x1_entry.get_text(),
                    y1_entry.get_text(),
                    x2_entry.get_text(),
                    y2_entry.get_text(),
                    thickness_entry.get_text()
                )
                
                if valid:
                    # Limpiar solo el área de dibujo
                    screen.fill((155, 155, 155), (PANEL_WIDTH, 0, WIDTH - PANEL_WIDTH, HEIGHT))
                    r, g, b, x1, y1, x2, y2, thickness = result
                    draw_dda_line(x1, y1, x2, y2, (r, g, b), thickness)
                    error_message = ""
                else:
                    error_message = result
        
        manager.process_events(event)
    
    manager.update(time_delta)
    
    # Dibujar panel
    screen.blit(panel, (0, 0))
    
    # Dibujar etiquetas
    font = pygame.font.Font(None, 28)
    for text, pos in labels:
        label = font.render(text, True, (0, 0, 0))
        screen.blit(label, pos)
    
    # Dibujar mensaje de error si existe
    if error_message:
        error_text = font.render(error_message, True, (255, 0, 0))
        screen.blit(error_text, (10, HEIGHT - 40))
    
    manager.draw_ui(screen)
    pygame.display.flip()

# Cerrar Pygame
pygame.quit()
sys.exit()