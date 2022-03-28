/*
//option 1 - 3 var
//Time: O(n) , Space:O(1)

var thirdMax = function (nums) {
  //3 var calculate in one pass
  //max1, max2, max3 = min number
  let max1 = null;
  let max2 = null;
  let max3 = null;
  //loop i = 0 < nums.length
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    //return if value already exist before
    if (num === max1 || num === max2 || num === max3) continue;

    //if max1 is null && nums[i] > max1
    if (num > max1 || max1 === null) {
      //update max3 = max2, max2 = max1, max1 = current
      max3 = max2;
      max2 = max1;
      max1 = num;
    }
    //else if max2 is null && current > max2
    else if (num > max2 || max2 === null) {
      //update max3 = max2, max2 = current
      max3 = max2;
      max2 = num;
    }
    //else if max3 is null  && current > max3
    else if (num > max3 || max3 === null) {
      //update max3 = current
      max3 = num;
    }
  }

  //return if max3 > 0, else return max1
  return max3 != null ? max3 : max1;
};
console.log(thirdMax([3, 3, 2, 1])); //1
console.log(thirdMax([2, 2, 3, 1])); //1
console.log(thirdMax([2, 4, 3, 1])); //2
console.log(thirdMax([4, 3, 2, 1])); //2
console.log(thirdMax([2, 1])); //2
console.log(thirdMax([1, 2, -2147483648])); //-2147483648
*/

//option 2 - set
//Time: O(n + n log n) , Space:O(n + n)
var thirdMax = function (nums) {
  let set = new Set(nums);
  let result = [...set].sort((a, b) => a - b);
  return set.size >= 3 ? result[result.length - 3] : result[result.length - 1];
};

console.log(thirdMax([3, 2, 1])); //1
console.log(thirdMax([2, 2, 3, 1])); //1
console.log(thirdMax([2, 4, 3, 1])); //2
console.log(thirdMax([4, 3, 2, 1])); //2
console.log(thirdMax([2, 1])); //2
console.log(thirdMax([1, 2, -2147483648])); //-2147483648
console.log(
  thirdMax([
    3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
    5, 6,
  ])
); //8
