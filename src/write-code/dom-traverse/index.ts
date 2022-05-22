interface INode {
  val: string;
  children?: INode[];
}

export function depthFirstTraverse(root: INode) {
  console.log(root.val);
  if (root.children && root.children.length) {
    root.children.forEach((child) => {
      depthFirstTraverse(child);
    });
  }
}

export function depthFirstTraverseStack(root: INode) {
  const stacks: INode[] = [root];
  while(stacks.length) {
    const n = stacks.pop()!
    console.log(n.val);
    n.children?.reverse()?.forEach(child => {
      stacks.push(child)
    })
  }
}

export function breadthFirstTraverse(root: INode) {
  const queue: INode[] = [root];
  while (queue.length) {
    const n = queue.shift()!;
    console.log(n.val);
    n.children?.forEach((child) => {
      queue.push(child);
    });
  }
}

const tree: INode = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

// depthFirstTraverse(tree);
// depthFirstTraverseStack(tree);
// breadthFirstTraverse(tree);
