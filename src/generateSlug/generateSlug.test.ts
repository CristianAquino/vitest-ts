import { describe, expect, it } from "vitest";
import { generateSlug } from "./generateSlug";

describe.skip("test for generate slug", () => {
  it("check if it is a function", () => {
    expect(generateSlug).toBeTypeOf("function");
  });

  it("it should give an error if the parameter is not a string", () => {
    expect(() => generateSlug(2)).toThrow();
  });

  it("should return a string", () => {
    expect(generateSlug("")).toBeTypeOf("string");
  });

  it("should replace whitespace with dashes", () => {
    expect(generateSlug("hola mundo")).match(/-/);
  });
});
