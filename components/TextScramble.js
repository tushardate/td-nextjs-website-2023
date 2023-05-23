import { useRef } from "react";

export default function TextScramble({ text, ...otherProps }) {
	const ref = useRef(null);
	let interval;

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

	function handleHover(e) {
		interval = setInterval(() => {
			let s = shuffle(text);
			ref.current.innerHTML = s;
		}, 50);

		setTimeout(() => {
			clearInterval(interval);
			ref.current.innerHTML = text;
		}, 300);
	}

	function handleLeave(e) {
		clearInterval(interval);
		ref.current.innerHTML = text;
	}

	return (
		<span
			style={{ fontKerning: "none" }}
			onMouseEnter={handleHover}
			onMouseLeave={handleLeave}
			ref={ref}
			{...otherProps}
		>
			{text}
		</span>
	);
}
