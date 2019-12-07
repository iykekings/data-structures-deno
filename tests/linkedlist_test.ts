import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals, assert } from "https://deno.land/std/testing/asserts.ts";
import { LinkedList } from "../mod.ts";

test("SinglyLinkedList: insertion", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.map((c: number, i: number) => assertEquals(c, testArr[i]));
});

test("SinglyLinkedList: reverse", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [...testArr].reverse();
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.reverse();
  testList.map((c: number, i: number) => assertEquals(c, result[i]));
});


test("SinglyLinkedList: map operation", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.map((c: number) => c ** 2);
  testList.map((c: number, i: number) => assertEquals(c, testArr[i] ** 2));
});

test("SinglyLinkedList: deleteNode", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [1, 2, 3, 5, 6, 78, 9, 0, 65];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.deleteNode(3);
  testList.map((c: number, i: number) => assertEquals(c, result[i]));
});

test("SinglyLinkedList: deleteFromBack", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [1, 2, 3, 4, 5, 6, 9, 0, 65];
  const testList = new LinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.deleteNodeFromBack(3);
  testList.map((c: number, i: number) => assertEquals(c, result[i]));
});
test("SinglyLinkedList: compareWith -> Equality", () => {
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

test("SinglyLinkedList: compareWith -> Inequality", () => {
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


