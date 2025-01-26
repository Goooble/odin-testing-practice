function analyzeArray(array) {
  function getMin(array) {
   
    return  array.sort()[0];
  }
  function getMax(array) {
   
    return  array.sort()[array.length-1];
  }
  function getAverage(array) {
    let sum = array.reduce((total, num) => {
      return total + num;
    }, 0);
    console.log(sum);
    return sum / array.length;
  }
  return { average: getAverage(array), min: getMin(array), max: getMax(array), length: array.length };
}

module.exports = analyzeArray;
