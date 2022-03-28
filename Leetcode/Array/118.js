//option 1 -
//Time: , Space:
var generate = function (numRows) {
  let result = [];
  result[0] = [1];

  for (let i = 1; i < numRows; i++) {
    result[i] = [];
    result[i][0] = 1;

    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result[i][i] = 1;
  }

  return result;
};

console.log(...generate(5)); //
