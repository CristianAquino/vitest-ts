import { describe, expect, it } from "vitest";
import { manufacture } from "./ponemos_marcha_fabrica";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(manufacture).toBeTypeOf("function");
  });

  it("it should give an error if the first parameter is not a array", () => {
    expect(() => manufacture(2)).toThrow();
  });

  it("it should give an error if the second parameter is not a string", () => {
    expect(() => manufacture(2, 3)).toThrow();
  });

  it("should return an error if the array is not just string", () => {
    expect(() => manufacture([1, "a"], "a")).toThrow();
  });

  it("should return a array", () => {
    expect(manufacture(["tren", "oso", "pelota"], "tronesa")).toBeTypeOf(
      "object"
    );
  });

  it("should return a length of 2 because there are materials to make toys", () => {
    expect(manufacture(["tren", "oso", "pelota"], "tronesa")).length(2);
  });
});
