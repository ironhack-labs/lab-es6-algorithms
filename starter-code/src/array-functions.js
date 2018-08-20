class ArrayFunctions {

  printSpecial(array) {
    return  array.join(" --- ")
  }

  doubleArray(array) {
    return array.map(el => el*2)
  }

  superPower(array) {
    return array.reduce((sum, number, index) => {
      return sum + (number * (Math.pow(10, index)));
    });
  }
}

module.exports = ArrayFunctions;