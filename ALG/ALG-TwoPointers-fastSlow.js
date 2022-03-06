function conuntUniqueValue(arr) {
  //two pointers - fast-slow
  //p1 = 0
  let p1 = 0

  //loop p2 = 1 to end
  for (p2 = 1; p2 < arr.length; p2++) {
    //if p1 !== p2, p1++, copy arr[p2] to arr[p1]
    if (arr[p1] !== arr[p2]) {
      p1++
      arr[p1] = arr[p2]
    }
  }

  //return p1+1
  return p1 + 1
}

console.log(conuntUniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) //7
