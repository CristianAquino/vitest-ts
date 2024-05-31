// ¡Tenemos problemas con la carga de los juguetes en el trineo 🛷 de Santa 🎅! Parece que la distribución de los juguetes no es la adecuada y el trineo no puede despegar. ¿Podrías ayudarnos a resolver este problema?

// Para solucionarlo hemos decidido utilizar un método similar al de un filtro de imágenes. En cada posición, vamos a distribuir la carga de los juguetes en función del número de juguetes de las posiciones vecinas.

// Una posición vecina es aquella que está encima, abajo, a la izquierda o a la derecha de la posición actual. Por lo tanto, no se consideran vecinas las posiciones en diagonal.

// Escribe una función distributeGifts que reciba una matriz de números representando los juguetes en el trineo y devuelva otra matriz con el mismo tamaño y número de elementos pero donde cada elemento es el promedio de su valor original y los valores de sus vecinos.

// Ten en cuenta que hay posiciones que son null y que no contarán para el promedio como vecino pero sí se sustituirá por el valor promedio de sus vecinos.

function distributeGifts(weights: number[][]) {
  if (!Array.isArray(weights)) throw new Error("weights is not a array");
  if (
    !weights.every(
      (ele) =>
        Array.isArray(ele) &&
        ele.every((st) => typeof st === "number" || st === null)
    )
  )
    throw new Error("the array has elements that are not a numbers");
  const pos = [] as number[][];
  for (const [i, row] of weights.entries()) {
    for (const [j, ele] of row.entries()) {
      let s = 0;
      let c = 0;
      if (weights[i - 1]) {
        if (typeof weights[i - 1][j] == "number") {
          c += 1;
          s += weights[i - 1][j];
        }
      }
      if (weights[i]) {
        if (typeof weights[i][j - 1] == "number") {
          c += 1;
          s += weights[i][j - 1];
        }
        if (typeof weights[i][j] == "number") {
          c += 1;
          s += weights[i][j];
        }
        if (typeof weights[i][j + 1] == "number") {
          c += 1;
          s += weights[i][j + 1];
        }
      }
      if (weights[i + 1]) {
        if (typeof weights[i + 1][j] == "number") {
          c += 1;
          s += weights[i + 1][j];
        }
      }
      if (s > 0 && c > 0) {
        pos.push([i, j, Math.round(s / c)]);
      }
    }
  }
  for (const [i, j, v] of pos) {
    weights[i][j] = v;
  }
  return weights;
}

export { distributeGifts };
