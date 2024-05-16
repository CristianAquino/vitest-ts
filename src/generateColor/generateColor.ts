function generateColor() {
  const lake = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let pos = Math.floor(Math.random() * 16);
    color += lake.charAt(pos);
  }
  return color;
}

export { generateColor };
