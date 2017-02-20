class ArrayFunctions {

  // 1) Define a function that takes an array with numbers and prints all the elements of the array, separated by " --- "
  // ArrayFunctions.printSpecial([12, 33, 144, 122])

  static printSpecial (array) {
    return array.join(" --- ");
    // 12 -- 33 -- 144 -- 122
  }

  // 2) Define a function that takes an array with numbers and returns another array where each element contains double each element in the array
  // ArrayFunctions.doubleMyArray([10, 20, 35, 12])

  static doubleArray (array) {
    return array.map((number) => {
      return number * 2;
      // [20, 40, 70, 24]
    });
  }

  // 3) Define a function that takes an array with numbers and returns the result of multiplying each element by ten to the power of the position it's in:
  // ArrayFunctions.superPower([1,2,3,4,5])

  static superPower (array){
    return array.reduce((sum, number, index) => {
      return sum + (number * (Math.pow(10, index)));
      // 54321
    });
 }

}

module.exports = ArrayFunctions;
