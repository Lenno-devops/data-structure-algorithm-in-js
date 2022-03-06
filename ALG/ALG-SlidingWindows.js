function maxSubArray(arr, fixedSize) {
  let tempSum = 0
  let maxSum = 0

  //find 0-fixedSize sum
  for (let i = 0; i < fixedSize; i++) {
    maxSum += arr[i]
  }

  //copy to tempSum
  tempSum = maxSum

  //loop from fixedSize to end
  for (let i = fixedSize; i < arr.length; i++) {
    //cal tempSum up til now (last tempSum + current value - begining value)
    tempSum = tempSum + arr[i] - arr[i - fixedSize]

    //update maxSum if needed
    maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}

console.log(maxSubArray([1, 2, 5, 2, 8, 1, 5], 2)) / 10
