// function bubbleSort(array) {
//     var length = array.length;
//     for (var i = (length - 1); i > 0; i--) {
// Number of passes
// for (var j = (length - i); j > 0; j--) {
// Compare the adjacent positions
// if (array[j] < array[j - 1]) {
// Swap the numbers
//                 var tmp = array[j];
//                 array[j] = array[j - 1];
//                 array[j - 1] = tmp;
//             }
//         }
//     }
//     return array;
// }

// module.exports = bubbleSort;
///------------------------------ES6 ------------------------------------//
function bubbleSort(array) {
    const length = array.length;
    for (let i = (length - 1); i > 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (array[j] < array[j - 1]) {
                const tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;		
