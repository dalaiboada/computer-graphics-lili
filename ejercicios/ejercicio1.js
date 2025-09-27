export const EJERCICIO_1 = `
// Algoritmo DDA con interpolación de color

function drawLineWithColor(x1, y1, x2, y2, color1, color2, thickness) {
const points = [];
const dx = x2 - x1;
const dy = y2 - y1;
const steps = Math.max(Math.abs(dx), Math.abs(dy));
                            
// Interpolación de color
const colors = interpolateRGB(color1, color2, steps);
                            
const xInc = dx / steps;
const yInc = dy / steps;

let x = x1, y = y1;
                            
for (let i = 0; i <= steps; i++) {
  points.push({
    x: Math.round(x),
    y: Math.round(y),
    color: colors[i]
  });
    x += xInc;
    y += yInc;
  }
                            
  return applyThickness(points, thickness);
}

function interpolateRGB(color1, color2, steps) {
  const colors = [];
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;
                            
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const r = Math.round(r1 + (r2 - r1) * t);
    const g = Math.round(g1 + (g2 - g1) * t);
    const b = Math.round(b1 + (b2 - b1) * t);
    colors.push(\`rgb(\${r}, \${g}, \${b})\`);
  }
    
  return colors;
}
`;

export default EJERCICIO_1;