const { Node } = require("./Node");
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  unshift(data) {
    let newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
    return newNode;
  }
  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }
  push(data) {
    if (!this.head) {
      return this.unshift(data);
    }
    let newNode = new Node(data);
    this.getLast().next = newNode;
    this.length++;
    return newNode;
  }
}

module.exports = LinkedList;
