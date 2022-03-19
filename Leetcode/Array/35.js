/*
//option 1 - binary search
//Time: O(log n), Space:O(n)
var searchInsert = function (nums, target) {
  function helperFn(left, right) {
    if (left > right) return left; //instead of returning -1 to not found, we return left pointer as the place to insert

    const mid = Math.floor((left + right) / 2);
    if (target > nums[mid]) {
      return helperFn(mid + 1, right);
    } else if (target < nums[mid]) {
      return helperFn(left, mid - 1);
    } else {
      return mid;
    }
  }

  return helperFn(0, nums.length - 1);
};

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); //4
*/

/*
//option 2 - binary search in while loop
//Time: O(log n), Space:(1)
var searchInsert = function (nums, target) {
  let lp = 0;
  let rp = nums.length - 1;

  while (lp <= rp) {
    let mid = Math.floor((lp + rp) / 2);
    if (target > nums[mid]) {
      lp = mid + 1;
    } else if (target < nums[mid]) {
      rp = mid - 1;
    } else {
      return mid;
    }
  }

  return lp; //instead of returning -1 to not found, we return left pointer as the place to insert
};

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); //4
*/

//option 3 - linear
//Time: O(n), Space:(1)
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) return i;
  }
  return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); //4
