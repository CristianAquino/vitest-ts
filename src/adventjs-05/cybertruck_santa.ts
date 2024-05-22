// Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

// . = Carretera
// S = Trineo de Santa
// * = Barrera abierta
// | = Barrera cerrada
// Ejemplo de carretera: S...|....|.....

// Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

// Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

// Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

function cyberReindeer(road: string, time: number) {
  if (typeof road !== "string") throw new Error("road is not a string");
  if (typeof time !== "number") throw new Error("time is not a number");

  road = road.replace("S", ".");
  const roadLen = road.length;
  const timeOpenBarrier = 5;
  let pivot = 0;
  const result: string[] = [];
  for (let i = 0; i < time; i++) {
    if (i === timeOpenBarrier) road = road.replaceAll("|", "*");
    if (road[pivot] !== "|") pivot += 1;
    const start = road.substring(0, pivot - 1);
    const end = road.substring(pivot, roadLen);
    result.push(`${start}S${end}`);
  }
  return result;
}

export { cyberReindeer };
