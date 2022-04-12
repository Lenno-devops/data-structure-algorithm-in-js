/*
//option 1 hashmap
//Time: O(n) , Space: O(n)
var longestPalindrome = function (s) {
  if (s.length <= 1) return 1;

  //create map object
  let map = new Map();

  //counter to store total no. of even char
  let counter = 0;

  //FOR i = 0 to last char
  for(const ch of s) {
    //udpate map (key = char, value = frequency)
    let freq = 1;
    if (map.has(ch)) freq = map.get(ch) + 1;
    map.set(ch, freq);

    //IF frequency %2 = 0 THEN
    if (freq % 2 === 0) {
      //counter += 2
      counter += 2;
    }
  }

  //IF counter < total no. of char THEN
  if (counter < s.length) {
    //counter +1 - which indicate at least 1 odd number appear in map
    counter += 1;
  }
  //END IF

  //return count
  return counter;
};

console.log(longestPalindrome("abccccdd")); //7

console.log(longestPalindrome("a")); //1

console.log(longestPalindrome("bb")); //2

console.log(longestPalindrome("abccccdD")); //5

*/

//option 2 - sort array
//Time: O(n log n) , Space: O(1)
var longestPalindrome = function (s) {
  if (s.length <= 1) return 1;

  //Split string into array
  let charArr = s.split("");
  charArr.sort();

  //counter to store total no. of even char
  let counter = 0;
  let tempCount = 1;
  let prev = charArr[0];

  //FOR i = 0 to last char
  for (let i = 1; i < charArr.length; i++) {
    if (prev === charArr[i]) {
      tempCount += 1;
    } else {
      counter += tempCount % 2 === 1 ? tempCount - 1 : tempCount;
      tempCount = 1;
      prev = charArr[i];
    }
  }

  //meet the end
  if (tempCount > 0) {
    counter += Math.floor(tempCount / 2) * 2;
  }

  //IF counter < total no. of char THEN
  if (counter < charArr.length) {
    //counter +1 - which indicate at least 1 odd number appear in map
    counter += 1;
  }
  //END IF

  //return count
  return counter;
};

console.log(longestPalindrome("abccccdd")); //7

console.log(longestPalindrome("a")); //1

console.log(longestPalindrome("bb")); //2

console.log(longestPalindrome("abccccdD")); //5

console.log(longestPalindrome("bab")); //3

/*
//option 3 - fixed array
//Time: O(n) , Space: O(1)
var longestPalindrome = function (s) {
  if (s.length <= 1) return 1;

  let result = new Array(128).fill(0);

  //counter to store total no. of even char
  let counter = 0;

  //FOR i = 0 to last char
  for (const ch of s) {
    result[ch.charCodeAt()] += 1;
  }

  for (let i = 0; i < result.length; i++) {
    counter += result[i] % 2 === 1 ? result[i] - 1 : result[i];
  }

  //IF counter < total no. of char THEN
  if (counter < s.length) {
    //counter +1 - which indicate at least 1 odd number appear in map
    counter += 1;
  }
  //END IF

  //return count
  return counter;
};

console.log(longestPalindrome("abccccdd")); //7

console.log(longestPalindrome("a")); //1

console.log(longestPalindrome("bb")); //2

console.log(longestPalindrome("abccccdD")); //5

console.log(longestPalindrome("bab")); //3
*/

/*
//option 4 - set
//Time: O(n) , Space: O(n)
var longestPalindrome = function (s) {
  if (s.length <= 1) return 1;

  //create map object
  let set = new Set();

  //counter to store total no. of even char
  let counter = 0;

  //FOR i = 0 to last char
  for (const ch of s) {
    if (set.has(ch)) {
      set.delete(ch);
      counter += 2;
    } else {
      set.add(ch);
    }
  }

  return set.size >= 1 ? counter + 1 : counter;
};

console.log(longestPalindrome("abccccdd")); //7

console.log(longestPalindrome("a")); //1

console.log(longestPalindrome("bb")); //2

console.log(longestPalindrome("abccccdD")); //5
*/
