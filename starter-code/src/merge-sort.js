function mergeSort(array) {
  if(array.length < 2) { return array }

  let middle  = Math.floor(array.length / 2);
  let left    = array.slice(0, middle);
  let right   = array.slice(middle);

  return sortHalves(mergeSort(left), mergeSort(right));
}

function sortHalves(left, right) {
  let array = [];
  while(left.length && right.length) {
    left[0] < right[0] ? array.push(left.shift()) : array.push(right.shift())
  }
  return [...array,...left,...right];
}

module.exports = mergeSort;
