function sortItems(arr) {
  Array.prototype.swap = function (idx1, idx2) {
    let temp = this[idx1];
    this[idx1] = this[idx2];
    this[idx2] = temp;
  };

  for (let gap = arr.length / 2; gap > 0; gap = Math.floor(gap / 2)) {
    console.log("Gap:" + gap); //e.g. 8/2 = 4->2->1
    for (let i = gap; i < arr.length; i++) {
      console.log("i:" + i); //e.g. 4,5,6,7,8 | 2,3,4,5,6,7 | 1,2,3,4,5,6,7
      let j = i;
      while (j >= gap && arr[j] < arr[j - gap]) {
        //compare j - gap, e.g. 4-4=0, 5-4=1, 6-4=2, 7-4=3
        console.log("swap");
        arr.swap(j, j - gap);
        j -= gap;
      }
    }
  }
  return arr;
}

var numbersToSort = [4, 15, 24, 1, 9, 3, 2, 11];
var sortedList = sortItems(numbersToSort);
console.log(sortedList);
