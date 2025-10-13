import tkinter as tk
from math import sin, cos, pi
import colorsys


def hsv_to_hex(h, s, v):

    # asegurar que h,s,v estén en rango válido
    try:
        h = float(h) % 1.0
    except Exception:
        h = 0.0
    s = min(max(float(s), 0.0), 1.0)
    v = min(max(float(v), 0.0), 1.0)

    r, g, b = colorsys.hsv_to_rgb(h, s, v)
    # clamp rgb y convertir a enteros 0..255
    r = min(max(r, 0.0), 1.0)
    g = min(max(g, 0.0), 1.0)
    b = min(max(b, 0.0), 1.0)
    return '#{:02x}{:02x}{:02x}'.format(int(r * 255), int(g * 255), int(b * 255))


def draw_flower(canvas, x, y, radius, depth, petals=8, hue=0.12):
   
    # dibujar anillos concéntricos en el centro para dar efecto floral
    # número de anillos centrales (limitado para evitar valores de brillo negativos)
    rings = max(3, min(8, int(radius // 8)))
    for i in range(rings):
        r = radius * (1 - i * 0.2)
        color = hsv_to_hex((hue + i * 0.03) % 1.0, 0.6, 0.95 - i * 0.12)
        canvas.create_oval(x - r, y - r, x + r, y + r,
                           outline=color, width=2)

    # pétalos
    for i in range(petals):
        angle = i * (2 * pi / petals)
        # centro del pétalo desplazado hacia fuera
        px = x + cos(angle) * radius * 1.6
        py = y + sin(angle) * radius * 1.6

        # dimensiones del pétalo (elipse)
        petal_w = radius * 1.6
        petal_h = radius * 0.9

        # color del pétalo
        petal_color = hsv_to_hex((hue + i * 0.08) % 1.0, 0.7, 0.9)

        # draw oval centered at (px,py)
        canvas.create_oval(px - petal_w/2, py - petal_h/2,
                           px + petal_w/2, py + petal_h/2,
                           fill=petal_color, outline='')

        # un anillo pequeño en la base del pétalo para detalle
        base_r = radius * 0.45
        base_color = hsv_to_hex((hue + 0.02) % 1.0, 0.8, 0.75)
        bx = x + cos(angle) * radius * 0.6
        by = y + sin(angle) * radius * 0.6
        canvas.create_oval(bx - base_r/2, by - base_r/2,
                           bx + base_r/2, by + base_r/2,
                           fill=base_color, outline='')

        # recursión: dibujar una flor más pequeña en la punta del pétalo
        if depth > 0:
            child_radius = radius * 0.35
            # ligeramente variar el tono y reducir la cantidad de pétalos
            child_hue = (hue + 0.06) % 1.0
            child_petals = max(4, petals - 2)
            draw_flower(canvas, px, py, child_radius, depth - 1, child_petals, child_hue)


def main():
    root = tk.Tk()
    root.title('Flor fractal - demo')

    # layout principal: canvas a la izquierda, controles a la derecha
    width, height = 900, 700
    left_w = int(width * 0.75)
    right_w = width - left_w

    root.geometry(f"{width}x{height}")

    canvas = tk.Canvas(root, width=left_w, height=height, bg='#fffdf6')
    canvas.pack(side=tk.LEFT, fill=tk.BOTH, expand=False)

    controls = tk.Frame(root, width=right_w, height=height, padx=8, pady=8)
    controls.pack(side=tk.RIGHT, fill=tk.Y)

    # valores por defecto (fáciles de cambiar)
    center_x, center_y = left_w // 2, height // 2
    default_radius = 120
    default_depth = 3
    default_petals = 9
    default_hue = 0.08

    # Variables Tk para enlazar con sliders
    var_radius = tk.IntVar(value=default_radius)
    var_depth = tk.IntVar(value=default_depth)
    var_petals = tk.IntVar(value=default_petals)

    def redraw():
        # limpiar canvas y redibujar con parámetros actuales
        canvas.delete('all')
        r = var_radius.get()
        d = var_depth.get()
        p = var_petals.get()
        draw_flower(canvas, center_x, center_y, r, d, p, default_hue)
        # texto explicativo simple
        info = f'Profundidad={d}  Pétalos={p}  Radio={r}'
        canvas.create_text(10, height - 30, anchor='w', text=info, fill='#333333', font=('Arial', 12))

    # controles: slider para radio
    tk.Label(controls, text='Radio').pack(anchor='w')
    tk.Scale(controls, from_=30, to=300, orient=tk.HORIZONTAL, variable=var_radius).pack(fill=tk.X)

    # slider para profundidad
    tk.Label(controls, text='Profundidad').pack(anchor='w', pady=(8, 0))
    tk.Scale(controls, from_=0, to=5, orient=tk.HORIZONTAL, variable=var_depth).pack(fill=tk.X)

    # slider para pétalos
    tk.Label(controls, text='Pétalos').pack(anchor='w', pady=(8, 0))
    tk.Scale(controls, from_=3, to=20, orient=tk.HORIZONTAL, variable=var_petals).pack(fill=tk.X)

    # Botones
    tk.Button(controls, text='Redibujar', command=redraw).pack(fill=tk.X, pady=(12, 6))
    tk.Button(controls, text='Cerrar', command=root.quit).pack(fill=tk.X)

    # dibujar primera vez
    redraw()

    root.mainloop()


if __name__ == '__main__':
    main()