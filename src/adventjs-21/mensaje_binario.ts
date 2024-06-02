// Los elfos están recibiendo mensajes binarios extraños desde Marte 🪐. ¿Los extraterrestres están tratando de comunicarse con ellos? 👽

// El mensaje que llega es un array de 0s y 1s. Parece que han encontrado un patrón… Para asegurarse, quieren encontrar el segmento más largo de la cadena donde el número de 0s y 1s sea igual.

// findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

function findBalancedSegment(message: number[]) {
  if (!Array.isArray(message)) throw new Error("message is not a array");
  if (!message.every((ele) => typeof ele === "number"))
    throw new Error("the array has elements that are not a numbers");
  if (!message.every((ele) => ele === 0 || ele === 1))
    throw new Error("the array has elements that are different from 0 and 1");

  let max = 0;
  const pos = [0, 0];
  for (let i = 0; i < message.length - 1; i++) {
    for (let j = i + 1; j < message.length; j++) {
      let nuevo = message.slice(i, j + 1);
      const ja = Object.groupBy(nuevo, (ele) => ele);
      if (ja["0"].length == ja["1"].length) {
        if (j - i > max) {
          pos[0] = i;
          pos[1] = j;
          max = j - i;
        }
      }
    }
  }
  if (max == 0) return [];
  return pos;
}

export { findBalancedSegment };
