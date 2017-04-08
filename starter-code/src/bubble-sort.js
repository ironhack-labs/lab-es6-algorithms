//If using "let" and "const" is mandatory, check  second snippet

function bubbleSort (array) {
    for (let i = (array.length - 1); i > 0; i--) {
        for (let j = (array.length - i); j > 0; j--) {
            if (array[j] < array[j - 1]) {
               [array[j - 1], array[j]] = [array[j], array[j - 1]];
            }
        }
    }
    return array;
}

module.exports = bubbleSort;


function bubbleSort(array) {
    const length = array.length;
    for (let i = (length - 1); i > 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (array[j] < array[j - 1]) {
                let tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;
