//option 1 - carry forward
//Time: O(N), Space: O(1)
var plusOne = function (digits) {
  //start from last position, assume need to check first
  let incValue = 1;
  let idx = digits.length - 1;

  //loop to check all digits
  while (incValue > 0 && idx >= 0) {
    if (digits[idx] === 9) {
      //value === 9, set as 0, move forward increase 1
      digits[idx] = 0;
      idx -= 1;
    } else {
      //<9, direct +1, cancel carry forward signal
      digits[idx] += 1;
      incValue = 0;
    }
  }

  //if 1st index also ===9, we need to add additional item in the begining
  if (incValue > 0 && idx === -1) {
    digits.unshift(1);
  }

  return digits;
};

// console.log(plusOne([9])); //10
// console.log(plusOne([1, 2, 9])); //130
// console.log(plusOne([4, 3, 2, 1])); //4,3,2,2
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); //1,0

/*
//option 2 - each loop means previous calculate need to carry forward
//Time: O(N), Space: O(1)
var plusOne = function (digits) {
  //loop from end to front
  for (let i = digits.length - 1; i >= 0; i--) {
    //increase 1 IF < 9
    if (digits[i] < 9) {
      digits[i] += 1;
      //return digits to end
      return digits;
    }

    //else ==9, need to move backward to calculate
    digits[i] = 0;
  }

  //if first index also need to add 1, insert 1 to front
  return [1, ...digits];
};

console.log(plusOne([9])); //10
console.log(plusOne([1, 2, 9])); //130
console.log(plusOne([4, 3, 2, 1])); //4,3,2,2
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])); //1,0
*/

test("Testcase", () => {
  expect(plusOne([9])).toEqual([1, 0]);
  expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  expect(plusOne([1])).toEqual([2]);
});
