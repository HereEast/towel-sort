module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix == []) {
    return [];
  }

  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      matrix[i] = matrix[i].reverse();
    }
     newArr = newArr.concat(matrix[i]);
  }
  return newArr;
}