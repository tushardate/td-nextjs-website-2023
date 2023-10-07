"use client";
import { useEffect, useState } from "react";
import SplitType from "split-type";

export default function TDSplitText({
	types,
	className,
	onComplete,
	children,
	lineClass = "line",
	wordClass = "word",
	charClass = "char",
	splitClass = null,
}) {
	const [text, setText] = useState(null);

	useEffect(() => {
		if (types) {
			let res = new SplitType("#td-split-text", {
				types: types,
				lineClass,
				wordClass,
				charClass,
				splitClass,
			});
			setText(res);
		} else {
			let res = new SplitType("#td-split-text", {
				lineClass,
				wordClass,
				charClass,
				splitClass,
			});
			setText(res);
		}
	}, []);

	// useEffect(() => {
	// 	if (text !== null) {
	// 		text.lines.map((el) => (el.style.opacity = 0));
	// 	}
	// }, [text]);

	useEffect(() => {
		if (onComplete && text !== null) {
			text.revert();
			setText(null);
		}
	}, [onComplete]);

	return (
		<div className={className} id="td-split-text">
			{children}
		</div>
	);
}
