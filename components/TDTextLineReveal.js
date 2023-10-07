"use client";
import { useAnimate, useInView, stagger } from "framer-motion";
import { useEffect, useRef, useLayoutEffect, useState } from "react";
import SplitType from "split-type";


function TDTextLineReveal({ children, className, types }) {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, { margin: "0% 0% -15% 0%", once: true });
	const [text, setText] = useState(null);
	const [isAnimating, setIsAnimating] = useState(true);

	useEffect(() => {
		if (types) {
			let res = new SplitType(scope.current, { types: types });
			setText(res);
		} else {
			let res = new SplitType(scope.current);
			setText(res);
		}
	}, [scope]);

	useEffect(() => {
		if (text !== null) {
			text.lines.map((el) => (el.style.opacity = 0));
		}
	}, [text]);

	useEffect(() => {
		if (isInView && text !== null) {
			let enterAnim = async () => {
				await animate(
					".line",
					{ y: [10, 0], opacity: [0, 1] },
					{
						delay: stagger(0.15),
						duration: 1,
						ease: [0.75, 0, 0, 1.2],
					}
				);
			};
			enterAnim().then(() => setIsAnimating(false));
		}
	}, [isInView]);

	useEffect(() => {
		if (!isAnimating) {
			text.revert();
			setText(null);
		}
	}, [isAnimating]);

	return (
		<div ref={scope} className={className} id="td-split-text">
			{children}
		</div>
	);
}

export default TDTextLineReveal;
