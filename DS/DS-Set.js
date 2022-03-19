/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashSet = new Set();
  for (val of nums) {
    hashSet.add(val);
  }

  return nums.length !== hashSet.size;
};

console.log(containsDuplicate([1, 2, 3, 1]));
