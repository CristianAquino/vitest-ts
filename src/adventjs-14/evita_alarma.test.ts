import { describe, expect, it } from "vitest";
import { maxGifts } from "./evita_alarma";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(maxGifts).toBeTypeOf("function");
  });

  it("it should return an error if the  parameter is not a array", () => {
    expect(() => maxGifts(2)).toThrow("houses is not a array");
  });

  it("It should return an error if the elements of the array are not numbers", () => {
    expect(() => maxGifts(["a"])).toThrow(
      "the array has elements that are not a number"
    );
  });

  it("should return an error if the array has negative numbers o '0'", () => {
    expect(() => maxGifts([4, -1])).toThrow("the array has negative elements");
  });

  it("should return a number", () => {
    expect(maxGifts([4, 1, 1, 4, 2, 1])).toBeTypeOf("number");
  });

  it("should return '9' as a result", () => {
    expect(maxGifts([4, 1, 1, 4, 2, 1])).toBe(9);
  });
});
