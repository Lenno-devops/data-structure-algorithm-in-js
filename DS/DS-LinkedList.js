class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    let newNode = new ListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  getNode(index) {
    if (index < 0 || index >= this.length) return null;
    let node = this.head;
    let currIndex = 0;
    while (currIndex < index) {
      currIndex++;
      node = node.next;
    }
    return node;
  }

  insert(index, data) {
    if (index > this.length) {
      this.append(data);
      return;
    }

    let newNode = new ListNode(data);

    if (index <= 0) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let previousNode = this.getNode(index - 1);
      let nextNode = previousNode.next;

      previousNode.next = newNode;
      newNode.next = nextNode;

      newNode.prev = previousNode;

      if (index === this.length) {
        this.tail = newNode;
      } else {
        nextNode.prev = newNode;
      }
    }
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      let prevNode = this.getNode(index - 1);
      prevNode.next = prevNode.next.next;

      if (index === this.length - 1) {
        this.tail = prevNode;
      } else {
        prevNode.next.prev = prevNode;
      }
    }
    this.length--;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    const temp = [];

    let node = this.head;
    while (node != null) {
      temp.push(node.data);
      node = node.next;
    }

    return temp.join(" -> ");
  }
  printReverse() {
    const temp = [];

    let node = this.tail;
    while (node != null) {
      temp.push(node.data);
      node = node.prev;
    }

    return temp.reverse().join(" <- ");
  }
}

const list = new LinkedList();

list.append("data1");
list.append("data2");
list.append("data3");
console.log(list.print()); // 'data1 > data2 > data3'
console.log(list.printReverse());

list.insert(0, "a");
console.log(list.print()); // 'a, data1, data2, data3'
console.log(list.printReverse());
list.insert(4, "b");
console.log(list.print()); // 'a, data1, data2, data3, b'
console.log(list.printReverse());
list.insert(2, "c");
console.log(list.print()); // 'a, data1, c, data2, data3, b'
console.log(list.printReverse());
list.removeAt(0);
console.log(list.print()); // 'data1, c, data2, data3, b'
console.log(list.printReverse());
list.removeAt(4);
console.log(list.print()); // 'data1, c, data2, data3'
console.log(list.printReverse());
list.removeAt(1);
console.log(list.print()); // 'data1, data2, data3'
console.log(list.printReverse());
