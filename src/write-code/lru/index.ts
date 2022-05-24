class LRUCache {
  private length: number;
  private data: Map<any, any> = new Map();

  constructor(length: number) {
    if (length < 1) throw new Error("invalid length");
    this.length = length;
  }

  set(key: any, value: any) {
    const data = this.data;
    // 更新排序
    if (data.has(key)) {
      data.delete(key);
    }
    data.set(key, value);
    if (data.size > this.length) {
      // 获取最老的元素
      const delKey = data.keys().next().value;
      data.delete(delKey);
    }
  }

  get(key: any): any {
    const data = this.data;
    if (!data.has(key)) return null;
    const value = data.get(key);
    // 更新排序
    data.delete(key);
    data.set(key, value);
    return value;
  }
}

// const lruCache = new LRUCache(2);
// lruCache.set(1, 1); // {1=1}
// lruCache.set(2, 2); // {1=1, 2=2}
// console.log(lruCache.get(1)); // 1 {2=2, 1=1}
// lruCache.set(3, 3); // {1=1, 3=3}
// console.log(lruCache.get(2)); // null
// lruCache.set(4, 4); // {3=3, 4=4}
// console.log(lruCache.get(1)); // null
// console.log(lruCache.get(3)); // {4=4, 3=3}
// console.log(lruCache.get(4)); // {3=3, 4=4}

interface IListNode {
  value: any;
  key: string; // 存储key，方便删除
  prev?: IListNode;
  next?: IListNode;
}

class IRUListCache {
  private length: number;
  private data: { [key: string]: IListNode } = {};
  private dataLength: number = 0;
  private listHead: IListNode | null = null;
  private listTail: IListNode | null = null;

  constructor(length: number) {
    if (length < 1) throw new Error("invalid length");
    this.length = length;
  }

  private moveToTail(node: IListNode) {
    const tail = this.listTail;
    if (tail === node) return;
    // prevNode nextNode 断开和node 的关系
    const prevNode = node.prev;
    const nextNode = node.next;
    if (prevNode) {
      if (nextNode) {
        prevNode.next = nextNode;
      } else {
        delete prevNode.next;
      }
    }
    if (nextNode) {
      if (prevNode) {
        nextNode.prev = prevNode;
      } else {
        delete nextNode.prev;
      }

      if (this.listHead === node) this.listHead = nextNode;
    }
    // node 断开与prevNode nextNode 的关系
    delete node.prev;
    delete node.next;
    // 建立node 新关系
    if (tail) {
      tail.next = node;
      node.prev = tail;
    }
    this.listTail = node;
  }

  private tryClean() {
    while (this.dataLength > this.length) {
      const head = this.listHead;
      if (head == null) throw new Error("head is null");
      const headNext = head.next;
      if (headNext == null) throw new Error("headNext is null");
      // 断开head 和 next 的关系
      delete headNext.prev;
      delete head.next;
      // 重新赋值 listHead
      this.listHead = headNext;
      // 清理data
      delete this.data[head.key];
      // 重新计数
      this.dataLength = this.dataLength - 1;
    }
  }

  get(key: string): any {
    const data = this.data;
    const curNode = data[key];
    if (!curNode) return null;

    if (curNode === this.listTail) {
      // 已在末尾，直接返回
      return curNode.value;
    }
    // 移动到末尾
    this.moveToTail(curNode);
    return curNode.value;
  }

  set(key: string, value: any) {
    const data = this.data;
    const curNode = data[key];
    if (curNode == null) {
      const newNode: IListNode = { key, value };
      this.moveToTail(newNode);
      data[key] = newNode;
      this.dataLength++;
      if (this.dataLength === 1) this.listHead = newNode;
    } else {
      curNode.value = value;
      // 移动到末尾
      this.moveToTail(curNode);
    }
    // 清理元素
    this.tryClean();
  }
}

const lruCache = new IRUListCache(2);
lruCache.set('1', 1); // {1=1}
lruCache.set('2', 2); // {1=1, 2=2}
console.log(lruCache.get('1')); // 1 {2=2, 1=1}
lruCache.set('3', 3); // {1=1, 3=3}
console.log(lruCache.get('2')); // null
lruCache.set('4', 4); // {3=3, 4=4}
console.log(lruCache.get('1')); // null
console.log(lruCache.get('3')); // {4=4, 3=3}
console.log(lruCache.get('4')); // {3=3, 4=4}