/*
//option 1 - calc sum, loop to check if leftSum = rightSum(Sum - leftSum - current), if not match update leftSum += current
//Time: O(n) , Space: O(1)
var pivotIndex = function (nums) {
  let sum = nums.reduce((a, b) => a + b);

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
};

let arr1 = [1, 2, 3];
console.log(pivotIndex(arr1)); //-1

let arr2 = [2, 1, -1];
console.log(pivotIndex(arr2)); //0

let arr3 = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(arr3)); //3
*/
