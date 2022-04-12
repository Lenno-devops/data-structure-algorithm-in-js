/*
//option 1 - store key, freq in hashmap
//Time: O(n) , Space: O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    map.set(t[i], map.has(t[i]) ? map.get(t[i]) - 1 : -1);
  }

  for (const [key, value] of map.entries()) {
    if (value !== 0) return false;
  }

  return true;
};

let s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t)); //true

(s = "rat"), (t = "car");
console.log(isAnagram(s, t)); //false
*/

/*
//option 2 - fixed array
//Time: O(n + n) , Space: O(1)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let arr = new Array(26).fill(0);
  let aIdx = "a".charCodeAt();

  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - aIdx] += 1;
    arr[t[i].charCodeAt() - aIdx] -= 1;
  }

  for (val of arr) {
    if (val !== 0) return false;
  }

  return true;
};

let s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t)); //true

(s = "rat"), (t = "car");
console.log(isAnagram(s, t)); //false
*/

//option 3 - sort 2 array, compare both with two pointers
//Time: O(n log n) , Space: O(1)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sArr = s.split("").sort();
  let tArr = t.split("").sort();

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== tArr[i]) return false;
  }

  return true;
};

let s = "anagram",
  t = "nagaram";
console.log(isAnagram(s, t)); //true

(s = "rat"), (t = "car");
console.log(isAnagram(s, t)); //false
