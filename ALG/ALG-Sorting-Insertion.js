function sortItems(arr) {
  Array.prototype.swap = function (idx1, idx2) {
    let temp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      arr.swap(j, j - 1);
      j--;
    }

    // for (let j = i; j > 0; j--) {
    //   if (arr[j] < arr[j - 1]) {
    //     arr.swap(j, j - 1);
    //   }
    // }
  }
  return arr;
}

var numbersToSort = [4, 15, 24, 1, 9, 3, 2, 11];
var sortedList = sortItems(numbersToSort);
console.log(sortedList);
