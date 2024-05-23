import { describe, expect, it } from "vitest";
import { validateDate } from "./validateDate";

describe.skip("test for validate date", () => {
  it("check if it is a function", () => {
    expect(validateDate).toBeTypeOf("function");
  });

  it("it should give an error if the parameter is not a string", () => {
    expect(() => validateDate(2)).toThrow();
  });

  it("should return a boolean ", () => {
    expect(validateDate("15/05/2019")).toBe(true);
  });

  it("should return a false if the date is not valid", () => {
    expect(validateDate("asf")).toBe(false);
  });

  it("should return false if it does not follow the dd/mm/yyyy format", () => {
    expect(validateDate("2019/05/15")).toBe(false);
  });

  it("should return false if a valid day for the month of February is not entered", () => {
    expect(validateDate("29/02/2019")).toBe(false);
  });

  it("should return false if it is not a valid day for the month of February in a leap year", () => {
    expect(validateDate("30/02/2024")).toBe(false);
  });

  it("should return false if it is a 31st day for the months of February, April, June, September, November", () => {
    expect(validateDate("31/04/2023")).toBe(false);
  });
});
