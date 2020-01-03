import { test, DllStack, assert, DllQueue } from '../mod.ts';

test('DllStack: correct size after push and pop', () => {
  const dllstack = new DllStack<number>();
  assert(dllstack.size() === 0);
  dllstack.pop()
  assert(dllstack.size() === 0);
  dllstack.push(2)
  assert(dllstack.size() === 1)
  dllstack.push(4)
  assert(dllstack.size() === 2)
  dllstack.push(6)
  dllstack.push(8)
  dllstack.push(10)
  dllstack.push(12)
  dllstack.push(14)
  dllstack.push(16)
  dllstack.push(18)
  assert(dllstack.size() === 9)
})
test('DllStack: pops correctly', () => {
  const dllstack = new DllStack<number>();
  dllstack.push(2)
  dllstack.push(4)
  assert(dllstack.pop() === 4)
  assert(dllstack.size() === 1)
  dllstack.push(6)
  assert(dllstack.pop() === 6)
  dllstack.push(8)
  dllstack.push(10)
  dllstack.push(12)
  dllstack.push(14)
  dllstack.push(16)
  dllstack.push(18)
  assert(dllstack.pop() === 18)
  assert(dllstack.size() === 6)
})
test('DllQueue: correct size after enqueue and dequeue', () => {
  const queue = new DllQueue<number>();
  assert(queue.size() === 0);
  queue.deqeue()
  assert(queue.size() === 0);
  queue.enqeue(2)
  assert(queue.size() === 1)
  queue.enqeue(4)
  assert(queue.size() === 2)
  queue.enqeue(6)
  queue.enqeue(8)
  queue.enqeue(10)
  queue.enqeue(12)
  queue.enqeue(14)
  queue.enqeue(16)
  queue.enqeue(18)
  assert(queue.size() === 9)
})
test('DllQueue: dequeues correctly', () => {
  const dllqueue = new DllQueue<number>();
  dllqueue.enqeue(2)
  dllqueue.enqeue(4)
  assert(dllqueue.deqeue() === 2)
  assert(dllqueue.size() === 1)
  dllqueue.enqeue(6)
  assert(dllqueue.deqeue() === 4)
  dllqueue.enqeue(8)
  dllqueue.enqeue(10)
  dllqueue.enqeue(12)
  dllqueue.enqeue(14)
  dllqueue.enqeue(16)
  dllqueue.enqeue(18)
  assert(dllqueue.deqeue() === 6)
  assert(dllqueue.size() === 6)
})