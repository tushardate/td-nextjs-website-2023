"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const SplitLetters2 = ({ text, className, style, show = false }) => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		let chars = document.querySelectorAll(".char");
		if (scope.current && chars.length > 0) {
			animate(".char", { y: 20, opacity: 0 }, { duration: 0 });
			if (show) {
				const enterAnimation = async () => {
					await animate(
						".char",
						{ y: [null, 0], opacity: [null, 1] },
						{
							duration: 0.85,
							delay: stagger(0.02),
							ease: "anticipate",
						}
					);
				};
				enterAnimation();
			} else {
				const exitAnimation = async () => {
					await animate(
						".char",
						{ y: [null, -20], opacity: [null, 0] },
						{
							duration: 0.85,
							delay: stagger(0.02),
							ease: "anticipate",
						}
					);
					await animate(
						".char",
						{ y: 20, opacity: 0 },
						{ duration: 0 }
					);
				};
				exitAnimation();
			}
		}
	}, [scope, show]);

	return (
		<motion.div ref={scope} className={`whitespace-nowrap ${className}`}>
			{text &&
				text.split("").map((char, i) =>
					char === " " ? (
						<motion.span
							className="relative whitespace-nowrap inline-block char"
							key={i}
							custom={i}
							style={style}
						>
							&nbsp;
						</motion.span>
					) : (
						<motion.span
							className="relative whitespace-nowrap inline-block char"
							key={i}
							custom={i}
							style={style}
						>
							{char}
						</motion.span>
					)
				)}
		</motion.div>
	);
};

export default SplitLetters2;
