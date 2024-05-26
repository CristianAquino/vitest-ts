import { describe, expect, it } from "vitest";
import { createChristmasTree } from "./crea_propio_arbol_navidad";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(createChristmasTree).toBeTypeOf("function");
  });

  it("it should return an error if the first parameter is not a string", () => {
    expect(() => createChristmasTree(2)).toThrow("ornaments is not a string");
  });

  it("it should return an error if the second parameter is not a number", () => {
    expect(() => createChristmasTree("123")).toThrow("height is not a number");
  });

  it("should return a string", () => {
    expect(createChristmasTree("123", 4)).toBeTypeOf("string");
  });

  it("must return a string ending with '|'", () => {
    expect(createChristmasTree("123", 4)).match(/\|$/g);
  });

  it("A Christmas tree with '123' and 4-story decorations must return", () => {
    expect(createChristmasTree("123", 4)).toBe(`   1
  1 2
 1 2 3
1 2 3 1
   |`);
  });
});
