function mergeSort(array) {
  if(array.length < 2) { return array }

  let middle  = Math.floor(array.length / 2);
  console.log("middle= "+middle)
  let left    = array.slice(0, middle);
  console.log("left= "+left)
  let right   = array.slice(middle);
  console.log("right= "+right)
  return sortHalves(mergeSort(left), mergeSort(right));
}

function sortHalves(left, right) {
  let array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
//   // array.slice() with no arguments is a trick to make a copy of the array
//   // .concat is to smash all of the arrays together
//   // ...maybe there's an ES6 way to do this?
  // return array.concat(left.slice()).concat(right.slice());
  return array = [...left.map,...right.map];
//
}
//
// module.exports = mergeSort;
