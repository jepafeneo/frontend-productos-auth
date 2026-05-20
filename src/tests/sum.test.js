import { describe, expect, it } from "vitest";
import { sum } from "../utils/sum";

describe("sum", () => {
  it("deberia sumar dos numeros", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
