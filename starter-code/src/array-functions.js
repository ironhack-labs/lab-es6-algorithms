/*jshint esversion:6*/
class ArrayFunctions {
  constructor(array){
    this.array = array;

  }

  printSpecial(array){
    return array.join(" --- ");
  }

  doubleArray(array){
    return array.map(number => {return number * 2;}
  );}

  superPower(array){
    return array.reduce((sum, number, index) => {return sum + (number * (Math.pow(10, index)));}
  );}


}

module.exports = ArrayFunctions;
