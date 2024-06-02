import { describe, expect, it } from "vitest";
import { findBalancedSegment } from "./mensaje_binario";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(findBalancedSegment).toBeTypeOf("function");
  });

  it("it should return an error if the parameter is not a array", () => {
    expect(() => findBalancedSegment(2)).toThrow("message is not a array");
  });

  it("it should return an error if the elements of the array are not numbers", () => {
    expect(() => findBalancedSegment(["a"])).toThrow(
      "the array has elements that are not a numbers"
    );
  });

  it("should return an error if the elements of the array are different from 0 or 1", () => {
    expect(() => findBalancedSegment([0, 1, 2])).toThrow(
      "the array has elements that are different from 0 and 1"
    );
  });

  it("should return a array", () => {
    expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toBeTypeOf("object");
  });

  it("must return an array containing the maximum length", () => {
    expect(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])).toEqual([2, 5]);
  });
});
