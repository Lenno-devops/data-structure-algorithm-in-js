/*
//option 1 - fast slow pointer
//Time: O(2N) = O(N), Space: O(1)
var removeElement = function (nums, val) {
  let sp = 0;

  for (let fp = 0; fp < nums.length; fp++) {
    if (nums[fp] !== val) {
      nums[sp] = nums[fp];
      sp++;
    }
  }

  return sp;
};
console.log(removeElement([3, 2, 2, 3], 3)); //2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5

*/

//option 2 - if curr = input, copy from last element, remove last element, recheck is match. If no match, move forward to check
//Time: O(KN), k= no.of val need to remove, Space: O(1)
var removeElement = function (nums, val) {
  let sp = 0;

  while (sp < nums.length) {
    if (nums[sp] === val) {
      //copy from last element
      nums[sp] = nums[nums.length - 1];

      //remove last from array
      nums.pop();
    } else {
      //move forward if not match
      sp++;
    }
  }
  return sp;
};
console.log(removeElement([3, 2, 2, 3], 3)); //2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5
