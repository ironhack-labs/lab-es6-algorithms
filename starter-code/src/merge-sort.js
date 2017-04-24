function mergeSort(array) {
  if(array.length < 2) { return array }

  const middle  = Math.floor(array.length / 2);
  let left    = array.slice(0, middle);
  let right   = array.slice(middle);

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
  // array.slice() with no arguments is a trick to make a copy of the array
  // .concat is to smash all of the arrays together
  // ...maybe there's an ES6 way to do this?
  //let array2 = array.concat(left.slice()).concat(right.slice());
  // return array.concat(left.slice()).concat(right.slice());
  //arr1 = [...arr1, ...arr2];
   array = [...array, ...left, ...right];
  //  console.log("left: " + left);
   return array;
}
console.log(mergeSort([3,9, 0, 1, 2, 3, 4]));
module.exports = mergeSort;
