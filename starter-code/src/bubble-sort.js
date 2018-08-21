// function bubbleSort(array) {
//     var length = array.length;
//     for (var i = (length - 1); i > 0; i--) {
//         // Number of passes
//         for (var j = (length - i); j > 0; j--) {
//             // Compare the adjacent positions
//             if (array[j] < array[j - 1]) {
//                 // Swap the numbers
//                 var tmp = array[j];
//                 array[j] = array[j - 1];
//                 array[j - 1] = tmp;
//             }
//         }
//     }
//     return array;
// }

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

module.exports = bubbleSort;
