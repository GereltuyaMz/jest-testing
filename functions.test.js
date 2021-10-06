const sum = require("./sum");
const factorial = require("./factorial");


// sum.js
// test whether it 1 + 2 == 3
test("adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3);
});

// factorial.js
test("factorial of 3 is equal 6", () => {
	expect(factorial(3)).toBe(6);
});


// Truthiness
describe("Test null, true, false", () => {
	test("truthy operators", () => {
		var name = "Software testing";
		var n = null;
		expect(n).toBeNull();

		expect(name).not.toBeNull;
		expect(name).toBeTruthy();

		// expect(n).toBeTruthy();
		expect(n).toBeFalsy();

		expect(0).toBeFalsy();
	});

	test("numeric operators", () => {
		var num1 = 100;
		var num2 = -20;
		var num3 = 0;

		expect(num1).toBeGreaterThan(10);

		expect(num2).toBeLessThanOrEqual(0);

		expect(num3).toBeGreaterThanOrEqual(0);
	});
});
