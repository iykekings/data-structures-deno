import { test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { DoublyLinkedList } from "../mod.ts";

test("DoublyLinkedList:  Insertion", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const testList = new DoublyLinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.map((c: number, i: number) => assertEquals(c, testArr[i]));
});

test("DoublyLinkedList: Sorted Insertion", () => {
  const testArr = [0, 1, 2, 3, 4, 5, 6, 9, 65, 78];
  const result = [0, 1, 2, 3, 4, 5, 6, 7, 9, 65, 78];
  const toInsert = 7;
  const testList = new DoublyLinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.sortedInsert(toInsert);
  testList.map((c: number, i: number) => assertEquals(c, result[i]));
});

test("DoublyLinkedList: Map operation", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const testList = new DoublyLinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.map((c: number) => c ** 2);
  testList.map((c: number, i: number) => assertEquals(c, testArr[i] ** 2));
});

test("DoublyLinkedList: deleteNode", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [1, 2, 3, 5, 6, 78, 9, 0, 65];
  const testList = new DoublyLinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.deleteNode(3);
  testList.map((c: number, i: number) => assertEquals(c, result[i]));
});

test("DoublyLinkedList: deleteFromBack", () => {
  const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
  const result = [1, 2, 3, 4, 5, 6, 9, 0, 65];
  const testList = new DoublyLinkedList<number>();
  for (let data of testArr) {
    testList.insertNode(data);
  }
  testList.deleteNodeFromBack(3);
  testList.map((c: number, i: number) => assertEquals(c, result[i]));
});
