/*
//option 1 - two pass, read from original then directly push into new result, move to next new rol when col meet the last position
//Time: O(n) , Space: O(1)
var matrixReshape = function (mat, r, c) {
  let result = [];
  let colCount = 0;
  let rowCount = 0;

  //if size not match (r*c != original mat.size), retun input
  if (mat.length * mat[0].length != r * c) return mat;

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (rowCount === 0) result[rowCount] = [];

      //within target column range
      result[colCount].push(mat[i][j]);
      colCount++;

      if (colCount === c) {
        //already meet col limit, move to next row
        rowCount++;
        colCount = 0;
      }
    }
  }
  return result;
};

let arr1 = [
  [1, 2],
  [3, 4],
];
console.log(matrixReshape(arr1, 1, 4)); //Output: [[1,2,3,4]]

let arr2 = [
  [1, 2],
  [3, 4],
];
console.log(...matrixReshape(arr2, 2, 4)); //Output: [[1,2],[3,4]]

*/

//option 2 - one pass, two matrix size if eqaul, loop from 0 to end, dynamically assign from original to new (row = i/c, col = i%c)
//Time: O(n) , Space: O(1)
var matrixReshape = function (mat, r, c) {
  let result = [];
  let len = mat[0].length;

  //if size not match (r*c != original mat.size), retun input
  if (mat.length * len != r * c) return mat;

  for (let i = 0; i < r * c; i++) {
    if (i % c === 0) result[i / c] = [];
    result[Math.floor(i / c)][i % c] = mat[Math.floor(i / len)][i % len];
  }
  return result;
};

let arr1 = [
  [1, 2],
  [3, 4],
];
console.log(matrixReshape(arr1, 1, 4)); //Output: [[1,2,3,4]]

let arr2 = [
  [1, 2],
  [3, 4],
];
console.log(...matrixReshape(arr2, 2, 4)); //Output: [[1,2],[3,4]]
