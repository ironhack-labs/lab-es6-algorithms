/*jshint esversion:6*/


class ArrayFunctions {
  printSpecial(){
    return array.join(" --- ");
  }
  doubleArray(){
    array.map(number => number*2);
  }
  superPower(array){
  }
}

// 3) Define a function that takes an array with numbers and returns the result of multiplying each element by ten to the power of the position it's in:
// ArrayFunctions.superPower([1,2,3,4,5])
// 54321
// explanation: (1 x 10^0) + (2 x 10^1) + (3 x 10^2) + (4 x 10^3) + (5 x 10^4)
// explanation: (1)        + (20)       + (300)      + (4000)     + (50000)

ArrayFunctions.prototype.superPower = function(array){
  return array.reduce(function(sum, number, index){
    return sum + (number * (Math.pow(10, index)));
  });
}

module.exports = ArrayFunctions;
