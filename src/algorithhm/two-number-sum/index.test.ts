import { findTwoNumbers1 } from "./index";

describe("两数之和", () => {
  it("正常情况", () => {
    const arr = [1, 2, 3, 4];
    const res = findTwoNumbers1(arr, 3);
    expect(res).toEqual([0, 1]);
  });
  it("空数组", () => {
    const res = findTwoNumbers1([], 3);
    expect(res).toEqual([-1, -1]);
  });
  it("找不到", () => {
    const arr = [1, 2, 3, 4];
    const res = findTwoNumbers1(arr, 10);
    expect(res).toEqual([-1, -1]);
  });
});
