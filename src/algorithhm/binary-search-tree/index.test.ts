import { getKthVal, ITreeNode } from "./index";

describe('二叉搜索树，第K小值', () => {
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

  it('正常情况', () => {
    const res = getKthVal(bt, 2)
    expect(res).toBe(2)
  })
  it('k值不在正常范围', () => {
    const res = getKthVal(bt, 10)
    expect(res).toBe(-1)
  })
})