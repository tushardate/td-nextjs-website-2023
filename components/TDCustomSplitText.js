import { useRef, useState, useEffect } from "react";

export default function TDCustomSplitText({
	text = "",
	splitBy = "words",
	charClass = "td__char",
	wordClass = "td__word",
	lineClass = "td__line",
	globalClass = "td__splitElement",
	emptySpaceName = "__AKI__EMPTY__SPACE__",
	onComplete,
}) {
	const ref = useRef(null);
	const splitType = useState(splitBy);
	const [html, setHtml] = useState("Tushar");
	const textContent = text;
	const chars = [];
	const rawChars = [];
	const words = [];
	const rawWords = [];
	const strWords = [];
	const testArr = [];

	useEffect(() => {
		setHtml("");
		startSplit();
		onComplete(true);
	}, []);

	function startSplit() {
		splitChars();
		splitWords();
		combineAll();
	}

	function splitChars() {
		const textChars = textContent.split("");
		textChars.forEach((char) => {
			const charElement = createElement(
				"div",
				`${char}`,
				{
					style: "position:relative; display:inline-block;",
				},
				`${globalClass}`,
				`${charClass}`
			);

			rawChars.push(char === " " ? " " : charElement);
			chars.push(charElement);
		});
		rawChars.push(" ");
	}

	function splitWords() {
		let startIndex = 0;
		rawChars.forEach((rawChar, index) => {
			if (rawChar === " ") {
				const wordArray = rawChars
					.slice(startIndex, index)
					.filter((word) => word !== " ");

				const wordDiv = createElement(
					"div",
					"",
					{
						style: "position:relative; display:inline-block;",
					},
					`${globalClass}`,
					`${wordClass}`
				);

				wordArray.forEach((word) => {
					wordDiv.append(word);
				});

				words.push(wordDiv);
				rawWords.push(wordDiv, " ");
				startIndex = index;
			}
		});
	}

	function combineAll() {
		words.forEach((word) => {
			setHtml((prevState) => prevState + word.outerHTML + " ");
		});
	}

	function createElement(
		tagname,
		content = "",
		htmlAttributes = {},
		...cssClass
	) {
		const __element__ = document.createElement(tagname);
		__element__.classList.add(...cssClass);
		__element__.innerHTML = content;

		for (const [key, value] of Object.entries(htmlAttributes)) {
			__element__.setAttribute(key, value);
		}
		return __element__;
	}

	return (
		<div
			ref={ref}
			className="tdsplit-wrapper"
			dangerouslySetInnerHTML={{ __html: html }}
		></div>
	);
}
