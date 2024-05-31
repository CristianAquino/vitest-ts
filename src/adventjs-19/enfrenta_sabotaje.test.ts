import { describe, expect, it } from "vitest";
import { revealSabotage } from "./enfrenta_sabotaje";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(revealSabotage).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a array", () => {
    expect(() => revealSabotage(2)).toThrow("store is not a array");
  });

  it("it should return an error if the elements of the array are not array strings", () => {
    expect(() => revealSabotage([["a", 2]])).toThrow(
      "the array has elements that are not a strings"
    );
  });

  it("should return an error if the array contains elements other than ' ' or '*'", () => {
    expect(() => revealSabotage([["*", " ", "a"]])).toThrow(
      "the array has elements that are not a space o *"
    );
  });

  it("should return a array", () => {
    expect(
      revealSabotage([
        ["*", " ", " ", " "],
        [" ", " ", "*", " "],
        [" ", " ", " ", " "],
        ["*", " ", " ", " "],
      ])
    ).toBeTypeOf("object");
  });

  it("should return an array of arrays with the number of affected toys", () => {
    expect(
      revealSabotage([
        ["*", " ", " ", " "],
        [" ", " ", "*", " "],
        [" ", " ", " ", " "],
        ["*", " ", " ", " "],
      ])
    ).toEqual([
      ["*", "2", "1", "1"],
      ["1", "2", "*", "1"],
      ["1", "2", "1", "1"],
      ["*", "1", " ", " "],
    ]);
  });
});
