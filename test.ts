import { LinkedList } from "./mod.ts";

export function assertEq(left, right, info = '') {
  if (left !== right) {
    console.error(`Test Failed:
    Expected =>  ${right}
    Got => ${left}`);
  } else {
    console.log(`Test: ${info} Passed`);
  }
}

// !!! TEST Singly LinkedList
const testArr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];
const testList = new LinkedList();
for (let data of testArr) {
  testList.insertNode(data);
}
// testList.deleteNodeFromBack(2);
// testList.map(c => console.log(c));
testList.map((c, i) => assertEq(c, testArr[i], i));
testList.map(c => c ** 2);
testList.map((c, i) => assertEq(c, testArr[i] ** 2, `${i} => mapToSquare`));
