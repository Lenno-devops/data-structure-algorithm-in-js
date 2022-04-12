const { Node, ListNode } = require("./Node");
const LinkedList = require("./LinkedList");
function convertLLToArr(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

//option 1 -
//Time: , Space:
var hasCycle = function (head) {
  //traverse list using two pointers to detect a cycle
  //fast move 2 steps while slow move 1 step forward
  //if fp === sp, return true
  let sp = head;
  let fp = head;

  while (fp !== null && fp.next !== null) {
    sp = sp.next;
    fp = fp.next.next;
    if (sp === fp) return true;
  }

  return false;
};

const odds = new LinkedList();
odds.push(3);
let temp1 = odds.push(2);
odds.push(0);
let temp2 = odds.push(4);
temp2.next = temp1;

console.log(hasCycle(odds.head)); //true

const odds2 = new LinkedList();
odds2.push(3);
let tempA = odds2.push(2);
odds2.push(0);
let tempB = odds2.push(4);

console.log(hasCycle(odds2.head)); //false
