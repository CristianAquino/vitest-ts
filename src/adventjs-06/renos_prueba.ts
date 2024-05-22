// Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

// Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

// > = Avanza a la derecha
// < = Avanza a la izquierda
// * = Puede avanzar o retroceder
// Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

// Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.

// En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

// Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección:

function maxDistance(movements: string) {
  if (typeof movements !== "string")
    throw new Error("movements is not a string");

  if (!movements.match(/^(\*|<|>)/))
    throw new Error("The parameter must contain only <, > or *");

  const mx = /\*/g;
  const ml = /</g;
  const mr = />/g;
  let x = movements.match(mx)?.length ?? 0;
  let l = movements.match(ml)?.length ?? 0;
  let r = movements.match(mr)?.length ?? 0;
  return Math.abs(l - r) + x;
}

export { maxDistance };
