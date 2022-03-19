function sortarr(arr) {
  Array.prototype.swap = function (idx1, idx2) {
    let temp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = temp;
  };

  function quickSort(low, high) {
    if (arr.length > 1) {
      let pivotIdx = partition(low, high);

      if (low < pivotIdx - 1) {
        //more elements on the left side of the pivot
        quickSort(low, pivotIdx - 1);
      }

      if (high > pivotIdx) {
        quickSort(pivotIdx, high);
      }
    }
  }

  function partition(low, high) {
    let pivotVal = arr[Math.floor((low + high) / 2)]; //cache mid val to prevent loss during swapping

    while (low <= high) {
      while (arr[low] < pivotVal) {
        low++; //search left side item > pivot, stop when found
      }

      while (arr[high] > pivotVal) {
        high--; //search right side item < pivot, stop when found
      }

      if (low <= high) {
        //if not yet meet
        arr.swap(low, high);
        low++; //continue searching
        high--;
      }
    }
    //return pivot position when two pointers meet
    console.log(...arr);
    return low;
  }

  quickSort(0, arr.length - 1);
  return arr;
}

var numbersToSort = [4, 15, 24, 1, 9, 3, 2, 11];
var sortedList = sortarr(numbersToSort);
console.log(sortedList);
