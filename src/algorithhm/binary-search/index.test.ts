import { binarySearch, binarySearch2 } from "./index";

describe("二分查找", () => {
  it("正常情况", () => {
    const arr = [10, 20, 40, 80, 160];
    const target = 20;
    const index = binarySearch(arr, target)
    expect(index).toBe(1)
  });
  it("空数组", () => {
    const index = binarySearch([], 20)
    expect(index).toBe(-1)
  });
  it("找不到", () => {
    const arr = [10, 20, 40, 80, 160];
    const target = 100;
    const index = binarySearch(arr, target)
    expect(index).toBe(-1)
  });
});
