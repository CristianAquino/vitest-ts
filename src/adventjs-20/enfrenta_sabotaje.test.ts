import { describe, expect, it } from "vitest";
import { distributeGifts } from "./enfrenta_sabotaje";

describe("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(distributeGifts).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a array", () => {
    expect(() => distributeGifts(2)).toThrow("weights is not a array");
  });

  it("it should return an error if the elements of the array are not array numbers", () => {
    expect(() => distributeGifts([["a", 2]])).toThrow(
      "the array has elements that are not a numbers"
    );
  });

  it("should return a array", () => {
    expect(
      distributeGifts([
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4],
      ])
    ).toBeTypeOf("object");
  });

  it("should return an array of arrays with the number of affected toys", () => {
    expect(
      distributeGifts([
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4],
      ])
    ).toEqual([
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4],
    ]);
  });
});
