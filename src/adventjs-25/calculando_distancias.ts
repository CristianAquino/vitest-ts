// Ya ha entregado Santa Claus 🎅 todos los regalos a los niños pero quieren revisar si pueden mejorar de cara al año que viene.

// Los elfos quieren saber cuántos movimientos ha hecho Santa Claus 🛷 para entregar todos los regalos. Para ello, te dan un mapa de la ciudad con la ubicación de cada niño y de Santa.

// El mapa es una cadena de texto multi línea donde cada caracter representa una casilla. Los niños se representan por números del 1 al 9 y Santa Claus por la letra S. El resto de casillas son .

// Santa Claus sólo puede moverse hacia arriba, abajo, izquierda o derecha, y cada movimiento cuenta como 1 km. Además, siempre empieza en la posición S y debe entregar los regalos en orden, del 1 al 9.

function travelDistance(map: string) {
  if (typeof map !== "string") throw new Error("map is not a string");
  if (!map.split("\n").every((ele) => /[1-9\.S]/.test(ele)))
    throw new Error(
      "the string has elements that are not a '., S or number 1 to 9'"
    );

  const initial = [];
  const pos = [];
  let total = 0;
  map.split("\n").forEach((ele, index) => {
    let a = ele.split("");
    let b = a.findIndex((e) => e == "S");
    let c = a.findIndex((e) => /\d/.test(e));
    if (b > 0) {
      initial.push(index, b, ele[b]);
    }
    if (c > 0) {
      pos.push([index, c, ele[c]]);
    }
  });
  pos
    .sort((a, b) => a[2].localeCompare(b[2]))
    .forEach((ele) => {
      const [i, j] = ele;
      let p1 = initial[0] - i;
      let p2 = initial[1] - j;
      total += Math.abs(p1) + Math.abs(p2);
      initial[0] = i;
      initial[1] = j;
    });
  return total;
}

export { travelDistance };
