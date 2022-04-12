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
//option 1 - one pointer
//Time: O(n), Space: O(1)
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head;

  let curr = head;
  while (curr !== null && curr.next != null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next; //update next node pointer to next position, wait for move forward
    } else {
      curr = curr.next; //move to next position
    }
  }

  return head;
};

const evens = new LinkedList();
evens.push(1);
evens.push(1);
evens.push(2);
evens.push(3);
evens.push(3);
console.log(convertLLToArr(deleteDuplicates(evens.head))); //[1, 2, 3]
*/

//option 2 - two pointers
//Time: O(n), Space: O(1)

var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head;

  let sp = head;
  let fp = head.next;

  while (fp !== null) {
    if (sp.val === fp.val) {
      sp.next = fp.next;
    } else {
      sp = sp.next;
    }
    fp = fp.next;
  }
  return head;
};

const evens = new LinkedList();
evens.push(1);
evens.push(1);
evens.push(2);
evens.push(3);
evens.push(3);
console.log(convertLLToArr(deleteDuplicates(evens.head))); //[1, 2, 3]
