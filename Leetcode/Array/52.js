//option 1 -
//Time: , Space:
var maxSubArray = function (nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] = nums[i - 1] + nums[i];
    }
    max = Math.max(max, nums[i]);
  }
  return max;
};

let arr1 = [5, 4, -1, 7, 8];
console.log(maxSubArray(arr1)); //23

let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr2)); //fslse
