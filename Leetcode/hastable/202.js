/*
//option 1 - check number already exist in map, return if exist, Get next value by splitting number with mod and /
//Time: O(log n) , Space: O(n)
var isHappy = function (n) {
  let map = {};
  while (n !== 1) {
    //check if found
    if (map[n] !== undefined) return false; //if cycle already exist

    map[n] = true; // set into cache to detect cycke

    let tempSum = 0; //cal sum
    while (n > 0) {
      let r = n % 10; //take last single digit
      tempSum += r * r;

      n = Math.floor(n / 10); //take remain digits to further subtract
    }

    n = tempSum; //set n = tempSum for further checking
  }
  return true;
};

console.log(isHappy(19));

console.log(isHappy(2));

*/

//option 2 - fast and slow pointers, check equal
//Time: O(log n) , Space: O(1)
var isHappy = function (n) {
  let getNext = function (n) {
    let tempSum = 0; //cal sum
    while (n > 0) {
      let r = n % 10; //take last single digit
      tempSum += r * r;

      n = Math.floor(n / 10); //take remain digits to further subtract
    }
    return tempSum;
  };

  let sp = n;
  let fp = getNext(n);

  while (fp !== 1 && fp !== sp) {
    sp = getNext(sp);
    fp = getNext(getNext(fp));
  }

  return fp === 1;
};

console.log(isHappy(19));

console.log(isHappy(2));
