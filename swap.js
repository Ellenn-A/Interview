/*
  Implement a solution that swaps the i'th and j'th elements of a given array. If either index is out-of-bounds, return the original array.
*/

const swapElement=(arr, i, j) =>{
  let res = [];

  if (i > arr.length - 1 || j > arr.length - 1) {
      res = arr;
  } else {
      let eli = arr[i];
      let elj = arr[j];
      let newArr = []
      for (let x = 0; x < arr.length; x++) {
          let toAppend = 0;
          if (x == i) {
              toAppend = elj;
          } else if (x == j) {
              toAppend = eli;
          } else {
              toAppend = arr[x];
          }
          newArr.push(toAppend);
      }

      res = newArr;
  }

  return res;

}

console.log(swapElement([1, 2, 3, 4, 5], 1, 2)) // expected result - [ 1, 3, 2, 4, 5 ]
console.log(swapElement(['a', 1, 'b', 2, 'd'], 3, 4)) // expected result - [ 'a', 1, 'b', 'd', 2]
console.log(swapElement(['a', 1], 1, 2)) // expected result - [ 'a', 1 ]
