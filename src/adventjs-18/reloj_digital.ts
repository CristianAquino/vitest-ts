// En la fábrica de juguetes, los elfos están programando un reloj digital para mantenerse en horario con la producción de regalos. Sin embargo, se han encontrado con un desafío de programación interesante. Necesitan una función que, dada una hora en formato 'HH:MM', cree una representación visual de esta hora en un reloj digital devolviendo un array de arrays de caracteres.

// La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocupa 7 filas y 3 columnas. Los dígitos están compuestos por asteriscos (*) y espacios en blanco (). Entre cada dígito hay una columna vacía.

// Los dos puntos para separar horas y minutos se dibujan usando dos asteríscos (*) y siempre se colocan en la misma posición, en las filas 2 y 4, en la columna 9, respectivamente (nota: la indexación de filas y columnas comienza en 0).

function drawClock(time: string) {
  if (typeof time !== "string") throw new Error("time is not a string");
  if (time.match(/[a-z]/i)) throw new Error("the string has letters elements");

  const nums = {
    "0": ["***", "* *", "* *", "* *", "* *", "* *", "***"],
    "1": ["  *", "  *", "  *", "  *", "  *", "  *", "  *"],
    "2": ["***", "  *", "  *", "***", "*  ", "*  ", "***"],
    "3": ["***", "  *", "  *", "***", "  *", "  *", "***"],
    "4": ["* *", "* *", "* *", "***", "  *", "  *", "  *"],
    "5": ["***", "*  ", "*  ", "***", "  *", "  *", "***"],
    "6": ["***", "*  ", "*  ", "***", "* *", "* *", "***"],
    "7": ["***", "  *", "  *", "  *", "  *", "  *", "  *"],
    "8": ["***", "* *", "* *", "***", "* *", "* *", "***"],
    "9": ["***", "* *", "* *", "***", "  *", "  *", "***"],
    ":": [" ", " ", "*", " ", "*", " ", " "],
    s: [" ", " ", " ", " ", " ", " ", " "],
  };
  const [h1, h2, d, m1, m2] = time.split("");
  const digital = [];
  for (let i = 0; i < 7; i++) {
    let a = [
      nums[h1][i] +
        nums["s"][i] +
        nums[h2][i] +
        nums["s"][i] +
        nums[d][i] +
        nums["s"][i] +
        nums[m1][i] +
        nums["s"][i] +
        nums[m2][i],
    ];
    digital.push(a);
  }
  return digital;
}

export { drawClock };
