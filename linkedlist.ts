export class LinkedList<T> {
  head: Node<T>;

  insertHead(data: T) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let next = this.head;
      this.head = new Node(data, next);
    }
  }

  // Inserts node at a position or at the end if position is not provided
  insertNode(data: T, position = null) {
    if (!this.head) {
      this.insertHead(data);
      return;
    }
    let current = this.head;
    if (!position) {
      while (current) {
        if (!current.next) {
          current.next = new Node(data);
          break;
        }
        current = current.next;
      }
    } else {
      let index = 1;
      if(position === 0) {
        this.insertHead(data);
        return;
      }
      while (current.next) {
        if (index === position) {
          let next = current.next;
          current.next = new Node(data, next);
          break;
        }
        current = current.next;
        index += 1;
      }
    }
  }

  // delete node at position
  deleteNode(position: number) {
    let index = 1;
    let current = this.head;
    while (current.next) {
      if (index === position) {
        current.next = current.next.next;
      }
      current = current.next;
      index++;
    }
  }

  // Getting a node at an index from the back in O(n)
  deleteNodeFromBack(position = 0) {
    let pointer1 = this.head;
    let index = 0;
    let pointer2;
    while (pointer1.next) {
      if (index === position + 1) {
        pointer2 = this.head;
      }
      if (pointer2) {
        pointer2 = pointer2.next;
      }
      pointer1 = pointer1.next;
      index++;
    }
    // delete node
    pointer2.next = pointer2.next.next;
  }

  // apply fn to every node, mutating the nodes
  map(fn: Function) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (fn(current.data, index)) {
        current.data = fn(current.data, index);
      }
      current = current.next;
      index++;
    }
  }

  // print the nodes in reverse
  printReverse() {
    let collector: Array<T> = [];
    let current = this.head;
    while (current) {
      collector.push(current.data);
      current = current.next;
    }
    for (let data of collector.reverse()) {
      console.log(data);
    }
  }

  reverse() {
    let current = this.head;
    let prevNode: Node<T>;
    while(current) {
      let temp = current.next;
      current.next = prevNode;
      prevNode = current;
      current = temp
    }
    this.head = prevNode;
  }
}
class Node<T> {
  data: T;
  next: Node<T>;
  constructor(data: T, next = null) {
    this.data = data;
    this.next = next;
  }
}
