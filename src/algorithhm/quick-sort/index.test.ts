import { quickSort } from "./index";

describe("快速排序", () => {
  it("正常情况", () => {
    const arr = [1, 9, 8, 7, 2, 5];
    const res = quickSort(arr);
    expect(res).toEqual([1, 2, 5, 7, 8, 9]);
  });
  it("有负数", () => {
    const arr = [1, 9, 8, 7, 2, 5, -3];
    const res = quickSort(arr);
    expect(res).toEqual([-3, 1, 2, 5, 7, 8, 9]);
  });
  it("元素都一样", () => {
    const arr = [1, 1, 1];
    const res = quickSort(arr);
    expect(res).toEqual([1, 1, 1]);
  });
  it("空数组", () => {
    const res = quickSort([]);
    expect(res).toEqual([]);
  });
});
