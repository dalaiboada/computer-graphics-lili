export const EJERCICIO_3 = 
` 
// Algoritmo fractal floral
function createFlowerFractal(x, y, baseRadius, depth, maxDepth) {
  if (depth > maxDepth) return;
    
  // Dibujar círculo base
  drawCircle(x, y, baseRadius);
    
  // Dibujar pétalos (elipses rotadas)
  const petals = 6;
  for (let i = 0; i < petals; i++) {
    const angle = (i * 2 * Math.PI) / petals;
    const petalX = x + Math.cos(angle) * baseRadius * 1.5;
    const petalY = y + Math.sin(angle) * baseRadius * 1.5;
        
    drawEllipse(petalX, petalY, baseRadius * 0.6, baseRadius * 0.3, angle);
        
    // Llamada recursiva para cada pétalo
    createFlowerFractal(petalX, petalY, baseRadius * 0.4, depth + 1, maxDepth);
  }
}
`;

export default EJERCICIO_3;