var numeros = [1, 2, 3, 4, 5];
class ArrayFunctions {
    static printSpecial(array) {
        return array.join(" --- ");
    };

 static doubleArray(array) {
  return array.map(number => number * 2);
    }
    static superPower(array) {
      return array.reduce( (sum, number, i) => sum + (number * (Math.pow(10, i))))
    }
}
