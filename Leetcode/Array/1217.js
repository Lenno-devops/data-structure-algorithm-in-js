/*
option 1 - given N + 2 = 0 step, N + 1 = 1 step, move all odd, even step to 0, 1 first (update counter), remain index 0, 1 with two counter, choose min to return (move smaller to larger would be low costs)
Time: O(n), Space: O(1)
var minCostToMoveChips = function (nums) {
  let odd = 0;
  let even = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return Math.min(odd, even);
};
console.log(minCostToMoveChips([1, 2, 3])); //1
console.log(minCostToMoveChips([2, 2, 2, 3, 3])); //2
console.log(minCostToMoveChips([1, 1000000000])); //1
*/

//option 2 - brute force
//Time: O(n^2), Space: O(1)
var minCostToMoveChips = function (nums) {
  let minCost = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let tempCost = 0;
    for (let j = 0; j < nums.length; j++) {
      tempCost += Math.abs(i - (nums[j] - 1)) % 2; //see if odd/even value, current position - actual index poition (nums[j] - 1) % 2
    }
    minCost = Math.min(tempCost, minCost);
  }

  return minCost;
};
console.log(minCostToMoveChips([1, 2, 3])); //1
console.log(minCostToMoveChips([2, 2, 2, 3, 3])); //2
console.log(minCostToMoveChips([1, 1000000000])); //1
