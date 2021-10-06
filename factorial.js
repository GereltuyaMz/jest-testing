
function factorial(n) {
	let a;
	if (n >= 1) {
		return (a = n * factorial(n - 1));
	} else {
		return 1;
	}
}

module.exports = factorial;