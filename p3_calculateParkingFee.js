function calculateParkingFee (timeIn) {
	try {
		if (!(timeIn instanceof Date)) {
			throw new Error("Invalid input data type")
		} else if (isNaN(timeIn)){
			throw new Error("Invalid input data value")
		} else {
			const parkingPrice = 5;
			let timeOut = new Date();
			let totalDays = (timeOut.getTime() - timeIn.getTime()) / (1000 * 3600 * 24);
			if (totalDays < 0) {
				throw new Error("Invalid input data value")
			} else if (totalDays < 1) {
				totalDays = 1;
			} else {
				totalDays = Math.ceil(totalDays);
			}
			let totalParkingFee = parkingPrice * totalDays;
			return totalParkingFee;
		}
		

	} catch(e) {
		// statements
		console.log(e);
	}
}

function testValidInputData() {
	console.log("Test valid input data:");
	let validInputData = [
		new Date(2021, 2, 17, 12, 0, 0),
		new Date(2021, 2, 16, 12, 0, 0),
		new Date(2021, 2, 16, 23, 1, 2),
		new Date(2021, 1, 17, 12, 0, 0),
		new Date(2020, 2, 16, 12, 30, 0),
	]
	manualTest(validInputData);
}
// testValidInputData()

function testInvalidInputDataType() {
	console.log("Test invalid input data type:");
	let invalidInputDataType = [
		"String, not a DateTime data type",
		21,
		9.6,
		true,
		undefined,
		null,
		{a: 1}
	]
	manualTest(invalidInputDataType)
}
// testInvalidInputDataType()

function testInvalidInputValue() {
	console.log("Test invalid input data value:");
	let invalidDataValue = [
		new Date("invalid initialization date"),
		new Date(2022, 2, 17, 12, 0, 0),
	]
	manualTest(invalidDataValue);
}
// testInvalidInputValue()

function manualTest(inputData) {
	console.log("=====")
	console.log("Time out:\n" + new Date())
	console.log("=====")
	console.log("Time in".padEnd(50) + "\t" + "Parking Fee")
	inputData.forEach(ele => {
		console.log("-----")
		console.log(String(ele).padEnd(50) + "\t" + calculateParkingFee(ele))
	})
	console.log("-----")
	console.log("=====")
}

function testAll() {
	testValidInputData()
	testInvalidInputDataType()
	testInvalidInputValue()
}
testAll()