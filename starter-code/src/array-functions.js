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
 arrayFunctionsObject.superPower([1,2,3,4,5]);

module.exports = ArrayFunctions;
