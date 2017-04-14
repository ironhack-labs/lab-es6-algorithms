function bubbleSort(array) {
    const length = array.length;
    //nothing reassigning the length
    for (let i = (length - 1); i > 0; i--) {

      // i++ is the same as reassigning i because i += 1 and i = i + 1 < is a reassignment
      //cannot be a const

        // Number of passes
        for (let j = (length - i); j > 0; j--) {
            // Compare the adjacent positions
            if (array[j] < array[j - 1]) {
                // Swap the numbers
                const tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            }
            //can be a const because there is nothing changing tmp
        }
    }
    return array;
}

module.exports = bubbleSort;

// let and const are block scoped so the scope of them are within the curly races
//people assume that it works within the entire scope of the function/ the scope of the variable behaved in the way that people expect
