#include <iostream>
#include <vector>
#include <cmath>
#include <cstdlib> // Necesario para la función system()
using namespace std;

struct Punto {
    double x, y;
};

bool sonColineales(Punto a, Punto b, Punto c) {
    double area = a.x * (b.y - c.y) +
                  b.x * (c.y - a.y) +
                  c.x * (a.y - b.y);
    return fabs(area) < 1e-6;
}

void calcularCentroYRadio(Punto a, Punto b, Punto c, Punto& centro, double& radio) {
    double D = 2 * (a.x*(b.y - c.y) + b.x*(c.y - a.y) + c.x*(a.y - b.y));
    
    centro.x = ((a.x*a.x + a.y*a.y)*(b.y - c.y) +
                (b.x*b.x + b.y*b.y)*(c.y - a.y) +
                (c.x*c.x + c.y*c.y)*(a.y - b.y)) / D;

    centro.y = ((a.x*a.x + a.y*a.y)*(c.x - b.x) +
                (b.x*b.x + b.y*b.y)*(a.x - c.x) +
                (c.x*c.x + c.y*c.y)*(b.x - a.x)) / D;

    radio = sqrt((a.x - centro.x)*(a.x - centro.x) + (a.y - centro.y)*(a.y - centro.y));
}

bool perteneceALaCircunferencia(Punto p, Punto centro, double radio) {
    double distancia = sqrt((p.x - centro.x)*(p.x - centro.x) + (p.y - centro.y)*(p.y - centro.y));
    return fabs(distancia - radio) < 1e-6;
}

int main() {
    int n;
    cout << "Ingrese el número de puntos: ";
    cin >> n;

    if (n < 3) {
        cout << "Se necesitan al menos 3 puntos para definir una circunferencia.\n";
        return 0;
    }

    vector<Punto> puntos(n);
    for (int i = 0; i < n; ++i) {
        cout << "Punto " << i+1 << " (x y): ";
        cin >> puntos[i].x >> puntos[i].y;
    }

    if (sonColineales(puntos[0], puntos[1], puntos[2])) {
        cout << "Los primeros tres puntos son colineales. No se puede definir una circunferencia.\n";
        return 0;
    }

    Punto centro;
    double radio;
    calcularCentroYRadio(puntos[0], puntos[1], puntos[2], centro, radio);

    bool todosEnCircunferencia = true;
    for (int i = 3; i < n; ++i) {
        if (!perteneceALaCircunferencia(puntos[i], centro, radio)) {
            todosEnCircunferencia = false;
            break;
        }
    }

    if (todosEnCircunferencia) {
        cout << "Todos los puntos pertenecen a una misma circunferencia.\n";
        cout << "Centro: (" << centro.x << ", " << centro.y << ")\n";
        cout << "Radio: " << radio << endl;
    } else {
        cout << "No todos los puntos pertenecen a una misma circunferencia.\n";
    }

	system("pause");  
    return 0;
}
