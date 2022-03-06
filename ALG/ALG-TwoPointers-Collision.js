function sumZero(arr) {
  //two pointers - collision
  //p1 = 0, p2 = last index
  let p1 = 0;
  let p2 = arr.length - 1;

  //while p1 < p2
  while (p1 < p2) {
    //if p1+p2 value > 0, move p2 backward -1
    if (arr[p2] + arr[p1] > 0) {
      p2--;
    }
    //else if p1+p2 value <0, move p1 forward +1
    else if (arr[p2] + arr[p1] < 0) {
      p1++;
    }
    //else return [p1 value, p2 value]
    else {
      return [arr[p1], arr[p2]];
    }
  }

  //return false if not found
  return null;
}

console.log(sumZero([-8, -4, -2, -1, 0, 1, 2, 3, 5])); //[-2,2]
