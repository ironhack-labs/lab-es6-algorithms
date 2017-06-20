class ArrayFunctions {
  printSpecial(array) {
    return array.join(" --- ");
  }
  doubleArray(array) {
    return array.map(function(number){
      return number * 2;
  });
}
  superPower(array) {
    return array.reduce(function(sum, number, index) {
      return sum + (number * (Math.pow(10, index)));
  });
 }
}

module.exports = ArrayFunctions;
