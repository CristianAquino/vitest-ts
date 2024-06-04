// ¡Santa 🎅 está organizando una gran cena navideña 🫓 y quiere asegurarse de que todos los platos sean únicos y variados!

// Te da una lista de platos navideños donde cada elemento consiste en una lista de strings que comienza con el nombre del plato, seguido de todos los ingredientes utilizados para su preparación.

// Tienes que escribir una función que agrupe los platos por ingredientes siempre que haya al menos 2 platos que los contengan.

// Así que devolvemos un array de arrays donde la primera posición es el nombre del ingrediente y el resto los nombres de los platos.

// Tanto la lista de ingredientes como los platos deben estar ordenados alfabéticamente.

function organizeChristmasDinner(dishes: string[][]) {
  if (!Array.isArray(dishes)) throw new Error("dishes is not a array");
  if (
    !dishes.every(
      (ele) => Array.isArray(ele) && ele.every((st) => /[a-z]/.test(st))
    )
  )
    throw new Error("the string has elements that are not a alphabet");

  const ingredients = new Map();
  for (const dish of dishes) {
    const [dishName, ...ingredientsList] = dish;
    for (const ingredient of ingredientsList) {
      if (ingredients.has(ingredient)) {
        ingredients.get(ingredient)?.push(dishName);
      } else {
        ingredients.set(ingredient, [dishName]);
      }
    }
  }
  const result = Array.from(ingredients.entries());
  result.sort((a, b) => a[0].localeCompare(b[0]));
  const valid = result.filter(([, ele]) => ele.length > 1);
  return valid.map(([ingredient, dishes]) => [ingredient, ...dishes.sort()]);
}

export { organizeChristmasDinner };
