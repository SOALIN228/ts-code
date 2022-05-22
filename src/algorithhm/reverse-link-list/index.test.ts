import { createLinkList, reverseLinkList } from "./index";

describe("反转链表", () => {
  it("单个元素", () => {
    const list = createLinkList([1]);
    const reverseList = reverseLinkList(list);
    expect(reverseList).toEqual({ value: 1, next: null });
  });
  it("多个元素", () => {
    const list = createLinkList([1, 5, 7, 2, 8]);
    const reverseList = reverseLinkList(list);
    expect(reverseList).toEqual(createLinkList([8, 2, 7, 5, 1]));
  });
});
