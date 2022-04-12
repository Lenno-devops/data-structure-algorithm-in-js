/*
//option 1 - compare horizontally, set prefix as first word, compare with next, shorten from right(end) and re-compare
//may waste time if 1...N-1 is very long prefix, but last element is a very short string (e.g. 1 char)
//Time: O(S) , Space: O(1)
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";

  let prefix = strs[0]; //set 1st char as prefix

  for (let i = 1; i < strs.length; i++) {
    const word = strs[i]; //compare each word from left to right

    while (!word.startsWith(prefix)) {
      //check if prefix exist in current char
      prefix = prefix.slice(0, prefix.length - 1); //shorten prefix from right
      if (prefix.length === 0) return ""; //prefix not exist
    }
  }

  return prefix;
};

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); //fl

strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs)); //""
*/
////////////

/*
//option 2 - vertical comparison, take 1st word length as loop count, each char compare with ALL words char, return if not match OR > words length
//To solve last element is a very short string issue
//Time: O(S) , Space: O(1)
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const currChar = strs[0].charAt(i); //select each char of 1st word
    
    for (let j = 1; j < strs.length; j++) { //compare with each word
      if (strs[j].length === i || strs[j].charAt(i) !== currChar) { //meet word length OR not match
        return strs[0].slice(0, i); //return last match prefix
      }
    }
  }

  return strs[0];
};

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); //fl

strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs)); //""

*/
////////////
/*
//option 3 - divide and conquer, compare with subset
//Time: O(n) -> 2 (n/2) + m)  , Space: O(m log n)
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";

  let helperFn = function (strs, left, right) {
    if (left >= right) return strs[left];

    const mid = Math.floor((left + right) / 2);
    const resLeft = helperFn(strs, left, mid);
    const resRight = helperFn(strs, mid + 1, right);
    return getCommonPrefix(resLeft, resRight);
  };

  let getCommonPrefix = function (left, right) {
    let length = Math.min(left.length, right.length);

    for (let i = 0; i < length; i++) {
      if (left[i] !== right[i]) {
        return left.slice(0, i);
      }
    }
    return left.slice(0, length);
  };

  return helperFn(strs, 0, strs.length - 1);
};

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); //fl

strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs)); //""
*/

////////////////

/*
//option 4 - binary search, find min word length, find mid, see if 0 - mid is common in all words, IF yes then increase mid, IF no then decrease mid length
//Time: O(n log m), Space: O(1)
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";

  
  let isCommonPrefix = function (midIdx) {
    let prefix = strs[0].slice(0, midIdx);
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(prefix)) {
        return false;
      }
    }
    return true;
  };

  let left = 0;
  let right = Math.min(...strs.map((word) => word.length));

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (isCommonPrefix(mid)) {
      left = mid + 1; //extend prefix size
    } else {
      right = mid - 1; //shortern prefix size
    }
  }
  return strs[0].slice(0, Math.floor((left + right) / 2));
};

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); //fl

strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs)); //""
*/

////////////////

//option 5 - sorting, compare 1st & last element each char, if match then move to next char
//Time: O(n log n), Space: O(1)
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";

  strs.sort();

  let idx = 0;
  while (idx < strs[0].length) {
    if (strs[0].charAt(idx) === strs[strs.length - 1].charAt(idx))
      idx++; //compare each char between 1st & last element
    else break;
  }

  return strs[0].slice(0, idx);
};

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs)); //fl

strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs)); //""
