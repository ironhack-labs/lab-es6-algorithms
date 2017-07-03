class ArrayFunctions {
  printSpecial (array) {

    array = array.map((item,index) => {
      if(index!== array.length-1){
        return item + " --- ";
      }
      else{
        return item;
      }
    });

    array = array.join("");
    return array;
  };

  doubleArray (array) {
    return array.map(item => item*=2);

  }

  superPower (array) {
     return array.reduce((sum,item,index) => {
       return sum + (item * (Math.pow(10, index)));
     });
    };




};

module.exports = ArrayFunctions;
