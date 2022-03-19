/*
//option 1 - set, compare legnth vs size
//Time: O(n), Space: O(N)
var containsDuplicate = function (nums) {
  const hashSet = new Set();
  for (val of nums) {
    hashSet.add(val);
  }

  return nums.length !== hashSet.size;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
console.log(containsDuplicate([1, 2, 3, 1])); //true
*/

/*
//option 2 - sort, check i === i+1
//Time: O(n log n), Space: O(1)
var containsDuplicate = function (nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
console.log(containsDuplicate([1, 2, 3, 1])); //true
*/

//option 3 - map
//Time: O(n), Space: O(n)
var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], true);
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
console.log(containsDuplicate([1, 2, 3, 1])); //true
