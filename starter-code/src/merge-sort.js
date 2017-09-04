/*jshint esversion:6*/

function mergeSort(array) {
  if(array.length < 2) { return array }

  const middle  = Math.floor(array.length / 2);
  let left    = array.slice(0, middle);
  let right   = array.slice(middle);

  return sortHalves(mergeSort(left), mergeSort(right));
}

function sortHalves(left, right) {
  const array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return [...array,...left,...right];
}

module.exports = mergeSort;
