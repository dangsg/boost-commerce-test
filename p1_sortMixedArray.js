function sortMixedArray(arr) {
	let numArr = []
	let strArr = []
	let specialCharArr = []

	const numPattern = /^\d+$/;
	const strPattern = /^[a-zA-Z]+$/;

	arr.forEach(ele => {
		if (numPattern.test(ele)) {
			numArr.push(parseInt(ele));
		} else if (strPattern.test(ele)) {
			strArr.push(ele);
		} else {
			specialCharArr.push(ele);
		}
	})

	res = numArr.sort((a,b) => a - b).map(String).concat(strArr.sort(), specialCharArr.sort())
	return res;
}

let inputArr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", "ba", ")", "ABC"];
console.log("Input: " + inputArr)
console.log("Output: " + sortMixedArray(inputArr))