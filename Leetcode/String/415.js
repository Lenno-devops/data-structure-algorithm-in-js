//option 1 - loop frmo right to left, convert char to int by charAt() - "0", see if carry forward needed
//Time: O(n) , Space: O(1)
var addStrings = function (num1, num2) {
  //start from last pointers (right to left)
  //add num1[idx] & num2[idx]
  //IF sum > 9, add 1 to idx - 1 (backward)

  if (num1.length < num2.length) return addStrings(num2, num1);
  let lIdx = num1.length - 1;
  let rIdx = num2.length - 1;
  let str = "";
  let carryForward = 0;

  while (lIdx >= 0) {
    const d1 = num1.charAt(lIdx) - "0";
    const d2 = rIdx >= 0 ? num2.charAt(rIdx) * 1 : 0;

    let temp = carryForward + d1 + d2;
    if (temp > 9) {
      temp %= 10;
      carryForward = 1;
    } else {
      carryForward = 0;
    }

    str = temp.toString().concat(str);
    lIdx--;
    rIdx--;
  }
  //   console.log(sum);
  return (carryForward === 1 ? "1" : "") + str;
};

(num1 = "11"), (num2 = "123");
console.log(addStrings(num1, num2)); //134

(num3 = "456"), (num4 = "77");
console.log(addStrings(num3, num4)); //533

(num5 = "0"), (num6 = "0");
console.log(addStrings(num5, num6)); //0
