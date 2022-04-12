/*
//option 1 - hashmap to store <key, count>, loop input from 1st, to filter freq === 1
//Time: O(n+n) , Space: O(n)
var firstUniqChar = function (s) {
  let countMap = new Map(); //key, count

  for (let i = 0; i < s.length; i++) {
    countMap.set(s[i], countMap.has(s[i]) ? countMap.get(s[i]) + 1 : 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (countMap.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};
s = "leetcode";
console.log(firstUniqChar(s)); //0

s = "loveleetcode";
console.log(firstUniqChar(s)); //2

s = "aabb";
console.log(firstUniqChar(s)); //-1
*/

//option 2 - fixed array
//Time: O(n) , Space: O(n)
var firstUniqChar = function (s) {
  //Create fixed array 26 prefill with 0
  let arr = new Array(26).fill(0);

  //prepare aIdx as "A" charcode
  let aIdx = "a".charCodeAt();

  //FOR i = 0 to s.length
  for (let i = 0; i < s.length; i++) {
    //SET idx = s[i].charcode - aIdx
    arr[s[i].charCodeAt() - aIdx] += 1;
  }

  //FOR i = 0 to s.length

  for (let i = 0; i < s.length; i++) {
    if (arr[s[i].charCodeAt() - aIdx] === 1) return i;
  }
  return -1;
};

s = "leetcode";
console.log(firstUniqChar(s)); //0

s = "loveleetcode";
console.log(firstUniqChar(s)); //2

s = "aabb";
console.log(firstUniqChar(s)); //-1
