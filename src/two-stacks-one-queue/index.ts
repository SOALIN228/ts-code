/**
 * 两个栈实现一个队列
 */
export class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []

  add(n: number) {
    this.stack1.push(n)
  }

  delete(): number | null {
    const stack1 = this.stack1
    const stack2 = this.stack2
    if (stack2.length) {
      return stack2.pop() || null
    }
    // 将数值都移动到第2个柱子上
    while(stack1.length > 1) {
        stack2.push(stack1.pop()!)
    }

    return stack1.pop() || null
  }

  get length(): number {
    return this.stack1.length + this.stack2.length
  }
}

// 功能测试
// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)

// console.log(q.length);
// console.log(q.delete());
// console.log(q.length);
// console.log(q.delete());
// console.log(q.length);