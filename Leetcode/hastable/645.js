/*
//option 1 - loop to add a set, IF exist before push into array, loop i to length to find which one missing
//Time: O(n + n) , Space: O(n)
var findErrorNums = function (nums) {
  //find duplicate, return that element & element +1 as array
  let set = new Set();
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (set.has(num)) result.push(num);
    else set.add(num);
  }

  for (let i = 1; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      result.push(i);
      break;
    }
  }

  return result;
};
console.log(findErrorNums([1, 2, 2, 4])); //[2,3]

console.log(findErrorNums([1, 1])); //[1,2]

console.log(findErrorNums([2, 2])); //[2,1]

console.log(findErrorNums([3, 2, 3, 4, 6, 5])); //[3,1]
*/

//option 2 - sort array, loop to find duplicate element
//Time: O(n log n) , Space: O(1)
var findErrorNums = function (nums) {
  //find duplicate and missing element
  let dup = null,
    miss = 1; //miss in the 1st position

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      dup = nums[i];
    } else if (nums[i] > nums[i - 1] + 1) {
      miss = nums[i - 1] + 1;
    }
  }

  return [
    dup,
    nums[nums.length - 1] !== nums.length ? nums.length : miss, //incase miss last element
  ];
};
console.log(findErrorNums([1, 2, 2, 4])); //[2,3]

console.log(findErrorNums([1, 1])); //[1,2] - miss last element

console.log(findErrorNums([2, 2])); //[2,1] - miss 1st element

console.log(findErrorNums([3, 2, 3, 4, 6, 5])); //[3,1]

/*
//option 3 - binary array, 1st if < 0 means already visited before, 2nd find value > 0
//Time: O(n) , Space: O(1)
var findErrorNums = function (nums) {
  //find duplicate and missing element
  for (num of nums) {
    let idx = Math.abs(num); //convert negative to positive as index
    if (nums[idx - 1] < 0)
      dup = idx; //if val already negative number, it means duplicate
    else nums[idx - 1] *= -1; //set value to negative number
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      //if curr value is still >0, it means this index is missing
      miss = i + 1;
      break;
    }
  }

  return [dup, miss];
};
console.log(findErrorNums([1, 2, 2, 4])); //[2,3]

console.log(findErrorNums([1, 1])); //[1,2]

console.log(findErrorNums([2, 2])); //[2,1]

console.log(findErrorNums([3, 2, 3, 4, 6, 5])); //[3,1]
*/

/*

//option 4 - loop to add a set, find duplicate & tempSum. Cal n*(n+1)/2 - totalSum + duplicate = missing
//Time: O(n) , Space: O(n)
var findErrorNums = function (nums) {
  //find duplicate, return that element & element +1 as array
  let set = new Set();
  let tempSum = 0;
  let dup = null;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    tempSum += num;
    if (set.has(num)) dup = num;
    else set.add(num);
  }

  return [dup, (nums.length * (nums.length + 1)) / 2 - tempSum + dup];
};
console.log(findErrorNums([1, 2, 2, 4])); //[2,3]

console.log(findErrorNums([1, 1])); //[1,2]

console.log(findErrorNums([2, 2])); //[2,1]

console.log(findErrorNums([3, 2, 3, 4, 6, 5])); //[3,1]
*/
