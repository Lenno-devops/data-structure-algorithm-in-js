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

/*
//option 1 -
//Time: , Space:
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next; //store next to keep tracing & prevent loss in following assignment
    curr.next = prev; //point curr item's next to previous item
    prev = curr; //set prev = curr item for next round
    curr = next; //set curr = next item for next round
  }

  return prev; //return last curr as head
};

const odds = new LinkedList();
odds.push(1);
odds.push(2);
odds.push(3);
odds.push(4);
console.log(convertLLToArr(reverseList(odds.head))); //[4,3,2,1]

const odds2 = new LinkedList();

console.log(convertLLToArr(reverseList(odds2.head))); //[]
*/

//option 2 - recursive
//Time: , Space:
var reverseList = function (head) {
  return helperFn(head, null); //push current, null to next node
};

var helperFn = function (curr, prev) {
  if (curr === null) return prev; //last item + 1 = null, return prev (last item)

  let next = curr.next; //store next to keep tracing & prevent loss in following assignment
  curr.next = prev; //point curr item's next to previous item
  return helperFn(next, curr); //continue on next node with next node as Current & curr as Prev
};

const odds = new LinkedList();
odds.push(1);
odds.push(2);
odds.push(3);
odds.push(4);
console.log(convertLLToArr(reverseList(odds.head))); //[4,3,2,1]

const odds2 = new LinkedList();

console.log(convertLLToArr(reverseList(odds2.head))); //[]
