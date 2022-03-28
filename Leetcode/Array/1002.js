//option 1 - cal each word's char appear frequency, compare with min frequency across all words, print each char in last stage
//Time: O(n * (m + Z)) , Space: O(Z), n = no. of words, m = avg length of each word, Z = a-z = 26
var commonChars = function (words) {
  let result = [];
  let minFreq = new Array(26).fill(Number.MAX_SAFE_INTEGER);
  let aIdx = "a".charCodeAt(); //convert a to char 97

  //calc each word characters exist frequency, update minFreq if char exist in previous but not current
  for (let word of words) {
    let freq = new Array(26).fill(0); //default = 0
    for (let char of word) {
      let idx = char.charCodeAt() - aIdx; //get char code (number) of current character (97 + n) - a char code (97)
      freq[idx] += 1; //update frequency
    }

    //after calc frequency of each word, see if char frquency exist in previous but not in current
    for (let i = 0; i < 26; i++) {
      minFreq[i] = Math.min(minFreq[i], freq[i]); //if prev minFreq[0] = 1, current freq[0] = 0, update as 0 as it does not exist
    }
    //continue checking for remaining words
  }

  //after comparison, print all chars
  for (let i = 0; i < 26; i++) {
    //some characters exist > 1 times, print repeatly with from char code (e.g. 97 -> a)
    for (let j = 0; j < minFreq[i]; j++) {
      result.push(String.fromCharCode(i + aIdx));
    }
  }

  return result;
};

let arr1 = ["bella", "label", "roller"];
console.log(commonChars(arr1)); //["e","l","l"]

let arr2 = ["cool", "lock", "cook"];
console.log(commonChars(arr2)); // ["c","o"]
