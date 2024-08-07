// function towelSort (matrix) {
// 	const result = matrix.flat(Infinity);
//   return result;
// }
// console.log(towelSort([
// 	[1, 2],
// 	[3, 4],
// ]))


// const a = [
// [1, 2],
// [3, 4],
// ]

// console.log(a[0])
// console.log(a.length)




// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2.reverse());

// console.log(array3);

// function towelSort (matrix) {
// 	if (matrix.length === 2) {
// 		const arrOne = matrix[0];
// 		const arrTwo = matrix[1].reverse()
// 		const result = [...arrOne, ...arrTwo];
// 		return result;
// 	}
// }

// console.log(towelSort ([
// 	[1, 2],
// 	[3, 4],
// 	]))

// function towelSort (matrix) {
// 	let newArr = [];
// 	for(i = 0; i <= matrix.length; i+2) {

// 	}
// 	if (matrix.length === 2) {
// 		const arrOne = matrix[0];
// 		const arrTwo = matrix[1].reverse()
// 		const result = [...arrOne, ...arrTwo];
// 		return result;
// 	}
// }

function towelSort (matrix) {
	if (matrix === undefined) {
		return []
	}
	if (matrix.length === 2) {
		const arrOne = matrix[0];
		const arrTwo = matrix[1].reverse();
		const result = [...arrOne, ...arrTwo];
		return result;
	}
  return [];
}

console.log(towelSort ())