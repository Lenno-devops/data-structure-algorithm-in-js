//option 1 -
//Time: , Space:
var findLengthOfLCIS = function (nums) {
  let counter = 1;
  let maxCounter = 1;

  for (let i = 1; i < nums.length; i++) {
    counter = nums[i - 1] < nums[i] ? counter + 1 : 1;
    maxCounter = Math.max(maxCounter, counter);
  }

  return maxCounter;
};

let arr1 = [1, 3, 5, 4, 7];
console.log(findLengthOfLCIS(arr1)); //3

let arr2 = [2, 2, 2, 2, 2];
console.log(findLengthOfLCIS(arr2)); //1

let arr3 = [5, 4, 3, 2, 1];
console.log(findLengthOfLCIS(arr3)); //1
