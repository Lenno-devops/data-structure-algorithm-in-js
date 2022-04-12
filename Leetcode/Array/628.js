/*
//option 1 - sort first, cal max = (last 3 positive numbers) OR (first 2 negative numbers * last positive nubmers), compare both
//Time: O(n log n + 1) = O(n log n), Space: O(1)
var maximumProduct = function (nums) {
  if (nums.length < 3) return null;
  nums.sort((a, b) => a - b);

  let sumLast3Items =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  let sum12AndLastItem = nums[0] * nums[1] * nums[nums.length - 1];

  return sum12AndLastItem > sumLast3Items ? sum12AndLastItem : sumLast3Items;
};

console.log(maximumProduct([1, 2, 3])); //6
console.log(maximumProduct([1, 2, 3, 4, 5])); //60
console.log(maximumProduct([1, 2, 3, 4])); //24
console.log(maximumProduct([-1, -2, -3])); //-6
console.log(maximumProduct([-1, -2, -3, -4])); //-6
console.log(maximumProduct([-100, -98, -1, 2, 3, 4])); //39200
*/

//option 2 - one pass, find first 3 largest numbers AND 2 smallest number with 1 largerest nubmers, compare both
//Time: O(n), Space: O(1)
var maximumProduct = function (nums) {
  if (nums.length < 3) return null;
  let min1 = Number.MAX_SAFE_INTEGER,
    min2 = Number.MAX_SAFE_INTEGER;
  let max1 = Number.MIN_SAFE_INTEGER,
    max2 = Number.MIN_SAFE_INTEGER,
    max3 = Number.MIN_SAFE_INTEGER;

  for (let num of nums) {
    if (num !== min1 && num !== min2) {
      if (num < min1) {
        min2 = min1;
        min1 = num;
      } else if (num < min2) {
        min2 = num;
      }
    }

    if (num !== max1 && num !== max2 && num !== max3) {
      if (num > max1) {
        max3 = max2;
        max2 = max1;
        max1 = num;
      } else if (num > max2) {
        max3 = max2;
        max2 = num;
      } else if (num > max3) {
        max3 = num;
      }
    }
  }

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

console.log(maximumProduct([1, 2, 3, 3])); //6
console.log(maximumProduct([1, 2, 3, 4, 5])); //60
console.log(maximumProduct([1, 2, 3, 4])); //24
console.log(maximumProduct([-1, -2, -3])); //-6
console.log(maximumProduct([-1, -2, -3, -4])); //-6
console.log(maximumProduct([-100, -98, -1, 2, 3, 4])); //39200
