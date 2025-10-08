import pygame
import sys

# --- Parámetros de la Elipse ---
XC = 400     # Coordenada X del centro
YC = 300     # Coordenada Y del centro
RX = 200     # Semieje mayor (radio en X, 'a')
RY = 100     # Semieje menor (radio en Y, 'b')

# --- Configuración de PygameEEEEE ---
ANCHO = 800
ALTO = 600
COLOR_FONDO = (0, 0, 0)      # Negro
COLOR_PIXEL = (0, 0, 255) # Blanco

# Inicializar Pygame
pygame.init()
pantalla = pygame.display.set_mode((ANCHO, ALTO))
pygame.display.set_caption("Algoritmo del Punto Medio para la Elipse")


def draw_ellipse_points(pantalla, xc, yc, x, y, color):
    # Cuadrante I (+x, +y)
    pantalla.set_at((xc + x, yc + y), (255, 0, 0))
    # Cuadrante II (-x, +y)
    pantalla.set_at((xc - x, yc + y), (0, 255, 0))
    # Cuadrante III (-x, -y)
    pantalla.set_at((xc - x, yc - y), color)
    # Cuadrante IV (+x, -y)
    pantalla.set_at((xc + x, yc - y), (255, 255, 255))

def put_pixel(x,y):
    pantalla.set_at((x, y), COLOR_PIXEL)

def draw_circle(cx, cy, r):
    x = 0
    y = -r
    p = -r

    while x < -y :
        if p > 0:
            y += 1
            p += 2 * (x + y) + 1
        
        else:
            p += 2*x+1
        
        put_pixel(cx + x, cy + y)
        put_pixel(cx - x, cy + y)
        put_pixel(cx + x, cy - y)
        put_pixel(cx - x, cy - y)

        put_pixel(cx + y, cy + x)
        put_pixel(cx + y, cy - x)
        put_pixel(cx - y, cy + x)
        put_pixel(cx - y, cy - x)

        x+=1

def mid_point_ellipse(pantalla, xc, yc, rx, ry, color):
    rx2 = pow(rx, 2)
    ry2 = pow(ry, 2)
    
    x = 0
    y = ry
    
    two_ry2_x = 0
    two_rx2_y = 2 * rx2 * ry

    P1 = ry2 - (rx2 * ry) + (0.25 * rx2)
    
    while two_ry2_x < two_rx2_y:
        x += 1
        two_ry2_x += 2 * ry2
        
        if P1 < 0:
            P1 += two_ry2_x + ry2
        else:
            y -= 1
            two_rx2_y -= 2 * rx2
            P1 += two_ry2_x - two_rx2_y + ry2
            
        draw_ellipse_points(pantalla, xc, yc, x, y, color)

    P2 = (ry2 * pow(x + 0.5, 2)) + (rx2 * pow(y - 1, 2)) - (rx2 * ry2)
    
    while y > 0:
        y -= 1
        two_rx2_y -= 2 * rx2
        
        if P2 > 0:
            P2 += rx2 - two_rx2_y

        else:
            x += 1
            two_ry2_x += 2 * ry2
            P2 += two_ry2_x - two_rx2_y + rx2
            
        draw_ellipse_points(pantalla, xc, yc, x, y, color)


# --- Bucle Principal de Pygame ---
def main():
    pantalla.fill(COLOR_FONDO)
    
    # draw_circle(400,300,200)
    mid_point_ellipse(pantalla, XC, YC, RX, RY, COLOR_PIXEL)
    pygame.display.flip() 
    
    while True:
        for evento in pygame.event.get():
            if evento.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

if __name__ == "__main__":
    main()