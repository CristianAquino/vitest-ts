// En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo. Cada intervalo se representa como un array de dos elementos, donde el primer elemento es el inicio del alquiler y el segundo es el final.

// Por ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y termina en la hora 7. El problema es que a veces los intervalos se superponen entre sí, haciendo que sea un lío entender de qué hora a qué hora se alquiló el trineo.

// Nos piden que, para simplificar la tarea de calcular el tiempo total de alquiler, escribamos una función que fusione todos los intervalos superpuestos y devolver un array de intervalos ordenados:

function optimizeIntervals(intervals: number[][]) {
  if (!Array.isArray(intervals)) throw new Error("intervals is not a array");
  if (
    !intervals.every(
      (ele) => Array.isArray(ele) && ele.every((num) => typeof num === "number")
    )
  )
    throw new Error("the array has elements that are not a number");
  intervals.forEach((ele) => {
    if (!ele.every((num) => num > 0))
      throw new Error("the array has negative elements");
  });

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (const val of intervals) {
    const [start, end] = val;
    const max = result[result.length - 1][1];

    start > max
      ? result.push(val)
      : (result[result.length - 1][1] = Math.max(end, max));
  }

  return result;
}

export { optimizeIntervals };
