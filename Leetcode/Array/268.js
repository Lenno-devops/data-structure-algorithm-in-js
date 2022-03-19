/*
//option 1 - 1st loop put value in hash map, 2nd loop to find missing
//Time: O(2n) = O(N), Space: O(m)
var missingNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }

  for (let i = 0; i < nums.length; i++) {
    if (map[i] === undefined) return i;
  }

  //if last number is missing
  return nums.length;
};

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([0, 1])); //2
*/

/*
//option 2 - sort first, return if i !== arr[i]
//Time: O(2n) = O(N), Space: O(n)
var missingNumber = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }

  //if last number is missing
  return nums.length;
};

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([0, 1])); //2
*/

/*
//option 3 - calculate total value, loop to reduce item value, find diff
//Time: O(n) = O(N), Space: O(1)
var missingNumber = function (nums) {
  let tempSum = nums.length; //last element

  //loop from 0 to length - 1 elements
  for (let i = 0; i < nums.length; i++) {
    tempSum += i;
    tempSum -= nums[i];
  }

  return tempSum;
};

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([0, 1])); //2
*/

//option 4 - XOR
//Time: O(n) = O(N), Space: O(1)
var missingNumber = function (nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res ^= i;
    res ^= nums[i];
  }
  return res;
};

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([0, 1])); //2
