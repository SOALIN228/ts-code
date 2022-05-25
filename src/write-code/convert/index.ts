interface IArrayItem {
  id: number;
  name: string;
  parentId: number;
}

interface ITreeNode {
  id: number;
  name: string;
  children?: ITreeNode[];
}

function convertTree(arr: IArrayItem[]): ITreeNode | null {
  const idToTreeNode: Map<Number, ITreeNode> = new Map();
  let root = null;
  arr.forEach((item) => {
    const { id, name, parentId } = item;
    const treeNode: ITreeNode = { id, name };
    idToTreeNode.set(id, treeNode);
    // 数组一定要有序，父在前
    const parentNode = idToTreeNode.get(parentId);
    if (parentNode) {
      if (parentNode.children == null) parentNode.children = [];
      parentNode.children.push(treeNode);
    }
    // 根结点
    if (parentId === 0) root = treeNode;
  });

  return root;
}

function convertArr(root: ITreeNode): IArrayItem[] {
  const nodeToParent: Map<ITreeNode, ITreeNode> = new Map();
  const arr: IArrayItem[] = [];

  const queue: ITreeNode[] = [root];
  while (queue.length) {
    const curNode = queue.shift();
    if (curNode == null) break;
    const { id, name, children = [] } = curNode;

    const parentNode = nodeToParent.get(curNode);
    const parentId = parentNode?.id || 0;
    const item = { id, name, parentId };
    arr.push(item);

    children.forEach((child) => {
      nodeToParent.set(child, curNode);
      queue.push(child);
    });
  }
  return arr;
}

const arr = [
  { id: 1001, parentId: 0, name: "AA" },
  { id: 1002, parentId: 1001, name: "BB" },
  { id: 1003, parentId: 1001, name: "CC" },
  { id: 1004, parentId: 1003, name: "DD" },
  { id: 1005, parentId: 1003, name: "EE" },
  { id: 1006, parentId: 1002, name: "FF" },
  { id: 1007, parentId: 1002, name: "GG" },
  { id: 1008, parentId: 1004, name: "HH" },
  { id: 1009, parentId: 1005, name: "II" },
];

// const tree = convertTree(arr);
// console.log("tree", convertArr(tree!));

interface FTreeNode extends ITreeNode {
  level: number;
}

function listFormatTree(arr: IArrayItem[]) {
  const tree = convertTree(arr);
  function formatTree(root: ITreeNode) {
    const queue: FTreeNode[] = [{ ...root, level: 0 }];
    while (queue.length) {
      const curNode = queue.shift();
      if (curNode == null) break;
      const { name, level, children = [] } = curNode;
      console.log("  ".repeat(level) + name);
      children.forEach((child) => {
        queue.push({ ...child, level: level + 1 });
      });
    }
  }
  formatTree(tree!);
}

listFormatTree(arr);
