//option 1 - create 3 set to represent 3 rows, use 1st char of each word to find belongs to which set, continue find remaining exist in same set.
//Time: O(n) , Space: O(26)
var findWords = function (words) {
  //prepare map 1, 2, 3 whic represent each rows
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  //prepare result array for return
  let result = [];

  let findRowBy1stChar = function (firstChar) {
    if (row1.has(firstChar)) return row1;
    if (row2.has(firstChar)) return row2;
    return row3;
  };

  //loop each word
  for (word of words) {
    wordLower = word.toLowerCase();
    //use 1st char to find corresponding map
    let targetRow = findRowBy1stChar(wordLower.charAt(0));

    //set counter = 0
    let counter = 0;
    let isValid = true;

    //loop each char in word
    for (chr of wordLower) {
      //if any char not exist in map then break
      if (!targetRow.has(chr)) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      // push in result array
      result.push(word);
    }
  }

  return result;
};

let words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));

let words2 = ["omk"];
console.log(findWords(words2));

let words3 = ["adsdf", "sfd"];
console.log(findWords(words3));

/*
//option 2 - manually convert a-z to corresponding row number, find 1st char belongs to which row, continue examine remaining
//Time: O(n) , Space: O(26)
var findWords = function (words) {
  //convert a-z to corresponding row number
  const rowIdx = "12210111011122000010020202";
  const aIdx = "a".charCodeAt();

  //prepare result array for return
  let result = [];

  //loop each word
  for (word of words) {
    wordLower = word.toLowerCase();
    //use 1st char to find corresponding row
    let targetRow = rowIdx[wordLower.charAt(0).charCodeAt() - aIdx];

    //set counter = 0
    let counter = 0;
    let isValid = true;

    //loop each char in word
    for (chr of wordLower) {
      //if any char not exist in same row then break
      if (rowIdx[chr.charCodeAt() - aIdx] !== targetRow) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      // push in result array
      result.push(word);
    }
  }

  return result;
};

let words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));

let words2 = ["omk"];
console.log(findWords(words2));

let words3 = ["adsdf", "sfd"];
console.log(findWords(words3));
*/
