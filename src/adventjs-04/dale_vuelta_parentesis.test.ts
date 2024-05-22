import { describe, expect, it } from "vitest";
import { decode } from "./dale_vuelta_parentesis";

describe("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(decode).toBeTypeOf("function");
  });

  it("it should give an error if the parameter is not a string", () => {
    expect(() => decode(2)).toThrow();
  });

  it("should return a string", () => {
    expect(decode("hola (odnum)")).toBeTypeOf("string");
  });

  it("Should return the same string if it does not have parentheses", () => {
    expect(decode("hola")).toBe("hola");
  });

  it("should return a modified string if the word contains parentheses", () => {
    expect(decode("(odnum)")).toBe("mundo");
  });
});
