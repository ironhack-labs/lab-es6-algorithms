function bubbleSort(array) {

    const LENGTH = array.length;
    for (let i = (LENGTH - 1); i > 0; i--) {
        // Number of passes
        for (let j = (LENGTH - i); j > 0; j--) {
            // Compare the adjacent positions
            if (array[j] < array[j - 1]) {
                // Swap the numbers
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
        }
    }
    return array;
}

module.exports = bubbleSort;
