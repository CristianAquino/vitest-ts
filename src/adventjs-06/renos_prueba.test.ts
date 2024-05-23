import { describe, expect, it } from "vitest";
import { maxDistance } from "./renos_prueba";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(maxDistance).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a string", () => {
    expect(() => maxDistance(2)).toThrow();
  });

  it("should return an error if the parameter does not contain only <, > or *", () => {
    expect(() => maxDistance("abc")).toThrow(
      "The parameter must contain only <, > or *"
    );
  });

  it("should return a number", () => {
    expect(maxDistance(">>*<")).toBeTypeOf("number");
  });

  it("must return a number greater than or equal to 0", () => {
    expect(maxDistance(">>*<")).toBeGreaterThanOrEqual(0);
  });

  it("should return 2 with '>>*<'", () => {
    expect(maxDistance(">>*<")).toBe(2);
  });

  it("should return 5 with '>***>'", () => {
    expect(maxDistance(">***>")).toBe(5);
  });
});
