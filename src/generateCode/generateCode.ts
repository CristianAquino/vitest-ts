function generateCode() {
  const lake = "abcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  let value = true;
  while (value) {
    let letter = lake.charAt(Math.floor(Math.random() * (lake.length - 1)));
    if (!code.includes(letter)) {
      code += letter;
    }
    if (code.length === 6) {
      value = false;
    }
  }
  return code.toLocaleUpperCase();
}

export { generateCode };
