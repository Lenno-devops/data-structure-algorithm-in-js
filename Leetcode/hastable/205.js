/*
//option 1 - two hash map to remember both s2t & t2s mapping
//Time: O(n) , Space: O(n)
var isIsomorphic = function (s, t) {
  let s2tMap = new Map();
  let t2sMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (
      (s2tMap.has(s[i]) && s2tMap.get(s[i]) !== t[i]) ||
      (t2sMap.has(t[i]) && t2sMap.get(t[i]) !== s[i])
    ) {
      return false;
    }

    s2tMap.set(s[i], t[i]);
    t2sMap.set(t[i], s[i]);
  }
  return true;
};

let s = "egg",
  t = "add";
console.log(isIsomorphic(s, t)); //true

(s = "foo"), (t = "bar");
console.log(isIsomorphic(s, t)); //false

(s = "paper"), (t = "title");
console.log(isIsomorphic(s, t)); //true

*/
//option 2 - fixed array
//Time: O(n) , Space: O(1)
var isIsomorphic = function (s, t) {
  let sArr = new Array(256).fill(-1);
  let tArr = new Array(256).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i].charCodeAt();
    let tChar = t[i].charCodeAt();
    if (
      (sArr[sChar] !== -1 && sArr[sChar] !== tChar) ||
      (tArr[tChar] !== -1 && tArr[tChar] !== sChar)
    ) {
      return false;
    }

    if (sArr[sChar] === -1 && tArr[tChar] === -1) {
      sArr[sChar] = tChar;
      tArr[tChar] = sChar;
    }
  }
  return true;
};

let s = "egg",
  t = "add";
console.log(isIsomorphic(s, t)); //true

(s = "foo"), (t = "bar");
console.log(isIsomorphic(s, t)); //false

(s = "paper"), (t = "title");
console.log(isIsomorphic(s, t)); //true
