import { useRef, useState, forwardRef, useImperativeHandle } from "react";

// eslint-disable-next-line react/display-name
const TextScramble2 = forwardRef((props, ref) => {
	let interval;
	const { text, ...otherProps } = props;
	const [string, setString] = useState(text);

	useImperativeHandle(ref, () => {
		return {
			handleHover: handleHover,
			handleLeave: handleLeave,
		};
	});

	function getRandomInt(n) {
		return Math.floor(Math.random() * n);
	}

	function shuffle(s) {
		var arr = s.split(""); // Convert String to array
		var n = arr.length; // Length of the array

		for (var i = 0; i < n - 1; ++i) {
			var j = getRandomInt(n); // Get random of [0, n-1]

			var temp = arr[i]; // Swap arr[i] and arr[j]
			arr[i] = arr[j];
			arr[j] = temp;
		}

		s = arr.join(""); // Convert Array to string
		return s; // Return shuffled string
	}

	function handleHover() {
		interval = setInterval(() => {
			let s = shuffle(text);
			setString(s);
		}, 50);

		setTimeout(() => {
			clearInterval(interval);
			setString(text);
		}, 300);
	}

	function handleLeave() {
		clearInterval(interval);
		setString(text);
	}

	return (
		<span style={{ fontKerning: "none" }} {...otherProps}>
			{string}
		</span>
	);
});

export default TextScramble2;
