function generateSlug(text: string) {
  if (typeof text !== "string") throw new Error("text is not a string");
  const slug = text
    .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
  return slug;
}

export { generateSlug };
