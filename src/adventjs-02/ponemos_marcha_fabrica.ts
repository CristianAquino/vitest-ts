// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts: string[], materials: string) {
  if (!Array.isArray(gifts)) throw new Error("gifts is not a array");
  if (typeof materials !== "string")
    throw new Error("materials is not a string");

  gifts.forEach((ele) => {
    if (typeof ele !== "string")
      throw new Error("gifts element is not a string");
  });

  return gifts.filter((ele) =>
    ele.split("").every((e) => materials.includes(e))
  );
}

export { manufacture };
