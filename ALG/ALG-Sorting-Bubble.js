function sortItems(arr) {
  Array.prototype.swap = function (idx1, idx2) {
    let temp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      //from 0 to length - i which already sorted
      if (arr[j] > arr[j + 1]) {
        arr.swap(j, j + 1);
      }
    }
  }
  return arr;
}

var numbersToSort = [4, 15, 24, 1, 9, 3, 2, 11];
var sortedList = sortItems(numbersToSort);
console.log(sortedList);
