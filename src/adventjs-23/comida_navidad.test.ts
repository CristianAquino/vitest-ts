import { describe, expect, it } from "vitest";
import { organizeChristmasDinner } from "./comida_navidad";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(organizeChristmasDinner).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a array", () => {
    expect(() => organizeChristmasDinner(2)).toThrow("dishes is not a array");
  });

  it("it should return an error if the elements of the array are not alphabet", () => {
    expect(() =>
      organizeChristmasDinner([
        ["christmas turkey", "turkey", "sauce", "herbs", 1],
      ])
    ).toThrow("the string has elements that are not a alphabet");
  });

  it("should return a array", () => {
    expect(
      organizeChristmasDinner([
        ["christmas turkey", "turkey", "sauce", "herbs"],
        ["cake", "flour", "sugar", "egg"],
        ["hot chocolate", "chocolate", "milk", "sugar"],
        ["pizza", "sauce", "tomato", "cheese", "ham"],
      ])
    ).toBeTypeOf("object");
  });

  it("should return an array of array with the ingredient and the dishes", () => {
    expect(
      organizeChristmasDinner([
        ["christmas turkey", "turkey", "sauce", "herbs"],
        ["cake", "flour", "sugar", "egg"],
        ["hot chocolate", "chocolate", "milk", "sugar"],
        ["pizza", "sauce", "tomato", "cheese", "ham"],
      ])
    ).toEqual([
      ["sauce", "christmas turkey", "pizza"],
      ["sugar", "cake", "hot chocolate"],
    ]);
  });
});
