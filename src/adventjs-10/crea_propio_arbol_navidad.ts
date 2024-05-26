// ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

// Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

// Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

// Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

// Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

//    1
//   2 3
//  1 2 3
// 1 2 3 1
//    |

function createChristmasTree(ornaments: string, height: number) {
  if (typeof ornaments !== "string")
    throw new Error("ornaments is not a string");
  if (typeof height !== "number") throw new Error("height is not a number");

  let top = " ".repeat(height - 1) + ornaments[0] + "\n";
  let bottom = " ".repeat(height - 1) + "|";
  for (let i = 1; i < height; i++) {
    top +=
      " ".repeat(height - i - 1) +
      ornaments
        .repeat(i)
        .substring(0, i + 1)
        .split("")
        .join(" ") +
      "\n";
  }
  return top + bottom;
}

export { createChristmasTree };
