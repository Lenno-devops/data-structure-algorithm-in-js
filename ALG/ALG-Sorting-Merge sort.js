function sortarr(arr) {
  Array.prototype.swap = function (idx1, idx2) {
    let temp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = temp;
  };

  function mergeSort(arr) {
    if (arr.length === 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));
    return merge(leftArr, rightArr);
  }

  function merge(leftArr, rightArr) {
    let result = [],
      leftPointer = 0,
      rightPointer = 0;

    while (leftPointer < leftArr.length && rightPointer < rightArr.length) {
      if (leftArr[leftPointer] < rightArr[rightPointer]) {
        result.push(leftArr[leftPointer]);
        leftPointer++;
      } else {
        result.push(rightArr[rightPointer]);
        rightPointer++;
      }
    }

    return result
      .concat(leftArr.slice(leftPointer))
      .concat(rightArr.slice(rightPointer));
  }

  return mergeSort(arr);
}

var numbersToSort = [4, 15, 24, 1, 9, 3, 2, 11];
var sortedList = sortarr(numbersToSort);
console.log(sortedList);
