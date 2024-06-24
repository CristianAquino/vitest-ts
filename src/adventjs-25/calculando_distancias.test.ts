import { describe, expect, it } from "vitest";
import { travelDistance } from "./calculando_distancias";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(travelDistance).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a string", () => {
    expect(() => travelDistance(2)).toThrow("map is not a string");
  });

  it("it should return an error if the elements of the string are not '., S or number 1 to 9'", () => {
    expect(() => travelDistance("")).toThrow(
      "the string has elements that are not a '., S or number 1 to 9'"
    );
  });

  it("should return a number", () => {
    expect(
      travelDistance(`.....1....
      ..S.......
      ..........
      ....3.....
      ......2...`)
    ).toBeTypeOf("number");
  });

  it("should return a total route", () => {
    expect(
      travelDistance(`.....1....
      ..S.......
      ..........
      ....3.....
      ......2...`)
    ).toBe(12);
  });
});
