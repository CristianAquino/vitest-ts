import { describe, expect, it } from "vitest";
import { findFirstRepeated } from "./primer_regalo_repetido";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(findFirstRepeated).toBeTypeOf("function");
  });

  it("it should give an error if the parameter is not a array", () => {
    expect(() => findFirstRepeated(2)).toThrow();
  });

  it("should return an error if the array is not just numbers", () => {
    expect(() => findFirstRepeated([1, "a"])).toThrow();
  });

  it("should return a number", () => {
    expect(findFirstRepeated([1, 2, 3])).toBeTypeOf("number");
  });

  it("should return -1 if the numbers in the array are different", () => {
    expect(findFirstRepeated([1, 2, 3])).toBe(-1);
  });

  it("It should return 3 if it is the first number that is repeated in the array", () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3);
  });
});
