import { Stack, assert, assertEquals, Queue } from "../mod.ts";

Deno.test("Stack: should insert values to stack", () => {
  let stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  assert(stack.size() === 2);
  assertEquals(stack.storage, [1, 2]);
});

Deno.test("Stack: should pop values from stack", () => {
  let stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  stack.pop();
  assertEquals(stack.storage, [1]);
  assert(stack.size() === 1);
});

Deno.test("Queue: should enqueue values", () => {
  let queue = new Queue<number>();
  queue.enqeue(1);
  queue.enqeue(2);
  assertEquals(queue.storage, [1, 2]);
  assert(queue.size() === 2);
});

Deno.test("Queue: should dequeue values", () => {
  let queue = new Queue<number>();
  queue.enqeue(1);
  queue.enqeue(2);
  queue.deqeue();
  assertEquals(queue.storage, [2]);
  assertEquals(queue.size(), 1);
  queue.deqeue();
  assertEquals(queue.size(), 0);
});
