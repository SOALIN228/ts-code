interface ILinkListNode {
  value: number;
  next: ILinkListNode | null;
}

// 根据数组创建链表
export function createLinkList (arr: number[]): ILinkListNode {
  const length = arr.length;
  if (length === 0) throw new Error('arr is empty')

  let curNode: ILinkListNode = {
    value: arr[length - 1],
    next: null
  }

  if (length === 1) return curNode

  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  
  return curNode
}

// 反转链表
export function reverseLinkList (head: ILinkListNode | null): ILinkListNode | null {
    let curr = head, prev = null
    while (curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }

    return prev
}

// const list = createLinkList([1,2,7,5,8])
// console.log(JSON.stringify(reverseLinkList(list)));
