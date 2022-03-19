/*
//option 1 - two pointers, keep copying non zero value to front when FP != 0
//Time: O(N + N) = O(N), Space: O(1);
var moveZeroes = function (nums) {
  let sp = 0;
  for (let fp = 0; fp < nums.length; fp++) {
    if (nums[fp] !== 0) {
      //copy non zero to front
      nums[sp] = nums[fp];
      sp++;
    }
  }

  //refill with zero
  for (let i = sp; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};
console.log(moveZeroes([0])); //0
console.log(moveZeroes([0, 1, 2, 3, 0, 4, 0, 1])); //1,2,3,4,1,0,0,0

//option 2 - two pointers, swap with 0 and non zeros
//Time: O(N), Space: O(1);
var moveZeroes = function (nums) {
  Array.prototype.swap = function (x, y) {
    let temp = this[x];
    this[x] = this[y];
    this[y] = temp;
  };

  let sp = 0;
  for (let fp = 0; fp < nums.length; fp++) {
    if (nums[fp] !== 0) {
      nums.swap(sp, fp);
      sp++;
    }
  }

  return nums;
};

console.log(moveZeroes([0])); //0
console.log(moveZeroes([0, 1, 2, 3, 0, 4, 0, 1])); //1,2,3,4,1,0,0,0

*/
//option 3 - snowball, +1 when = 0, swap if hit with non 0
//Time: O(N), Space: O(1);
var moveZeroes = function (nums) {
  Array.prototype.swap = function (x, y) {
    let temp = this[x];
    this[x] = this[y];
    this[y] = temp;
  };

  let snowBall = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      snowBall++;
    } else {
      //hit - swap
      nums.swap(i, i - snowBall);
    }
  }

  return nums;
};

console.log(moveZeroes([0])); //0
console.log(moveZeroes([0, 1, 2, 3, 0, 4, 0, 1])); //1,2,3,4,1,0,0,0
