/*
//option 1 map to +1 & -1 at the same time
//Time: O(s + t) , Space: O(s)
var findTheDifference = function (s, t) {
  //t = s + 1 char
  //use a hash map to store frequency
  //store S in map first, then loop through t to check which char does not exist

  //prepare a map to store S
  //loop to put all items in S to map
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
    char = t[i];
    map.set(char, map.has(char) ? map.get(char) - 1 : -1);
  }

  //last element in t
  let char = t[t.length - 1];
  map.set(char, map.has(char) ? map.get(char) - 1 : -1);

  //loop through map
  let result = null;
  map.forEach((values, key) => {
    if (values < 0) {
      result = key;
      return;
    }
  });

  return result;
};

console.log(findTheDifference("abcd", "abcde")); //e
console.log(findTheDifference("", "y")); //y
console.log(findTheDifference("a", "aa")); //y

*/

//option 2 sort array
//Time: O(n log n) , Space: O(s+t)
var findTheDifference = function (s, t) {
  //conver to array, sort two arrays
  let sArr = s.split("").sort();
  let tArr = t.split("").sort();

  //FOR i = 0; < s.length
  for (let i = 0; i < sArr.length; i++) {
    //IF s[i] !== t[i] return t[i]
    if (sArr[i] !== tArr[i]) return tArr[i];
  }

  //IF not return in previous, must be last digit of t
  return tArr[tArr.length - 1];
};

console.log(findTheDifference("abcd", "abcde")); //e
console.log(findTheDifference("", "y")); //y
console.log(findTheDifference("a", "aa")); //a
console.log(findTheDifference("ae", "aea")); //a

/*
//option 3 - fixed char arry 
//Time: O(s + s) = O(s) , Space: O(1)
var findTheDifference = function (s, t) {
  //prepare charArray for 26 char with 0
  let charArr = new Array(26).fill(0);

  //set aIdx for easier indexing
  let aIdx = "a".charCodeAt();

  //FOR char of s
  for (let i = 0; i < s.length; i++) {
    charArr[s[i].charCodeAt() - aIdx] += 1;
    charArr[t[i].charCodeAt() - aIdx] -= 1;
  }

  //add last element
  charArr[t[t.length - 1].charCodeAt() - aIdx] -= 1;

  //FOR char of charArray
  for (let i = 0; i < charArr.length; i++) {
    //return if any char value > 0
    if (charArr[i] < 0) return String.fromCharCode(i + aIdx);
  }
};

console.log(findTheDifference("abcd", "abcde")); //e
console.log(findTheDifference("", "y")); //y

*/
