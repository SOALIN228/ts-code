import { findContinuousChar2 } from "./index";

describe("连续字符长度", () => {
  it("正常情况", () => {
    const str = "aabbccc1233";
    const res = findContinuousChar2(str);
    expect(res).toEqual({ char: "c", length: 3 });
  });
  it("空字符串", () => {
    const res = findContinuousChar2("");
    expect(res).toEqual({ char: "", length: 0 });
  });
  it("无连续字符", () => {
    const str = "abc";
    const res = findContinuousChar2(str);
    expect(res).toEqual({ char: "a", length: 1 });
  });
  it("全部都是连续字符", () => {
    const str = "aaa";
    const res = findContinuousChar2(str);
    expect(res).toEqual({ char: "a", length: 3 });
  });
});
