
class ArrayFunctions {


 static printSpecial(array){
   return array.join(" --- ");
 }



  static doubleArray (array){
  return array.map(number => number * 2);
}



  static superPower (array){
    return array.reduce((sum, number, index) => sum + (number * Math.pow(10, index)));
  }


}


module.exports = ArrayFunctions;
