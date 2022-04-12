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
//option 1 - get length, find diff, logner one move forward, compare together til end
//Time: O(M+N + N), Space: O(1)
var getIntersectionNode = function (headA, headB) {
  //find intersection - unknown A or B longer

  //detcet a & b size = O(m + n)
  //Find diff = abs(a - b sizes)
  //use two pointers, fp start from diff, sp start from shorter(a,b) = O(n)
  //move together and perform comparison
  let getLength = function (head) {
    let length = 0;
    while (head != null) {
      length++;
      head = head.next;
    }
    return length;
  };

  let lenA = getLength(headA); //get legnth
  let lenB = getLength(headB);

  while (lenA > lenB) {
    headA = headA.next; //move a forward
    lenA--;
  }

  while (lenB > lenA) {
    headB = headB.next; //move b forward
    lenB--;
  }

  while (headA != headB) {
    //equal found or meet tail at the end
    headA = headA.next;
    headB = headB.next;
  }

  return headA; //found or end
};

const odds = new LinkedList();
odds.push(4);
odds.push(1);
odds.push(8);
odds.push(4);
odds.push(5);

const evens = new LinkedList();
evens.push(5);
evens.push(6);
evens.push(1);
evens.push(8);
evens.push(4);
evens.push(5);
console.log(getIntersectionNode(odds.head, evens.head)); //1

*/

//option 2 - concat two list, diff will be cancelled and two list length become the same length
//e.g. 10 vs 7 => 10+7 vs 7+10
//Time: O(m+n) , Space: O(1)
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;

  while (pA !== pB) {
    //found or till end
    if (pA === null) {
      //when A finished, start to traverse B
      pA = headB; //must be headB to prevent wrong ref
    } else {
      pA = pA.next;
    }

    if (pB === null) {
      //when B finished, start to traverse A
      pB = headA; //must be headA to prevent wrong ref
    } else {
      pB = pB.next;
    }
  }

  return pA; //found or till end
};

const odds = new LinkedList();
odds.push(4);
odds.push(1);
odds.push(8);
odds.push(4);
odds.push(5);

const evens = new LinkedList();
evens.push(5);
evens.push(6);
evens.push(1);
evens.push(8);
evens.push(4);
evens.push(5);
console.log(getIntersectionNode(odds.head, evens.head)); //1
