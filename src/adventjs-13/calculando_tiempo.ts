// Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.

// Para ello te pasan un array con la duración de cada entrega. El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.

// Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.

// Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00

function calculateTime(deliveries: string[]) {
  if (!Array.isArray(deliveries)) throw new Error("deliveries is not a array");
  if (!deliveries.every((ele) => typeof ele === "string"))
    throw new Error("the array has elements that are not a string");

  let max_time = 7 * 60 * 60;
  deliveries.forEach((t) => {
    const [h, m, s] = t.split(":");
    max_time -= +h * 60 * 60 + +m * 60 + +s;
  });
  const symbol = max_time > 0 ? "-" : "";
  const s = max_time % 60;
  const m = (max_time / 60) % 60;
  const h = (max_time / 60 - m) / 60;

  return (
    symbol +
    `${h}`.padStart(2, "0") +
    ":" +
    `${m}`.padStart(2, "0") +
    ":" +
    `${s}`.padStart(2, "0")
  );
}

export { calculateTime };
