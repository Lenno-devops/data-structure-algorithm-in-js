//option 1 -
//Time: O(N) , Space: O(N)
var imageSmoother = function (img) {
  let result = new Array(img.length);
  let counter = 0;
  let width = img[0].length;
  for (let i = 0; i < img.length; i++) {
    //initial sub-array
    result[i] = [];
    result[i].length = width;
    for (let j = 0; j < width; j++) {
      counter = 0;
      result[i][j] = 0;

      //prepare to fill-in with 9 slots
      for (let ni = i - 1; ni <= i + 1; ni++) {
        for (let nj = j - 1; nj <= j + 1; nj++) {
          if (ni >= 0 && nj >= 0 && ni < img.length && nj < width) {
            //only count within range slot
            result[i][j] += img[ni][nj];
            counter++; //count how many invovled
          }
        }
      }

      //calculate average value by dividiing counter
      result[i][j] = Math.floor(result[i][j] / counter);
    }
  }
  return result;
};

console.log(
  ...imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
);
//[[137,141,137],[141,138,141],[137,141,137]]
