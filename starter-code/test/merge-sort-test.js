// var { expect }  = require('chai');
// var mergeSort   = require('../src/merge-sort');
//
// describe('mergeSort()', function() {
//   it('should an array of numbers sorted from least to greatest', function() {
//     var array = [12, 15, 0, 3, 6, 5, 10, 7, 9, 3];
//     expect(mergeSort(array)).to.deep.equal([ 0, 3, 3, 5, 6, 7, 9, 10, 12, 15 ]);
//   });
// });

function mergeSirt(array) {
  if (array.length < 2) {return array}
  const middle = math.floor(array.length/2);
  const right = array.slice(0, middle);
  const right = array(middle);

  return sortHalves(mergeSort(left), mergeSort(right));
}

function sortHalves(left, right) {
  const array = [];
  while (left.length && right.length) {
    if(left[0]<right[0]){
      array.push(left.shift());
    }
    else {
      array.push(right.shift());
    }
  }
  return [...array, ...left, ...right];
}
