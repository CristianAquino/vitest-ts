import { describe, expect, it } from "vitest";
import { calculateTime } from "./calculando_tiempo";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(calculateTime).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a array", () => {
    expect(() => calculateTime(2)).toThrow("deliveries is not a array");
  });

  it("It should return an error if the elements of the array are not strings", () => {
    expect(() => calculateTime([2])).toThrow(
      "the array has elements that are not a string"
    );
  });

  it("should return a string", () => {
    expect(calculateTime(["00:10:00", "01:00:00", "03:30:00"])).toBeTypeOf(
      "string"
    );
  });

  it("should return a string in the format of hh:mm:ss", () => {
    expect(calculateTime(["00:10:00", "01:00:00", "03:30:00"])).match(
      /^-?(\d{2})\:(\d{2})\:(\d{2})$/
    );
  });

  it("should return '-02:20:00' as a result", () => {
    expect(calculateTime(["00:10:00", "01:00:00", "03:30:00"])).toBe(
      "-02:20:00"
    );
  });
});
