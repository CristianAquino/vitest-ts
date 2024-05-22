import { describe, expect, it } from "vitest";
import { cyberReindeer } from "./cybertruck_santa";

describe("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(cyberReindeer).toBeTypeOf("function");
  });

  it("it should return an error if the first parameter is not a string", () => {
    expect(() => cyberReindeer(2)).toThrow();
  });

  it("it should return an error if the second parameter is not a number", () => {
    expect(() => cyberReindeer("a")).toThrow();
  });

  it("should return a array", () => {
    expect(cyberReindeer("S..|...|..", 10)).toBeTypeOf("object");
  });

  it("should return an array of string with all the movements of the sled", () => {
    expect(cyberReindeer("S..|...|..", 10)).toStrictEqual([
      "S..|...|..",
      ".S.|...|..",
      "..S|...|..",
      "..S|...|..",
      "..S|...|..",
      "...S...*..",
      "...*S..*..",
      "...*.S.*..",
      "...*..S*..",
      "...*...S..",
    ]);
  });
});
