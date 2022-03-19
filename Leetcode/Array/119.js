/*
//option 1 -
//Time: O(n), Space: O(K)
var getRow = function (rowIndex) {
  let result = [1];
  for (let i = 1; i <= rowIndex; i++) {
    result[i] = 1; //preset as 1, each i loop will increase 1 slot at the end
    for (let j = i - 1; j > 0; j--) {
      //from right -1 to left + 1 (2nd index)
      result[j] = result[j - 1] + result[j]; //current value = self [j](previous row) value + [j - 1] (previous row) value
    }
  }

  return result;
};

console.log(getRow(3)); //1,3,3,1
console.log(getRow(0)); //1
console.log(getRow(1)); //1,1
*/

var getRow = function (r) {
  var ans = new Array(r + 1);
  ans[0] = ans[r] = 1;
  for (i = 1, up = r; i < r; i++, up--) ans[i] = (ans[i - 1] * up) / i;
  return ans;
};

console.log(getRow(3)); //1,3,3,1
console.log(getRow(0)); //1
console.log(getRow(1)); //1,1
