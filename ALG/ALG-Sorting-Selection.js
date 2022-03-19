Array.prototype.swap = function (idx1, idx2) {
  let temp = this[idx1];
  this[idx1] = this[idx2];
  this[idx2] = temp;
};

function sortItems(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //to last -1 position
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      //start from i+1 position
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    //swap
    if (minIdx != i) {
      arr.swap(i, minIdx);
    }
  }
  return arr;
}

var numbersToSort = [4, 15, 24, 1, 9, 3, 2, 11];
var sortedList = sortItems(numbersToSort);
console.log(sortedList);
