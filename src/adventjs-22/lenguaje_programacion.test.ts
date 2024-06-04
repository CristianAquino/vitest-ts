import { describe, expect, it } from "vitest";
import { compile } from "./lenguaje_programacion";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(compile).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a string", () => {
    expect(() => compile(2)).toThrow("code is not a string");
  });

  it("it should return an error if the elements of the string are not '+*-%<¿?'", () => {
    expect(() => compile("++a")).toThrow(
      "the string has elements that are not a '+*-%<¿?'"
    );
  });

  it("should return a number", () => {
    expect(compile("++%++<")).toBeTypeOf("number");
  });

  it("should return as result 6", () => {
    expect(compile("++%++<")).toBe(6);
  });
});
