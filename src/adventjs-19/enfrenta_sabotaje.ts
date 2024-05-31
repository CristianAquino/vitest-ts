// ¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el almacén y ha saboteado algunos de los juguetes 💣.

// Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es una matriz.

// Los * representan los juguetes saboteados y las celdas vacías con un espacio en blanco son los lugares seguros.

// Tu tarea es escribir una función que devuelva la misma matriz pero, en cada posición, nos indique el número de juguetes saboteados que hay en las celdas adyacentes.

// Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda no toca ningún juguete saboteado, debe contener un espacio en blanco .

function revealSabotage(store: string[][]) {
  if (!Array.isArray(store)) throw new Error("store is not a array");
  if (
    !store.every(
      (ele) => Array.isArray(ele) && ele.every((st) => typeof st === "string")
    )
  )
    throw new Error("the array has elements that are not a strings");
  if (
    !store.every(
      (ele) => Array.isArray(ele) && ele.every((st) => /(\*|\s)/g.test(st))
    )
  )
    throw new Error("the array has elements that are not a space o *");

  for (const [i, row] of store.entries()) {
    for (const [j, ele] of row.entries()) {
      let s = 0;
      if (store[i - 1]) {
        s +=
          +(store[i - 1][j - 1] == "*" ?? false) +
          +(store[i - 1][j] == "*" ?? false) +
          +(store[i - 1][j + 1] == "*" ?? false);
      }
      if (store[i]) {
        s +=
          +(store[i][j - 1] == "*" ?? false) +
          +(store[i][j] == "*" ?? false) +
          +(store[i][j + 1] == "*" ?? false);
      }
      if (store[i + 1]) {
        s +=
          +(store[i + 1][j - 1] == "*" ?? false) +
          +(store[i + 1][j] == "*" ?? false) +
          +(store[i + 1][j + 1] == "*" ?? false);
      }
      if (s > 0 && store[i][j] != "*") {
        store[i][j] = s.toString();
      }
    }
  }
  return store;
}

export { revealSabotage };
