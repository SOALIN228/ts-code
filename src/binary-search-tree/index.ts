export interface ITreeNode {
  val: number;
  left: ITreeNode | null;
  right: ITreeNode | null;
}

const bt: ITreeNode = {
  val: 5,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};

export function getKthVal(node: ITreeNode, target: number) {
  const arr: number[] = [];
  function inorder(node: ITreeNode | null) {
    if (!node) return;
    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  }
  inorder(node);
  return arr[target - 1] || -1
}

// console.log(getKthVal(bt, 2));
