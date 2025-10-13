import tkinter as tk

def crear_input(parent, texto, valor_por_defecto, fila, columna):
    # Crear etiqueta
    tk.Label(parent, text=texto).grid(row=fila, column=columna, sticky="e", padx=(0, 5))

    # Crear campo de entrada
    entry = tk.Entry(parent, width=10)
    entry.grid(row=fila, column=columna + 1, padx=5, pady=2)
    entry.insert(0, valor_por_defecto)

    return entry

def dibujar_pixel(x, y):
    canvas.create_oval(x, y, x + 1, y + 1, fill="blue", outline="")

def limpiar_pantalla():
    canvas.delete("all")

def dibujar_elipse():
    limpiar_pantalla()

    try:
        # Obtener valores de los inputs
        rx = int(entry_rx.get())
        ry = int(entry_ry.get())
        cx = int(entry_cx.get())
        cy = int(entry_cy.get())
    except ValueError:
        return

    # Algoritmo del punto medio para elipses
    x = 0
    y = ry

    # Región 1
    dx = 2 * ry * ry * x
    dy = 2 * rx * rx * y
    p1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx)

    while dx < dy:
        dibujar_pixel(cx + x, cy + y)
        dibujar_pixel(cx - x, cy + y)
        dibujar_pixel(cx + x, cy - y)
        dibujar_pixel(cx - x, cy - y)

        x += 1
        dx = 2 * ry * ry * x

        if p1 < 0:
            p1 = p1 + dx + (ry * ry)
        else:
            y -= 1
            dy = 2 * rx * rx * y
            p1 = p1 + dx - dy + (ry * ry)

    # Región 2
    p2 = ((ry * ry) * ((x + 0.5) * (x + 0.5))) + \
         ((rx * rx) * ((y - 1) * (y - 1))) - \
         (rx * rx * ry * ry)

    while y >= 0:
        dibujar_pixel(cx + x, cy + y)
        dibujar_pixel(cx - x, cy + y)
        dibujar_pixel(cx + x, cy - y)
        dibujar_pixel(cx - x, cy - y)

        y -= 1
        dy = 2 * rx * rx * y

        if p2 > 0:
            p2 = p2 - dy + (rx * rx)
        else:
            x += 1
            dx = 2 * ry * ry * x
            p2 = p2 + dx - dy + (rx * rx)


# Configuración de la ventana principal
root = tk.Tk()
root.title("Dibujar Elipse - Algoritmo del Punto Medio")
root.resizable(False, False)

# Crear frame para inputs
frame = tk.Frame(root)
frame.pack(padx=10, pady=10)

# campos de entrada
entry_rx = crear_input(frame, "rx:", "100", 0, 0)
entry_ry = crear_input(frame, "ry:", "80", 0, 2)
entry_cx = crear_input(frame, "cx:", "200", 1, 0)
entry_cy = crear_input(frame, "cy:", "200", 1, 2)

# Botón para dibujar
btn_dibujar_elipse = tk.Button(root, text="Crear Elipse", command=dibujar_elipse)
btn_dibujar_elipse.pack(pady=5)

# Canvas para dibujar
canvas = tk.Canvas(root, width=400, height=400, bg="white")
canvas.pack()

root.mainloop()