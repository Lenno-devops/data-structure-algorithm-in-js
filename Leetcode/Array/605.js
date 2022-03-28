//option 1 - one pass, each time check left & right is empty
//Time: O(n), Space: O(1)
var canPlaceFlowers = function (flowerbed, n) {
  let counter = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      let lEmpty = i === 0 || flowerbed[i - 1] === 0 ? true : false;
      let rEmpty =
        i === flowerbed.length - 1 || flowerbed[i + 1] === 0 ? true : false;

      if (lEmpty && rEmpty) {
        flowerbed[i] = 1;
        counter++;
        i++; //next must not be candidate

        if (counter >= n) return true;
      }
    }
  }

  //for 0 case
  return counter >= n ? true : false;
};

let arr1 = [1, 0, 0, 0, 1];
console.log(canPlaceFlowers(arr1, 1)); //true

let arr2 = [1, 0, 0, 0, 1];
console.log(canPlaceFlowers(arr2, 2)); //fslse

let arr3 = [0, 1, 0, 0, 1];
console.log(canPlaceFlowers(arr3, 1)); //fslse

let arr4 = [1, 0, 1, 0, 1, 0, 0];
console.log(canPlaceFlowers(arr4, 1)); //true

/*
//option 2 - keep record of previous & counter, if current & prev = 0 then counter ++, if current & prev = 1 then counter --
//Time: O(n), Space: O(1)
var canPlaceFlowers = function (flowerbed, n) {
  let counter = 0;
  let prev = 0;

  for (num of flowerbed) {
    if (num === 0) {
      if (prev === 1) {
        prev = 0;
      } else {
        counter++;
        prev = 1;
      }
    } else {
      //current = 1
      if (prev === 1) {
        //incorrect plan is found, deduct counter by 1
        counter--;
      }
    }
  }

  //for 0 case
  return counter >= n ? true : false;
};

let arr1 = [1, 0, 0, 0, 1];
console.log(canPlaceFlowers(arr1, 1)); //true

let arr2 = [1, 0, 0, 0, 1];
console.log(canPlaceFlowers(arr2, 2)); //fslse

let arr3 = [0, 1, 0, 0, 1];
console.log(canPlaceFlowers(arr3, 1)); //fslse

let arr4 = [1, 0, 1, 0, 1, 0, 0];
console.log(canPlaceFlowers(arr4, 1)); //true
*/
