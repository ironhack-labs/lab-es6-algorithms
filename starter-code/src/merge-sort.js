// function mergeSort(array) {
//   if(array.length < 2) { return array }
//
//   var middle  = Math.floor(array.length / 2);
//   var left    = array.slice(0, middle);
//   var right   = array.slice(middle);
//
//   return sortHalves(mergeSort(left), mergeSort(right));
// }
//
// function sortHalves(left, right) {
//   var array = [];
//
//   while(left.length && right.length) {
//     if(left[0] < right[0]) {
//       array.push(left.shift());
//     } else {
//       array.push(right.shift());
//     }
//   }
//   // array.slice() with no arguments is a trick to make a copy of the array
//   // .concat is to smash all of the arrays together
//   // ...maybe there's an ES6 way to do this?
//   return array.concat(left.slice()).concat(right.slice());
// }

function mergeSort(array) {
  if(array.length < 2) {return array;}

  const middle  = Math.floor(array.length / 2);
  const left    = array.slice(0, middle);
  const right   = array.slice(middle);
  //this could be ler as well.

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

module.exports = mergeSort;
