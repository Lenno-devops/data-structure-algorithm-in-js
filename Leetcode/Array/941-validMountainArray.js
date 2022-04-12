/* option 1 - 2 pointers
var validMountainArray = function (arr) {
  let lp = 0;
  let rp = arr.length - 1;

  while (lp < arr.length && arr[lp + 1] > arr[lp]) {
    lp++;
  }

  while (rp >= 0 && arr[rp] < arr[rp - 1]) {
    rp--;
  }

  if (lp === rp && lp > 0 && rp < arr.length - 1) {
    return true;
  }

  return false;
};
*/

//option 2 - 1 pointer with basic check
var validMountainArray = function (arr) {
  let step = 0;
  let length = arr.length;

  while (step + 1 < length && arr[step] < arr[step + 1]) {
    step++;
  }

  if (step === 0 || step === length - 1) return false;

  while (step + 1 < length && arr[step] > arr[step + 1]) {
    step++;
  }

  return step === length - 1;
};

console.log(validMountainArray([1, 2, 3, 4, 5, 3, 2, 1])); //true
console.log(validMountainArray([1, 2, 2, 3])); //false
console.log(validMountainArray([1, 2, 3, 4])); //false
console.log(validMountainArray([4, 3, 2, 1])); //false

console.log(validMountainArray([1, 1, 1])); //false
