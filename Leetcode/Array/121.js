//option 1 -
//Time: , Space:
var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - min);
  }

  return maxProfit;
};

let arr1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr1)); //5

let arr2 = [7, 6, 4, 3, 1];
console.log(maxProfit(arr2)); //0
