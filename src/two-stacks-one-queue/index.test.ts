import { MyQueue } from "./index";

describe("两个栈实现一个队列", () => {
  it("入队和队列长度", () => {
    const q = new MyQueue();
    expect(q.length).toBe(0);
    q.add(100);
    q.add(200);
    q.add(300);
    expect(q.length).toBe(3);
  });
  it("删除", () => {
    const q = new MyQueue();
    expect(q.delete()).toBeNull();
    q.add(100);
    q.add(200);
    q.add(300);
    expect(q.delete()).toBe(100);
    expect(q.length).toBe(2);
    expect(q.delete()).toBe(200);
    expect(q.length).toBe(1);
    q.add(400);
    expect(q.length).toBe(2);
    expect(q.delete()).toBe(300);
    expect(q.length).toBe(1);
  });
});
