//option 1 -
//Time: , Space:
var removeDuplicates = function (nums) {
  if (nums === undefined || nums.length === 0) return null;
  if (nums.length === 1) return 1;

  let sp = 0;
  for (let fp = 1; fp < nums.length; fp++) {
    if (nums[fp] != nums[sp]) {
      sp++;
      nums[sp] = nums[fp];
    }
  }

  //   console.log(...nums);
  return sp + 1;
};

let arr1 = [1, 1, 2];
console.log(removeDuplicates(arr1)); //2

let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr2)); //5
