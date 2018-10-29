class ArrayFunctions {
  constructor() {

  }
  printSpecial(arr) {
    return arr.join(" --- ");
  }
  doubleArray(arr) {
    return arr.map((number) => {
      return number * 2;
    });
  }
  superPower(arr) {
    return arr.reduce((sum, number, index) => {
      return sum + (number * (Math.pow(10, index)));
    });
  }
}

module.exports = ArrayFunctions;
