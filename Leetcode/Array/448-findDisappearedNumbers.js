/* option 1 - in-place with negative value to indicate already exist, loop to find out missing (positive) nums.
//Time: O(n + n) = O(n), Space: O(1)
var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let num of nums) {
    let index = Math.abs(num) - 1; //convert current value into positive index
    nums[index] = nums[index] > 0 ? -1 * nums[index] : nums[index]; //update corresponding index value as negative value to represent it exists
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      //find all positive value = not exist
      res.push(i + 1);
    }
  }

  return res;
};
*/

//option 2 - Set, remove duplicate, loop to check if exist
//Time: O(N + N) = O(N), Space: O(N)
var findDisappearedNumbers = function (nums) {
  let res = [];
  let set = new Set();
  for (let num of nums) {
    set.add(num);
  }

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i + 1)) {
      res.push(i + 1);
    }
  }

  return res;
};

console.log(findDisappearedNumbers([3, 3, 4, 7, 8, 1, 3, 1])); //2,5,6
