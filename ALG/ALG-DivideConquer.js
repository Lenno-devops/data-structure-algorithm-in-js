function recursiveFn(arr, left, right, target) {
  //base case 1: no matched, left > right, return -1
  if (left > right) return -1

  //find mid with floor value
  let mid = Math.floor((left + right) / 2)

  //if target <= mid value, find L side, return recusriveFn(arr, left, mid, target)
  if (target < arr[mid]) {
    return recursiveFn(arr, left, mid - 1, target)
  } else if (target > arr[mid]) {
    //else, find R side, return recusriveFn(arr, mid+1, right, target)
    return recursiveFn(arr, mid + 1, right, target)
  } else {
    return mid
  }
}

function search(arr, target) {
  //option 1
  return recursiveFn(arr, 0, arr.length - 1, target)

  //option 2
  /*
  //two pointers, min = 0, max = last
  let left = 0
  let right = arr.length - 1

  //while min <= max
  while (left <= right) {
    //find mid with floor
    let mid = Math.floor((left + right) / 2)

    if (target < arr[mid]) {
      //if target < mid value, max = mid-1
      right = mid - 1
    } else if (target > arr[mid]) {
      //else if target > mid value, min = mid+1
      left = mid + 1
    } else {
      //else return mid
      return mid
    }
  }

  //return -1
  return -1
    */
}

console.log(search([1, 2, 3, 4, 5, 6], 9)) //3
