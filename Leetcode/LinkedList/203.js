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

//option 1 - one pointer, check next is match, temp set next = next.next position, OR actual move forward
//Time: O(N), Space: O(1)
var removeElements = function (head, val) {
  //set dummy node
  let dummy = new ListNode();
  //point next to head for comparison
  dummy.next = head;

  let curr = dummy;
  while (curr.next != null) {
    //til the last node
    if (curr.next.val === val) {
      curr.next = curr.next.next; //set next pointer temporarily OR to tail
    } else {
      curr = curr.next; //actual move forward
    }
  }

  //return next
  return dummy.next;
};

const odds = new LinkedList();
odds.push(1);
odds.push(2);
odds.push(6);
odds.push(3);
odds.push(4);
odds.push(5);
odds.push(6);

console.log(convertLLToArr(removeElements(odds.head, 6))); //[1, 2, 3, 4, 5]

const odds2 = new LinkedList();
odds2.push(7);
odds2.push(7);
odds2.push(7);
odds2.push(7);

console.log(convertLLToArr(removeElements(odds2.head, 7))); //[]

/*
//option 2 - two pointers, fast slow pointer
//Time: O(N) , Space: O(1)
var removeElements = function (head, val) {
  //set dummy node
  let dummy = new ListNode();
  dummy.next = head;

  let prev = dummy;
  let curr = head;

  while (curr != null) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return dummy.next;
};

const odds = new LinkedList();
odds.push(1);
odds.push(2);
odds.push(6);
odds.push(3);
odds.push(4);
odds.push(5);
odds.push(6);

console.log(convertLLToArr(removeElements(odds.head, 6))); //[1, 2, 3, 4, 5]

const odds2 = new LinkedList();
odds2.push(7);
odds2.push(7);
odds2.push(7);
odds2.push(7);

console.log(convertLLToArr(removeElements(odds2.head, 7))); //[]
*/

/*
//option 3 - recursive
//Time: O(N) , Space: O(N)
var removeElements = function (head, val) {
  if (head === null) return null; //tail case

  //pass to the last item, return from last
  let prevPointer = removeElements(head.next, val);
  if (val === head.val) {
    //if curr is target to be removed, skill return iteself and forward last round node
    return prevPointer;
  }

  head.next = prevPointer; //set next to last round pointer
  return head;
};

const odds = new LinkedList();
odds.push(1);
odds.push(2);
odds.push(6);
odds.push(3);
odds.push(4);
odds.push(5);
odds.push(6);

console.log(convertLLToArr(removeElements(odds.head, 6))); //[1, 2, 3, 4, 5]

const odds2 = new LinkedList();
odds2.push(7);
odds2.push(7);
odds2.push(7);
odds2.push(7);

console.log(convertLLToArr(removeElements(odds2.head, 7))); //[]
*/
