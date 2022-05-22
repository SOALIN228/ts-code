import {MyQueue} from './index'

describe('链表实现队列',() => {
  it('添加', () => {
    const queue = new MyQueue()
    expect(queue.length).toBe(0)
    queue.add(100)
    queue.add(200)
    expect(queue.length).toBe(2)
  })
  it('删除', () => {
    const queue = new MyQueue()
    expect(queue.delete()).toBeNull()
    queue.add(100)
    queue.add(200)
    expect(queue.delete()).toBe(100)
    expect(queue.length).toBe(1)
    expect(queue.delete()).toBe(200)
    expect(queue.length).toBe(0)
  })
})