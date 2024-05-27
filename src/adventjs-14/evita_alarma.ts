// Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se despierten mientras él está repartiendo regalos en sus casos, usen el móvil para grabarlo y se haga viral en TikTok.

// Quiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes, por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.

// Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa, tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en una noche sin activar ninguna alarma.

function maxGifts(houses: number[]) {
  if (!Array.isArray(houses)) throw new Error("houses is not a array");
  if (!houses.every((ele) => typeof ele === "number"))
    throw new Error("the array has elements that are not a number");
  if (!houses.every((ele) => ele > 0))
    throw new Error("the array has negative elements o 0");

  let first = 0;
  let second = 0;
  let aux: number;

  for (const house of houses) {
    aux = [second, first][+(first > second)];

    first = second + house;
    second = aux;
  }

  return [second, first][+(first > second)];
}

export { maxGifts };
