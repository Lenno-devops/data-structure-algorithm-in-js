/*
//option 1 - map to store last appear position of the value
//Time:O(n) , Space: O(n)
var containsNearbyDuplicate = function (nums, k) {
  //create map (number, position)
  let map = new Map();

  //loop 0 < nums.length
  for (let i = 0; i < nums.length; i++) {
    //if object(key) already exist in map
    if (map.has(nums[i])) {
      //return if (current - last pos) <= K for early break
      if (i - map.get(nums[i]) <= k) return true;
    }
    //copy current position to obj.last
    map.set(nums[i], i);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); //true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); //true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); //false
console.log(containsNearbyDuplicate([1, 3, 2, 1, 4, 1], 3)); //true
*/

//option 2 - sliding window with set, if already out of sliding window size, remove first element in set
//Time:O(n) , Space: O(n)
var containsNearbyDuplicate = function (nums, k) {
  //create set (number)
  let set = new Set();

  //loop 0 < nums.length
  for (let i = 0; i < nums.length; i++) {
    //remove first element (within slidign window) if current pointer > k size
    if (i > k) set.delete(nums[i - k - 1]);

    //check element exsit in set, return true if exist
    if (set.has(nums[i])) return true;

    //push element in set if not exist
    set.add(nums[i]);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); //true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); //true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); //false
console.log(containsNearbyDuplicate([1, 3, 2, 1, 4, 1], 3)); //true
