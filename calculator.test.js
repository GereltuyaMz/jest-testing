const mathOperations = require("./calculator");

// Calculator.js
describe("Calculator tests", () => {
	test("adding 1 + 2 should return 3", () => {
		var result = mathOperations.sum(1, 2);
		expect(result).toBe(3);
	});

	test("subtracting 2 from 10 should return 8", () => {
		var result = mathOperations.diff(10, 2);
		expect(result).toBe(8);
	});

	test("multiply 2 & 8 should return 16", () => {
		var result = mathOperations.multiply(2, 8);
		expect(result).toBe(16);
	});
});