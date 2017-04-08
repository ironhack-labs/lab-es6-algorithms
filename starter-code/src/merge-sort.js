function mergeSort(array) {
  if(array.length < 2) { return array; }

  const middle  = Math.floor(array.length / 2);
  let left    = array.slice(0, middle); // left is never reassigned so it could be const
  let right   = array.slice(middle); // right is never reassigned so it could be const

  return sortHalves(mergeSort(left), mergeSort(right));
}

function sortHalves(left, right) {
  var array = [];

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
  return array.concat(...left, ...right);
}

module.exports = mergeSort;
