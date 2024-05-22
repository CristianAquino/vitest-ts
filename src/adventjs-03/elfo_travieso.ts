// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

function findNaughtyStep(original: string, modified: string) {
  if (typeof original !== "string") throw new Error("original is not a string");
  if (typeof modified !== "string") throw new Error("modified is not a string");

  if (original.length == modified.length) return "";
  if (original.length == 0) return modified.charAt(0);

  return original.length < modified.length
    ? original.split("").find((ele, index) => modified.charAt(index) !== ele) ??
        modified[modified.length - 1]
    : original.split("").find((ele, index) => modified.charAt(index) !== ele) ??
        original[original.length - 1];
}

export { findNaughtyStep };
