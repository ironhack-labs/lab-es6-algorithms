class ArrayFunctions{
  constructor(){
  }
  printSpecial(array){
    return array.join(" --- ");
  }
  doubleArray(array){
    return array.map(number=>number * 2);
  }
  superPower(array) {
    return array.reduce((sum, number, index) => sum + (number * (Math.pow(10, index))));
  }

}
 const arrayFunctionsObject = new ArrayFunctions();
 arrayFunctionsObject.printSpecial([12, 33, 144, 122]);
 arrayFunctionsObject.doubleArray([10, 20, 35, 12]);

// 3) Define a function that takes an array with numbers and returns the result of multiplying each element by ten to the power of the position it's in:
// ArrayFunctions.superPower([1,2,3,4,5])
// 54321
// explanation: (1 x 10^0) + (2 x 10^1) + (3 x 10^2) + (4 x 10^3) + (5 x 10^4)
// explanation: (1)        + (20)       + (300)      + (4000)     + (50000)

module.exports = ArrayFunctions;
