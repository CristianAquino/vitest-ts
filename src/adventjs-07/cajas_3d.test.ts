import { describe, expect, it } from "vitest";
import { drawGift } from "./cajas_3d";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(drawGift).toBeTypeOf("function");
  });

  it("it should return an error if the first parameter is not a number", () => {
    expect(() => drawGift("a")).toThrow("size is not a number");
  });

  it("it should return an error if the second parameter is not a string", () => {
    expect(() => drawGift(5)).toThrow("symbol is not a string");
  });

  it("should return a string", () => {
    expect(drawGift(5, "*")).toBeTypeOf("string");
  });

  it("should return '#', if the size parameter is 1", () => {
    expect(drawGift(1, "*")).toBe("#");
  });

  it("should return a string with the drawing of the gift that contains the entered symbol", () => {
    expect(drawGift(5, "*")).toStrictEqual(
      `    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n`
    );
  });
});
