```javascript
// Algoritmo de elipse por punto medio
function drawEllipseMidpoint(xc, yc, a, b) {
const points = [];
let x = 0;
let y = b;
    
// Región 1
let d1 = (b * b) - (a * a * b) + (0.25 * a * a);
    
while ((a * a * (y - 0.5)) > (b * b * (x + 1))) {
    plotEllipsePoints(xc, yc, x, y, points);
        
    if (d1 < 0) {
        d1 += b * b * (2 * x + 3);
    } 
    else {
        d1 += b * b * (2 * x + 3) + a * a * (-2 * y + 2);
        y--;
    }
    x++;
}
    
// Región 2
let d2 = (b * b * (x + 0.5) * (x + 0.5)) + 
          (a * a * (y - 1) * (y - 1)) - 
          (a * a * b * b);
    
while (y >= 0) {
    plotEllipsePoints(xc, yc, x, y, points);
        
    if (d2 < 0) {
        d2 += b * b * (2 * x + 2) + a * a * (-2 * y + 3);
        x++;
    } 
    else {
        d2 += a * a * (-2 * y + 3);
    }
    y--;
}
    
return points;
}
```