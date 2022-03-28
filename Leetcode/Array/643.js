/*
//option 1 - brute force
//Time: O(N * K), Space: O(1)
var findMaxAverage = function (nums, k) {
  let maxAvg = Number.MIN_SAFE_INTEGER;
  let tempAvg = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i <= nums.length - k; i++) {
    //cal total and average
    tempAvg = 0;
    for (let j = i; j <= i + k - 1; j++) {
      tempAvg += nums[j];
    }
    tempAvg /= k;

    //update maxAvg if > tempAvg
    maxAvg = Math.max(maxAvg, tempAvg);
  }

  return maxAvg;
};

let arr1 = [1, 12, -5, -6, 50, 3];
console.log(findMaxAverage(arr1, 4)); //12.75000

let arr2 = [5];
console.log(findMaxAverage(arr2, 1)); //5.00000

*/

/*
//option 2 - dp, summ all values, use sliding window method to extract corresponding range
//Time: O(N + N) = O(N), Space: O(N)
var findMaxAverage = function (nums, k) {
  let maxAvg = Number.MIN_SAFE_INTEGER;
  let sumArr = [nums[0]];

  //calculate sum array for each item
  for (let i = 1; i < nums.length; i++) {
    sumArr[i] = sumArr[i - 1] + nums[i]; //current sum = prev sum + current value
  }

  //find max avg
  maxAvg = sumArr[k - 1] / k; //first slot (no need to slide out)
  for (let i = k; i < nums.length; i++) {
    //update maxAvg if > (current sum value - first sum value) / k
    maxAvg = Math.max(maxAvg, (sumArr[i] - sumArr[i - k]) / k);
  }

  return maxAvg;
};

let arr1 = [1, 12, -5, -6, 50, 3];
console.log(findMaxAverage(arr1, 4)); //12.75000

let arr2 = [5];
console.log(findMaxAverage(arr2, 1)); //5.00000
*/

//option 3 - sliding window, cal up to k sum, add new item & exclude old item to recalculate
//Time: O(N), Space: O(1)
var findMaxAverage = function (nums, k) {
  let maxAvg = Number.MIN_SAFE_INTEGER;
  let tempSum = 0;

  //calc sum from 0 to K
  for (let i = 0; i < k; i++) {
    tempSum += nums[i];
  }

  //calc avg of k
  maxAvg = tempSum / k;

  //calc avg by using sliding windows
  for (let i = k; i < nums.length; i++) {
    tempSum = tempSum + nums[i] - nums[i - k]; //include new item, exclude 1st item
    maxAvg = Math.max(maxAvg, tempSum / k);
  }

  return maxAvg;
};

let arr1 = [1, 12, -5, -6, 50, 3];
console.log(findMaxAverage(arr1, 4)); //12.75000

let arr2 = [5];
console.log(findMaxAverage(arr2, 1)); //5.00000
