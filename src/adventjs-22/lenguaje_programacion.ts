// En la fábrica de juguetes de Santa, los elfos están desarrollando un lenguaje de programación llamado Santa.js 👨‍💻👩‍💻 basado en símbolos para controlar sus máquinas de juguetes 🚂.

// Han creado un sistema de instrucciones simple y necesitan tu ayuda para construir un compilador que interprete estos símbolos.

// El compilador trabaja con un contador que inicialmente tiene un valor de 0. Las instrucciones modificarán el valor de este contador.

// Instrucciones del lenguaje de los elfos en base a símbolos:

// +: Incrementa en 1 el valor del contador.
// *: Multiplica por 2 el valor del contador.
// -: Resta 1 al valor del contador.
// %: Marca un punto de retorno. No modifica el contador.
// <: Vuelve atrás una vez a la última instrucción con el símbolo % que haya visto. Si no hay un % previo, no hace nada.
// ¿: Inicia un bloque condicional que se ejecuta si el contador es mayor a 0.
// ?: Finaliza un bloque condicional.
// Crea una función compile que reciba un string con las instrucciones del lenguaje y devuelve el resultado de ejecutarlas.

// compile('++*-') // 3
// // (1 + 1) * 2 - 1 = 3

// compile('++%++<') // 6
// // 1 + 1 + 1 + 1 + 1 + 1 = 6

// compile('++<--') // 0
// // 1 + 1 - 1 - 1 = 0

// compile('++¿+?') // 3
// // 1 + 1 + 1 = 3

// compile('--¿+++?') // -2
// // - 1 - 1 = -2

function compile(code: string) {
  if (typeof code !== "string") throw new Error("code is not a string");
  if (!code.split("").every((ele) => /^[+*-<¿?%]+$/.test(ele)))
    throw new Error("the string has elements that are not a '+*-%<¿?'");

  let total = 0;
  let pos: any;
  for (let i = 0; i < code.length; i++) {
    if (code.charAt(i) == "+") total += 1;
    if (code.charAt(i) == "-") total -= 1;
    if (code.charAt(i) == "*") total *= 2;
    if (code.charAt(i) == "¿") {
      let last = code.indexOf("?");
      if (total > 0) {
        let nuevo = code.substring(i + 1, last);
        total += compile(nuevo);
      }
      i = last;
    }
    if (code.charAt(i) == "%") pos = i;
    if (code.charAt(i) == "<") {
      if (pos) {
        let nuevo = code.substring(pos + 1, i);
        total += compile(nuevo);
      }
    }
  }
  return total;
}

export { compile };
