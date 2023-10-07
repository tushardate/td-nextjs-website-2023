import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion";
import { useTickerStore } from "./GlobalStore";
import SplitLetters from "./SplitLetters";
import { useEffect } from "react";

const Ticker3 = () => {
	const { counter, icons, texts } = useTickerStore();
	const [scope, animate] = useAnimate();
	const totalDuration = 4;
	const enter = 0.2;
	const exit = 1 - enter / 2;

	useEffect(() => {
		const lines = document.querySelectorAll(".line");

		lines.forEach((line, index) => {
			animate(
				line,
				{
					y: [10, 0, 0, -10],
					opacity: [0, 1, 1, 0],
				},
				{
					duration: totalDuration,
					// ease: ["easeOut", null, null, "easeIn"],
					ease: [0.33, 1, 0.68, 1],
					times: [0, enter, exit, 1],
					delay: exit * totalDuration * index,
					repeat: Infinity,
					repeatDelay:
						exit * totalDuration * (lines.length - 1) -
						(enter / 2) * totalDuration,
				}
			);
		});
	}, []);

	return (
		<div ref={scope} className="relative leading-5 h-5 -mb-0.5">
			{texts &&
				texts.map((text, index) => (
					<SplitLetters
						key={index}
						text={text}
						className="absolute bottom-0 line"
					/>
				))}
		</div>
	);
};

export default Ticker3;
