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

