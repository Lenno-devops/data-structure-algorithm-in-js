//option 1 - one pass, compare with previous, counter++ if match, return earlier if counter > threshold
//Time: O(n) , Space: O(1)
var findSpecialInteger = function (arr) {
  if (arr.length === 1) return arr[0];
  let tempCount = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      //if not match with previous
      tempCount = 0;
    }
    tempCount++;

    //early return if maxCount >= threshold
    if (tempCount >= arr.length / 4) return arr[i];
  }

  return -1;
};

let arr1 = [1, 2, 2, 6, 6, 6, 6, 7, 10];
console.log(findSpecialInteger(arr1)); //6

let arr2 = [1, 1];
console.log(findSpecialInteger(arr2)); //1

/*
//option 2 - sliding window
//Time: O(n) , Space: O(1)
var findSpecialInteger = function (arr) {
  if (arr.length === 1) return arr[0];

  let length = arr.length;
  let threshold = Math.floor(length / 4);

  for (i = 0; i < length - threshold; i++) {
    if (arr[i] === arr[i + threshold]) {
      //current value already same as curr + threshold value
      return arr[i];
    }
  }

  return null;
};

let arr1 = [1, 2, 2, 6, 6, 6, 6, 7, 10];
console.log(findSpecialInteger(arr1)); //6

let arr2 = [1, 1];
console.log(findSpecialInteger(arr2)); //1
*/
