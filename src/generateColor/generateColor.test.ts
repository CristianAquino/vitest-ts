import { describe, expect, it } from "vitest";
import { generateColor } from "./generateColor";

describe.skip("test for generate color", () => {
  it("check if it is a function", () => {
    expect(generateColor).toBeTypeOf("function");
  });

  it("should return a string", () => {
    expect(generateColor()).toBeTypeOf("string");
  });

  it("should return a string of length 7", () => {
    expect(generateColor()).length(7);
  });

  it("should return a string starting with #", () => {
    expect(generateColor()).match(/^#/);
  });

  it("It must be made up of numbers between 1 to 9 nad letters between a and f", () => {
    expect(generateColor()).match(/([0-9])([a-f])/);
  });
});
