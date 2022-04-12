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

//option 1 - find mid node, reverse 2nd half, compare 1st & 2nd together with pointers
//Time: O(n + n + n) = O(n), Space: O(1)
var isPalindrome = function (head) {
  if (head === null) return true;

  let getEndOfFirstHalf = function (head) {
    let fp = head;
    let sp = head;

    //fp move forward 2 steps, sp move forward 1 step
    while (fp.next && fp.next.next) {
      fp = fp.next.next;
      sp = sp.next;
    }

    return sp;
  };

  let getReverseList = function (head) {
    let curr = head;
    let prev = null;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  };

  //find the half of linkedlist
  let firstHalfEnd = getEndOfFirstHalf(head);

  //reverse 2nd half
  let secondHalfStart = getReverseList(firstHalfEnd.next);

  //compare 1st and 2nd(reversed) with two pointers
  let p1 = head;
  let p2 = secondHalfStart;

  while (p1 && p2) {
    //return false if not match
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  //restore list if needed
  // firstHalfEnd.next = getReverseList(secondHalfStart);

  return true;
};

const odds = new LinkedList();
odds.push(1);
odds.push(2);
odds.push(2);
odds.push(1);

console.log(isPalindrome(odds.head)); //true

const odds2 = new LinkedList();
odds2.push(1);
odds2.push(2);

console.log(isPalindrome(odds2.head)); //false

/*
//option 2 - regression, store front pointer for later comparison, move to end, return false if not match
//Time: O(n), Space: O(n)
var isPalindrome = function (head) {
  //EXCEPTION case: IF head is null THEN return true
  if (head === null) return true;

  //SET FP = HEAD for later comparison
  let fp = head;

  //CREATE helperFn(curr) to visit until the end
  let helperFn = function (curr) {
    //IF curr !== null, non-last element, perform comparison
    if (curr !== null) {
      //IF helperFn(curr.next) = false THEN RETURN false for move forward to end, previous comparison is not match
      if (!helperFn(curr.next)) return false;

      //IF FP.val = curr.val = false THEN RETURN false for comparing two pointer (left & right from recursive return)
      if (fp.val !== curr.val) return false;

      //SET FP = FP.next to move forward
      fp = fp.next;
    }

    //END IF
    //RETURN true for last +1 node && is match cases
    return true;
  };

  //INVOKE helperFn(head)
  return helperFn(head);
};

const odds = new LinkedList();
odds.push(1);
odds.push(2);
odds.push(2);
odds.push(1);

console.log(isPalindrome(odds.head)); //true

const odds2 = new LinkedList();
odds2.push(1);
odds2.push(2);

console.log(isPalindrome(odds2.head)); //false
*/
