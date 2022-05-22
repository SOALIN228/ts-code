interface IListNode {
  value: number;
  next: IListNode | null;
}

// 链表实现队列
export class MyQueue {
  private head: IListNode | null = null;
  private tail: IListNode | null = null;
  private size = 0;

  add(n: number) {
    const newNode: IListNode = {
      value: n,
      next: null,
    };
    if (this.tail === null) {
      this.tail = newNode;
      this.head = this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.size++;
  }

  delete(): number | null {
    if (this.size === 0) return null
    let retNode = this.head as IListNode
    this.head = this.head?.next || null
    retNode.next = null
    if (this.head === null) {
      this.tail = null
    }
    this.size--
    return retNode.value
  }

  get length():number {
    return this.size
  }
}


// const queue = new MyQueue()
// queue.add(100)
// queue.add(200)
// console.log(queue.length);
// console.log(queue.delete());
// queue.add(300)
// console.log(queue.length);