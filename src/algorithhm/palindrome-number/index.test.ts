import { findPalindromeNumber3 } from "./index";

describe("回文数", () => {
  it("正常情况", () => {
    const res = findPalindromeNumber3(200);
    expect(res).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111,
      121, 131, 141, 151, 161, 171, 181, 191,
    ]);
  });
  it("小于0", () => {
    const res = findPalindromeNumber3(-1);
    expect(res).toEqual([]);
  });
});
