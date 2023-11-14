function sayHello(string) {
	if (typeof string === "string") {
		console.log(`Hello ${string} just wanted to say hI`);
		return "Good";
	}

	return "Bad ";
}

module.exports = sayHello;
