import { format2 } from "./index";

describe("千分位", () => {
  it("正常", () => {
    const num = 1234506700;
    const res = format2(num);
    expect(res).toBe("1,234,506,700");
  });
  it("小于 1000", () => {
    expect(format2(123)).toBe("123");
  });
});
