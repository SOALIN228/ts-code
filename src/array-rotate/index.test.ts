const { rotate1, rotate2 } = require("./index");
const { cloneDeep } = require("lodash");

describe("数组旋转k步", () => {
  it("正常情况", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 0];
    const k = 3;
    const res1 = rotate1(cloneDeep(arr), k);
    const res2 = rotate2(cloneDeep(arr), k);
    expect(res1).toEqual([6, 7, 0, 1, 2, 3, 4, 5]);
    expect(res2).toEqual([6, 7, 0, 1, 2, 3, 4, 5]);
  });

  it("数组为空", () => {
    const res1 = rotate1([], 3);
    const res2 = rotate2([], 3);
    expect(res1).toEqual([]);
    expect(res2).toEqual([]);
  });

  it("k是负值", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = -3;
    const res1 = rotate1(cloneDeep(arr), k);
    const res2 = rotate2(cloneDeep(arr), k);
    expect(res1).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(res2).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("k是0", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 0;
    const res1 = rotate1(cloneDeep(arr), k);
    const res2 = rotate2(cloneDeep(arr), k);
    expect(res1).toEqual(arr);
    expect(res2).toEqual(arr);
  });

  it("k不是数字", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = "abc";
    const res1 = rotate1(cloneDeep(arr), k);
    const res2 = rotate2(cloneDeep(arr), k);
    expect(res1).toEqual(arr);
    expect(res2).toEqual(arr);
  });
});
