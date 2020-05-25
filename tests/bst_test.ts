import { BinarySearchTree, assert, assertEquals } from "../mod.ts";

Deno.test("BST: should insert values correctly", () => {
  const bst = new BinarySearchTree<number>(5);
  bst.insert(2);
  bst.insert(3);
  bst.insert(7);
  bst.insert(6);
  assertEquals(bst.left?.right?.value, 3);
  assertEquals(bst.right?.left?.value, 6);
});
Deno.test("BST: can check if it contains a value", () => {
  const bst = new BinarySearchTree<number>(5);
  bst.insert(2);
  bst.insert(3);
  bst.insert(7);
  assertEquals(bst.contains(7), true);
  assertEquals(bst.contains(8), false);
});

Deno.test("BST: should return max value", () => {
  const bst = new BinarySearchTree<number>(5);
  bst.insert(2);
  bst.insert(3);
  bst.insert(7);
  assertEquals(bst.getMax(), 7);
  bst.insert(8);
  assertEquals(bst.getMax(), 8);
});

Deno.test("BST: should run fn on each element", () => {
  let a: number[] = [];
  const cb = (x: number) => {
    a.push(x);
  };
  const bst = new BinarySearchTree<number>(5);
  let [v1, v2, v3, v4, v5] = [2, 3, 7, 8, 100];
  bst.insert(v1);
  bst.insert(v2);
  bst.insert(v3);
  bst.insert(v4);
  bst.insert(v5);
  bst.forEach(cb);
  assert(a.includes(5));
  assert(a.includes(v1));
  assert(a.includes(v2));
  assert(a.includes(v3));
  assert(a.includes(v4));
  assert(a.includes(v5));
});

Deno.test("BST: should print elements in order", () => {
  let a: number[] = [];
  const log = console.log;
  console.log = (x: any) => {
    a.push(x);
  };
  const bst = new BinarySearchTree<number>(1);
  bst.insert(8);
  bst.insert(5);
  bst.insert(7);
  bst.insert(6);
  bst.insert(3);
  bst.insert(4);
  bst.insert(2);
  bst.inOrderPrint();
  console.log = log;
  assertEquals(a.join(""), "12345678");
});

Deno.test("BST: should print elements breadth first", () => {
  let a: number[] = [];
  const log = console.log;
  console.log = (x: any) => {
    a.push(x);
  };
  const bst = new BinarySearchTree<number>(1);
  bst.insert(8);
  bst.insert(5);
  bst.insert(7);
  bst.insert(6);
  bst.insert(3);
  bst.insert(4);
  bst.insert(2);
  bst.bftPrint();
  console.log = log;
  assertEquals(a.join(""), "18537246");
});

Deno.test("BST: should print elements depth first", () => {
  let a: number[] = [];
  const log = console.log;
  console.log = (x: any) => {
    a.push(x);
  };
  const bst = new BinarySearchTree<number>(1);
  bst.insert(8);
  bst.insert(5);
  bst.insert(7);
  bst.insert(6);
  bst.insert(3);
  bst.insert(4);
  bst.insert(2);
  bst.dftPrint();
  console.log = log;
  assertEquals(a.join(""), "18576342");
});
