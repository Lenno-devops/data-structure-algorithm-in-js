//option 1 - if curr char is NOT closing, push into stack. IF closing, checking stack last element is expected opening.
//Time: O(n) , Space: O(n+3)
var isValid = function (s) {
  if (s.length % 2 === 1) return false;

  let map = new Map();
  map.set("]", "[");
  map.set("}", "{");
  map.set(")", "(");

  let stackArr = [];
  for (char of s) {
    if (map.has(char)) {
      //closing
      if (
        stackArr.length === 0 ||
        map.get(char) !== stackArr[stackArr.length - 1]
      ) {
        return false; //not same as expected opening
      }

      stackArr.pop();
    } else {
      //opening
      stackArr.push(char);
    }
  }
  return stackArr.length === 0;
};

s = "()";
console.log(isValid(s)); //true

s = "()[]{}";
console.log(isValid(s)); //true

s = "(([{}[]]))[]{}";
console.log(isValid(s)); //true

s = "(]";
console.log(isValid(s)); //false

////////////
