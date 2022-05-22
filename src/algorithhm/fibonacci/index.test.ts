import { fibonacci } from "./index";

describe("斐波那契", () => {
  it("0 和 1", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });
  it("正常情况", () => {
    expect(fibonacci(5)).toBe(8);
    expect(fibonacci(6)).toBe(13);
  });
});
