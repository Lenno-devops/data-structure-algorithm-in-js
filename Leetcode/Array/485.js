//option 1 - one pass
//Time: O(n) , Space: O(1)
var findMaxConsecutiveOnes = function (nums) {
  let counter = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter += 1;
      maxCount = Math.max(maxCount, counter);
    } else {
      counter = 0;
    }
  }

  return maxCount;
};

let arr1 = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(arr1)); //3

let arr2 = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(arr2)); //2

// let arr3 = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4];
// console.log(findMaxConsecutiveOnes(arr3)); //true
