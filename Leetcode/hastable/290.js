//option 1 - hashmap <value,key> + set<key>, if key exist in SET with diff value then return false, IF key not exist in SET but exist in MAP then return false;
//Time: O(p+s) , Space: O(p+s+k)
var wordPattern = function (pattern, s) {
  //each char in pattern represent a single word in s

  let pSet = new Set();
  //create hashmap <pattern, s>
  let map = new Map();
  //split s with space into array
  let sArr = s.split(" ");

  if (pattern.length !== sArr.length) return false;

  //FOR i = 0, i < pattern.length
  for (let i = 0; i < pattern.length; i++) {
    let token = pattern[i];
    let word = sArr[i];

    //IF token already exist in SET
    if (pSet.has(token)) {
      //IF map's val != current token value THEN return false
      if (map.get(word) !== token) return false;
    } else {
      //IF token not in SET but map contains this word, it means other token store same value
      if (map.has(word)) return false;
      //ELSE
      pSet.add(token);
      //put into hash map
      map.set(word, token);
    } //END IF
  } //END FOR

  return true;
};

let pattern = "abba",
  s = "dog cat cat dog";
console.log(wordPattern(pattern, s)); //true

(pattern = "abba"), (s = "dog cat cat fish");
console.log(wordPattern(pattern, s)); //false

(pattern = "aaaa"), (s = "dog cat cat dog");
console.log(wordPattern(pattern, s)); //false

(pattern = "abba"), (s = "dog dog dog dog");
console.log(wordPattern(pattern, s)); //false

(pattern = "aba"), (s = "cat cat cat dog");
console.log(wordPattern(pattern, s)); //false

/*
//option 2 - two hashmap
//Time: O(p+s) , Space: O(p+s)
var wordPattern = function (pattern, s) {
  let p2sMap = new Map();
  let s2pMap = new Map();

  //split s with space into array
  let sArr = s.split(" ");

  if (pattern.length !== sArr.length) return false;

  //FOR i = 0, i < pattern.length
  for (let i = 0; i < pattern.length; i++) {
    let patChar = pattern[i];
    let sWord = sArr[i];
    if (
      (p2sMap.has(patChar) && p2sMap.get(patChar) !== sWord) ||
      (s2pMap.has(sWord) && s2pMap.get(sWord) !== patChar)
    ) {
      return false;
    }

    p2sMap.set(patChar, sWord);
    s2pMap.set(sWord, patChar);
  } //END FOR

  return true;
};

let pattern = "abba",
  s = "dog cat cat dog";
console.log(wordPattern(pattern, s)); //true

(pattern = "abba"), (s = "dog cat cat fish");
console.log(wordPattern(pattern, s)); //false

(pattern = "aaaa"), (s = "dog cat cat dog");
console.log(wordPattern(pattern, s)); //false

(pattern = "abba"), (s = "dog dog dog dog");
console.log(wordPattern(pattern, s)); //false

(pattern = "aba"), (s = "cat cat cat dog");
console.log(wordPattern(pattern, s)); //false
*/
