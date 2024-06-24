import { describe, expect, it } from "vitest";
import { generateCode } from "./generateCode";

describe("test for generate code based on numbers and letters", () => {
  it("check if it is a function", () => {
    expect(generateCode).toBeTypeOf("function");
  });

  it("should return a string", () => {
    expect(generateCode()).toBeTypeOf("string");
  });

  it("should return a string of length 6", () => {
    expect(generateCode()).length(6);
  });

  it("It must be made up of numbers between 1 to 9 nad letters between A and Z", () => {
    expect(generateCode()).match(/[A-Z0-9]/);
  });
});
