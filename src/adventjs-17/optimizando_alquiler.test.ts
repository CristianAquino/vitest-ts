import { describe, expect, it } from "vitest";
import { optimizeIntervals } from "./optimizando_alquiler";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(optimizeIntervals).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a array", () => {
    expect(() => optimizeIntervals(2)).toThrow("intervals is not a array");
  });

  it("It should return an error if the elements of the array are not array numbers", () => {
    expect(() => optimizeIntervals([[1, "a"]])).toThrow(
      "the array has elements that are not a number"
    );
  });

  it("should return an error if the array has negative numbers o '0'", () => {
    expect(() => optimizeIntervals([[4, -1]])).toThrow(
      "the array has negative elements"
    );
  });

  it("should return a array", () => {
    expect(
      optimizeIntervals([
        [5, 8],
        [2, 7],
        [3, 4],
      ])
    ).toBeTypeOf("object");
  });

  it("should return '9' as a result", () => {
    expect(
      optimizeIntervals([
        [5, 8],
        [2, 7],
        [3, 4],
      ])
    ).toEqual([[2, 8]]);
  });
});
