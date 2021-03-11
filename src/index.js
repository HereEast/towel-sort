

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  
  let newArr = [];
  for (let i = 0; i < matrix.length; i++){
     newArr = newArr.concat(matrix[i]);
  }
  return newArr;
}
