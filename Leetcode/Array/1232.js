//option 1 - calculate slope, figure out formula with multipcation instead of divide, compare with other element
//Time: O(n), Space: O(1)
var checkStraightLine = function (coordinates) {
  if (coordinates.length <= 1) return true;

  //find 1st different of x, y
  let x0 = coordinates[0][0];
  let y0 = coordinates[0][1];
  let x1 = coordinates[1][0];
  let y1 = coordinates[1][1];

  //slope for single point, (dy/dx) = (y1 - y0) / (x1 - x0)
  //compare two point has same slope, (y1 - y0) / (x1 - x0) === (yN - y0) / (xN - x0)
  //avoid divide by 0, convert to multiplication => (xN - x0) * (y1 - y0) === (x1 - x0) * (yN - y0)
  //simplified =>  (xN - x0) * dy === dx * (yN - y0)

  let dx = x1 - x0;
  let dy = y1 - y0;

  //loop from 1 to n
  for (let i = 2; i < coordinates.length; i++) {
    //if curr - prev difference of x, y > 1st calc value, return false;
    if ((coordinates[i][0] - x0) * dy !== dx * (coordinates[i][1] - y0)) {
      return false;
    }
  }

  return true;
};

let arr1 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
console.log(checkStraightLine(arr1)); //true

let arr2 = [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
];
console.log(checkStraightLine(arr2)); //false

let arr3 = [
  [0, 0],
  [0, 1],
  [0, -1],
];

console.log(checkStraightLine(arr3)); //true
