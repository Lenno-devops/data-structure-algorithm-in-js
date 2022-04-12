class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
module.exports = { ListNode, Node };
