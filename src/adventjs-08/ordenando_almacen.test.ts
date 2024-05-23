import { describe, expect, it } from "vitest";
import { organizeGifts } from "./ordenando_almacen";

describe("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(organizeGifts).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a string", () => {
    expect(() => organizeGifts(2)).toThrow("gifts is not a string");
  });

  it("should return an error if the parameter does not contain only letters and numbers", () => {
    expect(() => organizeGifts("*/(")).toThrow(
      "the parameter must contain only numbers and letters"
    );
  });

  it("should return a string", () => {
    expect(organizeGifts("76a11b")).toBeTypeOf("string");
  });

  it("should return '[a]{a}{a}(aaaaaa){b}(b)' for parameter '76a11b'", () => {
    expect(organizeGifts("76a11b")).toBe("[a]{a}{a}(aaaaaa){b}(b)");
  });
});
