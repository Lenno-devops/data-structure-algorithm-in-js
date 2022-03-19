//option 1 - hash
// var majorityElement = function (nums) {
//   const map = new Map();

//   let maxCount = Math.ceil(nums.length / 2);
//   let majorityVal = null;

//   for (const num of nums) {
//     let val = 1;
//     if (map.has(num)) {
//       val = map.get(num) + 1;
//     }
//     map.set(num, val);

//     if (val >= maxCount) {
//       majorityVal = num;
//       break;
//     }
//   }

//   return majorityVal;
// };

//option 2 - sorting
// var majorityElement = function (nums) {
//   nums.sort((a, b) => a - b);
//   return nums[Math.floor(nums.length / 2)];
// };

//option 3
var majorityElement = function (nums) {
  let count = 0;
  let current = null;
  for (const num of nums) {
    if (count === 0) {
      current = num;
    }

    count += current === num ? 1 : -1;
  }

  return current;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
