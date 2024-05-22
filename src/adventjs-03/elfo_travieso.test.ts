import { describe, expect, it } from "vitest";
import { findNaughtyStep } from "./elfo_travieso";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(findNaughtyStep).toBeTypeOf("function");
  });

  it("it should give an error if the first parameter is not a string", () => {
    expect(() => findNaughtyStep(2)).toThrow();
  });

  it("it should give an error if the second parameter is not a string", () => {
    expect(() => findNaughtyStep("abcd")).toThrow();
  });

  it("should return a string", () => {
    expect(findNaughtyStep("abcd", "abcde")).toBeTypeOf("string");
  });

  it("It should return an empty string if the parameters are the same", () => {
    expect(findNaughtyStep("abcd", "abcd")).toBe("");
  });

  it("It should return the first letter of the modified parameter if the original parameter is empty", () => {
    expect(findNaughtyStep("", "abcd")).toBe("a");
  });

  it("It should return the letter e when the original string is shorter than modified", () => {
    expect(findNaughtyStep("abcd", "abcde")).toBe("e");
  });

  it("It should return the letter r when the original string is greater than modified length", () => {
    expect(findNaughtyStep("stepfor", "stepfo")).toBe("r");
  });
});
