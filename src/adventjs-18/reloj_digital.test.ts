import { describe, expect, it } from "vitest";
import { drawClock } from "./reloj_digital";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(drawClock).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a string", () => {
    expect(() => drawClock(2)).toThrow("time is not a string");
  });

  it("should return an error if the string has letters", () => {
    expect(() => drawClock("a")).toThrow("the string has letters elements");
  });

  it("should return a array", () => {
    expect(drawClock("01:30")).toBeTypeOf("object");
  });
});
