/*
//option 1 - hash map to store value & frequency, if curr + 1 exist, sum (curr + curr+1) frequency
//Time: O(n) , Space: O(n)
var findLHS = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
  }

  let maxLength = 0;
  map.forEach(function (value, key) {
    if (map.has(key + 1)) {
      maxLength = Math.max(maxLength, value + map.get(key + 1));
    }
  });

  return maxLength;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); //5
console.log(findLHS([1, 2, 3, 4])); //2
console.log(findLHS([1, 1, 1, 1])); //0
*/
/*
//option 2 - one pass with hash map, update maxLength during insertion, keep sum the curr with curr - 1 & curr +1
//Time: O(n) , Space: O(n)
var findLHS = function (nums) {
  let map = new Map();
  let maxLength = 0;
  for (num of nums) {
    let freq = map.has(num) ? map.get(num) + 1 : 1;
    map.set(num, freq);

    if (map.has(num + 1)) {
      maxLength = Math.max(maxLength, freq + map.get(num + 1));
    }
    if (map.has(num - 1)) {
      maxLength = Math.max(maxLength, freq + map.get(num - 1));
    }
  }
  return maxLength;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); //5
console.log(findLHS([1, 2, 3, 4])); //2
console.log(findLHS([1, 1, 1, 1])); //0
*/

// option 3 - sort array, cal frequency, if curr & prev  diff = 1, update maxLength, store curr as prev
Time: O(n log n) , Space: O(1)
var findLHS = function (nums) {
  nums.sort();

  let maxLength = 0;
  let prevCount = 1;

  let getOccurence = function (idx) {
    let tempCount = 1;
    while (idx < nums.length && nums[idx] === nums[idx + 1]) {
      //same as next node
      tempCount++;
      idx++;
    }
    return tempCount;
  };

  for (let i = 0; i < nums.length; i++) {
    let freq = getOccurence(i); //get curr value repeat times
    if (i > 0 && nums[i] - nums[i - 1] === 1) {
      //if current & prev diff = 1
      maxLength = Math.max(maxLength, prevCount + freq); //update length
    }
    prevCount = freq; //set curr as prev for next count
    i += freq - 1; //move pointer forward to next unique value, and -1 reserve one space for above for loop perform i++
  }
  return maxLength;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); //5
console.log(findLHS([1, 2, 3, 4])); //2
console.log(findLHS([1, 1, 1, 1])); //0

console.log(findLHS([1, 2, 2, 2])); //4
