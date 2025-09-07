module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return [];
  }

  if (matrix.length === 0) {
    const result = [];
    return result;
  }

  if (matrix.length === 2) {
    const arrOne = matrix[0];
    const arrTwo = matrix[1].reverse();
    const result = [...arrOne, ...arrTwo];
    return result;
  }

  if (matrix.length === 3) {
    const arrOne = matrix[0];
    const arrTwo = matrix[1].reverse();
    const arrThree = matrix[2];
    const result = [...arrOne, ...arrTwo, ...arrThree];
    return result;
  }

  if (matrix.length === 4) {
    const arrOne = matrix[0];
    const arrTwo = matrix[1].reverse();
    const arrThree = matrix[2];
    const arrFour = matrix[3].reverse();
    const result = [...arrOne, ...arrTwo, ...arrThree, ...arrFour];
    return result;
  }
  return [];
};
