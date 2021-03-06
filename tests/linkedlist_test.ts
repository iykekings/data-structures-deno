import { LinkedList, assertEquals, assert } from "../mod.ts";

Deno.test("SinglyLinkedList: insertion", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.map((c: number, i: number) => assertEquals(c, testArr[i]));
});

Deno.test("SinglyLinkedList: reverse", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [...testArr].reverse();
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.reverse();
  testList.map((c: number, i: number) => assertEquals(c, result[i]));
});

Deno.test("SinglyLinkedList: map operation", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.map((c: number) => c ** 2);
  testList.map((c: number, i: number) => assertEquals(c, testArr[i] ** 2));
});

Deno.test("SinglyLinkedList: deleteNode", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [1, 2, 3, 5, 6, 78, 9, 0, 65];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.deleteNode(3);
  testList.map((c: number, i: number) => assertEquals(c, result[i]));
});

Deno.test("SinglyLinkedList: deleteFromBack", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [1, 2, 3, 4, 5, 6, 9, 0, 65];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.deleteNodeFromBack(3);
  testList.map((c: number, i: number) => assertEquals(c, result[i]));
});
Deno.test("SinglyLinkedList: compareWith -> Equality", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const firstList = new LinkedList<number>();
  const secondList = new LinkedList<number>();
  for (let data of testArr) {
    firstList.insertNode(data);
    secondList.insertNode(data);
  }
  const result = firstList.compareWith(secondList);
  assert(result);
});

Deno.test("SinglyLinkedList: compareWith -> Inequality", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const firstList = new LinkedList<number>();
  const secondList = new LinkedList<number>();
  for (let data of testArr) {
    firstList.insertNode(data);
  }
  for (let data of testArr.slice(2)) {
    secondList.insertNode(data);
  }
  const result = firstList.compareWith(secondList);
  assert(!result);
});

Deno.test("SinglyLinkedList: sort -> Without callback fn", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [0, 1, 2, 3, 4, 5, 6, 9, 65, 78];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.sort();
  testList.map((data: number, i: number) => assertEquals(data, result[i]));
});
Deno.test("SinglyLinkedList: sort -> Ascending", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [0, 1, 2, 3, 4, 5, 6, 9, 65, 78];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.sort((a, b) => a < b);
  testList.map((data: number, i: number) => assertEquals(data, result[i]));
});

Deno.test("SinglyLinkedList: sort -> Descending", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [78, 65, 9, 6, 5, 4, 3, 2, 1, 0];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.sort((a, b) => a > b);
  testList.map((data: number, i: number) => assertEquals(data, result[i]));
});
