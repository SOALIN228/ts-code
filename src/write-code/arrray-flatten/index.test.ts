import { flatten } from "./index";

describe("数组扁平化", () => {
  it("空数组", () => {
    const res = flatten([]);
    expect(res).toEqual([]);
  });
  it("非嵌套", () => {
    const res = flatten([1, 2, 3]);
    expect(res).toEqual([1, 2, 3]);
  });
  it("一级嵌套", () => {
    const res = flatten([1, 2, 3, [4]]);
    expect(res).toEqual([1, 2, 3, 4]);
  });
  it("多级嵌套", () => {
    const res = flatten([1, 2, 3, [4, [5]]]);
    expect(res).toEqual([1, 2, 3, 4, [5]]);
  });
});
