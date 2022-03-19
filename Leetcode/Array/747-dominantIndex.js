var dominantIndex = function (nums) {
  //option 1 - one pass with 2 var, max, secMax
  //Time: O(n), Sapce: O(1)
  /*
  let max = Number.MIN_SAFE_INTEGER;
  let secMax = Number.MIN_SAFE_INTEGER;
  let maxIdx = -1;

  for (let i = 0; i < nums.length; i++) {
    //if current val > max
    if (nums[i] > max) {
      //copy max into second max
      secMax = max;
      //update max
      max = nums[i];
      //update max index to return
      maxIdx = i;
    } else if (nums[i] > secMax) {
      //update second max IF current val > second max, but < max
      secMax = nums[i];
    }
  }

  return secMax <= max / 2 ? maxIdx : -1;
  */

  //option 2 - two pass, 1st find highest, 2nd compare all values * 2 > max
  //Time: O(n + n) = O(n), Space: O(1)
  let max = Number.MIN_SAFE_INTEGER;
  let maxIdx = -1;

  //find max value in one pass
  for (let i = 0; i < nums.length; i++) {
    //update max value and index if new max is found
    if (nums[i] > max) {
      max = nums[i];
      maxIdx = i;
    }
  }

  //compare each element to ensure all values * 2 > max
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIdx && nums[i] * 2 > max) {
      //return -1 IF any element is larger than half of max && not equal max itself
      return -1;
    }
  }

  return maxIdx;
};

console.log(dominantIndex([3, 6, 1, 0])); //1
console.log(dominantIndex([1, 2, 3, 4])); //-1
console.log(dominantIndex([1])); //0
