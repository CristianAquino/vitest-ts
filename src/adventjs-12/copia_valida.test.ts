import { describe, expect, it } from "vitest";
import { checkIsValidCopy } from "./copia_valida";

describe.skip("test for the first adventjs exercise", () => {
  it("check if it is a function", () => {
    expect(checkIsValidCopy).toBeTypeOf("function");
  });

  it("it should return an error if the first parameter is not a string", () => {
    expect(() => checkIsValidCopy(2)).toThrow("original is not a string");
  });

  it("it should return an error if the second parameter is not a string", () => {
    expect(() => checkIsValidCopy("Santa Claus")).toThrow(
      "copy is not a string"
    );
  });

  it("should return a string", () => {
    expect(checkIsValidCopy("Santa Claus", "s#+:. c:. s")).toBeTypeOf(
      "boolean"
    );
  });

  it("must return true with the parameters 'Santa Claus' and 's#+:. c:. s'", () => {
    expect(checkIsValidCopy("Santa Claus", "s#+:. c:. s")).toBe(true);
  });
});
