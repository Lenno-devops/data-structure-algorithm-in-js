//option 1
//Time: O(?) , Space: O(?)
var intersection = function (nums1, nums2) {
  let result = [];
  let setA = new Set(nums1);
  let setB = new Set(nums2);
  for (num of nums1) {
    if (setB.has(num)) result.push(num);
  }

  return result;
};

console.log(intersection(19));

console.log(intersection(2));
