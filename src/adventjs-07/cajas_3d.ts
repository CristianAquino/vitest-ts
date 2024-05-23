// Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

// Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

// Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

function drawGift(size: number, symbol: string) {
  if (typeof size !== "number") throw new Error("size is not a number");
  if (typeof symbol !== "string") throw new Error("symbol is not a string");
  const skin = "#";
  if (size <= 1) return "#";
  const middle = size - 2;
  if (size <= 1) return `${skin}\n`;
  const box_mid = skin.repeat(size) + symbol.repeat(middle) + skin + "\n";
  let box_botton = "";
  let box_top = " ".repeat(size - 1) + skin.repeat(size) + "\n";

  for (let i = 0; i < middle; i++) {
    box_top +=
      " ".repeat(middle - i) +
      skin +
      symbol.repeat(middle) +
      skin +
      symbol.repeat(i) +
      skin +
      "\n";
  }

  for (let j = 0; j < middle; j++) {
    box_botton +=
      skin +
      symbol.repeat(middle) +
      skin +
      symbol.repeat(middle - 1 - j) +
      skin +
      "\n";
  }

  box_botton += skin.repeat(size) + "\n";

  return `${box_top}${box_mid}${box_botton}`;
}

export { drawGift };
