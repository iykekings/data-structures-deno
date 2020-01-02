class Node<T> {
  constructor(public data: T, public next?: Node<T>, public prev?: Node<T>) {}
  swap(other: Node<T>) {
    let temp = this.data;
    this.data = other.data;
    other.data = temp;
  }
  insertAfter(value: T) {
    let next = this.next;
    this.next = new Node(value, next, this);
    if(next) next.prev = this.next;
  }
  insertBefore(value: T) {
    let prev = this.prev;
    this.prev = new Node(value, this, prev);
    if(prev) prev.next = this.prev;
  }
}

export class DoublyLinkedList<T> {
  head: Node<T>;
  tail: Node<T>;

  insertHead(data: T) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let next = this.head;
      this.head = new Node(data, next);
      next.prev = this.head;
    }
  }

  // Inserts node at a position or at the end if position is not provided
  insertNode(data: T, position?: number) {
    if (!this.head) {
      this.insertHead(data);
      return;
    }
    let node = new Node(data);
    let current = this.head;
    if (!position) {
      while (current) {
        if (!current.next) {
          node.prev = current;
          current.next = node;
          break;
        }
        current = current.next;
      }
    } else {
      let index = 1;
      while (current.next) {
        if (index === position) {
          node.prev = current;
          if (current.next) {
            node.next = current.next;
            node.next.prev = node;
          }
          current.next = node;
          break;
        }
        current = current.next;
        index += 1;
      }
    }
  }

  // Insert in sorted position
  sortedInsert(data: T) {
    if (!this.head) {
      this.head = new Node(data);
    } else if (this.head.data >= data) {
      let newNode = new Node(data, this.head);
      newNode.next.prev = newNode;
    } else {
      let current = this.head;
      while (current !== null) {
        if (current.data <= data && !current.next) {
          let newNode = new Node(data, current.next, current);
          current.next = newNode;
          break;
        }
        if (current.data <= data && current.next.data >= data) {
          let newNode = new Node(data, current.next, current);
          current.next.prev = newNode;
          current.next = newNode;
          break;
        }
        current = current.next;
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
        if (current.next) {
          current.next.prev = current;
        }
      }
      current = current.next;
      index++;
    }
  }

  // Getting a node at an index from the back in O(n)
  deleteNodeFromBack(position = 0) {
    let pointer1 = this.head;
    let index = 0;
    let pointer2: Node<T>;
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
  map(fn: (data: T, index: number) => any) {
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

  // reverse
  reverse() {
    let current = this.head;
    let prevNode: Node<T>;
    while (current) {
      let temp = current.next;
      current.next = prevNode;
      prevNode = current;
      current = temp;
    }
    this.head = prevNode;
  }
}
