import { matchBracket } from "./index";

describe("括号匹配", () => {
  it("正常情况", () => {
    const str = "{[()]}";
    const res = matchBracket(str);
    expect(res).toBe(true);
  });

  it("不匹配", () => {
    const str = "{[)]}";
    const res = matchBracket(str);
    expect(res).toBe(false);
  });

  it("顺序不一致", () => {
    const str = "{([)]}";
    const res = matchBracket(str);
    expect(res).toBe(false);
  });

  it("空字符", () => {
    const str = "";
    const res = matchBracket(str);
    expect(res).toBe(true);
  });
});
