function findAndVaryWord(input) {

	const wordPattern = /(\d+[a-zA-Z]+|[a-zA-Z]+\d+)[\da-zA-Z]*/g
	let wordArray = input.match(wordPattern)

	let res = []
	// Split each word into subword (digits or characters)
	subWordPattern = /(\d+|[a-zA-Z]+)/g

	wordArray.forEach(ele => {
		let subWordArray = ele.match(subWordPattern)

		// Determine cases for injecting variation character into original word
		let variationCases = []
		
		// Use binary approach to generate all injection cases.
		// If word have n subwords, there will be 2^(n-1) - 1 ways for injection.
		let binaryLength = (subWordArray.length - 1).toString(2).length
		for (let i = 1; i < 2 ** (subWordArray.length - 1); i++) {
			let binaryCaseIndex = i.toString(2).padStart(binaryLength, "0").split("").map(ele => ele == '0' ? "" : "-")
			variationCases.push(binaryCaseIndex)
		}
		
		// Inject variation character into original word
		variationCases.forEach(ele => {
			let newWord = subWordArray[0]
			for (let i = 0; i < ele.length; i++) {
				newWord += ele[i] + subWordArray[i + 1]
			}
			res.push(newWord)
		})
	})
	return res
}

let input = "Products are created with 132cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options"
console.log(findAndVaryWord(input))