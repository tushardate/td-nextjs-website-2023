export function getRandomHue() {
	const randomNumber = Math.floor(Math.random() * 21);
	const multipleOf18 = randomNumber * 18;
	const result = Math.min(multipleOf18, 360);
	return result;
}
