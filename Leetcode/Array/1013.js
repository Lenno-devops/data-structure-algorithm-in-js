//option 1 - two pointers, L->R & R->L
//Time: O(N + N), Space: O(1)
var canThreePartsEqualSum = function (nums) {
  //find total, cal sub total by divide 3
  let total = nums.reduce((a, b) => a + b);
  if (total % 3 !== 0) return false;
  let average = total / 3;

  //if first & last sum can be found, middle part must be found too
  let lp = 0,
    rp = nums.length - 1;
  let sumLeft = nums[lp++], //sumUp then move forward
    sumRight = nums[rp--]; //sumUp then move backward

  while (lp < rp) {
    //find first from left to right
    if (sumLeft != average) {
      sumLeft += nums[lp]; //sumUp then move forward
      lp++;
    }

    //last part from right to left
    if (sumRight != average) {
      sumRight += nums[rp]; //sumUp then move backward
      rp--;
    }

    //return true if sumLeft = sumRight AND there is still some space for middle slot
    if (lp <= rp && sumLeft === average && sumRight === average) return true;
  }

  return false;
};

let arr1 = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
console.log(canThreePartsEqualSum(arr1)); //true

let arr2 = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];
console.log(canThreePartsEqualSum(arr2)); //false

let arr3 = [3, 3, 6, 5, -2, 2, 5, 1, -9, 4];
console.log(canThreePartsEqualSum(arr3)); //true

let arr4 = [18, 12, -18, 18, -19, -1, 10, 10];
console.log(canThreePartsEqualSum(arr4)); //true

let arr5 = [1, -1, 1, -1];
console.log(canThreePartsEqualSum(arr5)); //false

let arr6 = [0, 0, 0, 0];
console.log(canThreePartsEqualSum(arr6)); //true
