class ArrayFunctions {
  construct() {}

  printSpecial(array) {
    return array.join(' --- ')
  }

  doubleArray(array) {
    return array.map((number) => number * 2)
  }

	superPower(array) {
		return array.reduce((sum, number, index) => sum + (number * (Math.pow(10, index))))
	}

}
module.exports = ArrayFunctions;
