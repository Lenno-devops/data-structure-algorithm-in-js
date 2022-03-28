/*
//option 1 - keep swapping with two pointers
//Time: O(n), Space: O(1)
var sortArrayByParity = function (nums) {
  //return num if length == 1
  if (nums.length === 1) return nums;

  //two pointers
  // create slow pointer = 0
  let sp = 0;

  //create swap helper fn for array
  Array.prototype.swap = function (idx1, idx2) {
    let temp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = temp;
  };

  //for fp = 0 < nums.length
  for (let fp = 0; fp < nums.length; fp++) {
    //if nums[fp] is even
    if (nums[fp] % 2 === 0) {
      //swap with sp
      nums.swap(fp, sp);
      //sp++
      sp++;
    }
  }
  return nums;
};


console.log(sortArrayByParity([3, 1, 2, 4])); //[2,4,3,1]
console.log(sortArrayByParity([3, 2, 1, 4])); //[2,4,1,3]
console.log(sortArrayByParity([0])); //0

*/

/*
//option 2 - two array
//Time: O(n), Space:O(n)
var sortArrayByParity = function (nums) {
  //return num if length == 1
  if (nums.length === 1) return nums;

  let arr1 = [],
    arr2 = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      arr1.push(nums[i]);
    } else {
      arr2.push(nums[i]);
    }
  }
  return arr1.concat(arr2);
};

console.log(sortArrayByParity([3, 1, 2, 4])); //[2,4,3,1]
console.log(sortArrayByParity([3, 2, 1, 4])); //[2,4,1,3]
console.log(sortArrayByParity([0])); //0

*/

/*
//option 3- two pointers, left ++ and right --
//Time: O(n), Space:O(1)
var sortArrayByParity = function (nums) {
  //return num if length == 1
  if (nums.length === 1) return nums;

  //create swap helper fn for array
  Array.prototype.swap = function (idx1, idx2) {
    let temp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = temp;
  };

  let lp = 0,
    rp = nums.length - 1;

  while (lp < rp) {
    if (nums[lp] % 2 !== 0) {
      nums.swap(lp, rp);
      rp--;
    } else {
      lp++;
    }
  }

  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4])); //[2,4,3,1]
console.log(sortArrayByParity([3, 2, 1, 4])); //[2,4,1,3]
console.log(sortArrayByParity([0])); //0
*/

//option 4 - two pointers, insert even from front, odd from end
//Time: O(n), Space:O(n)
var sortArrayByParity = function (nums) {
  //return num if length == 1
  if (nums.length === 1) return nums;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.unshift(nums[i]);
    } else {
      result.push(nums[i]);
    }
  }

  return result;
};

console.log(sortArrayByParity([3, 1, 2, 4])); //[2,4,3,1], [4,2,3,1], [2,4,1,3], [4,2,1,3]
console.log(sortArrayByParity([3, 2, 1, 4])); //[2,4,3,1], [4,2,3,1], [2,4,1,3], [4,2,1,3]
console.log(sortArrayByParity([0])); //0
