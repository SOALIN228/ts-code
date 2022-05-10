import { switchLetterCase2 } from "./index";

describe("字母切换大小写", () => {
  it("正常", () => {
    const str = "100&asdDs,";
    const res = switchLetterCase2(str);
    expect(res).toBe('100&ASDdS,')
  });
  it("空字符串", () => {
    const res = switchLetterCase2('');
    expect(res).toBe('')
  });
  it("非字母", () => {
    const res = switchLetterCase2('123,');
    expect(res).toBe('123,')
  });
});
