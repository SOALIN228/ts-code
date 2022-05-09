import { moveZero } from "./index";

describe("移动零", () => {
  it("正常情况", () => {
    const arr = [0, 0, 1, 2, 0, 4];
    expect(moveZero(arr)).toEqual([1, 2, 4, 0, 0, 0]);
  });
  it("没有零", () => {
    const arr = [3, 1, 2, 4];
    expect(moveZero(arr)).toEqual([3, 1, 2, 4]);
  });
  it("全是零", () => {
    const arr = [0, 0, 0];
    expect(moveZero(arr)).toEqual([0, 0, 0]);
  });
});
