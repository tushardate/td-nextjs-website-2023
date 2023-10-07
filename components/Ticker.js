import { motion, AnimatePresence } from "framer-motion";
import { useTickerStore } from "./GlobalStore";
import SplitLetters from "./SplitLetters";
import { useEffect } from "react";

const enterAnim = {
	initial: {
		y: 20,
	},
	animate: (custom) => ({
		// opacity: 1,
		y: 0,
		transition: {
			duration: 0.85,
			// ease: [0.16, 1, 0.3, 1],
			delay: custom * 0.02,
			ease: "anticipate",
		},
	}),
};

const leaveAnim = {
	initial: {
		y: 0,
	},
	animate: (custom) => ({
		y: -20,
		transition: {
			duration: 0.85,
			delay: custom * 0.02,
			ease: "anticipate",
		},
	}),
};

const Ticker = () => {
	const { counter, icons, texts } = useTickerStore();

	useEffect(() => {
		console.log(texts[counter]);
	}, [counter]);

	return (
		<div className="relative overflow-hidden leading-5 -mb-1">
			<AnimatePresence mode="wait">
				{texts &&
					texts.map(
						(text, index) =>
							index === counter && (
								<>
									<SplitLetters
										key={index}
										text={text}
										animation={leaveAnim}
									/>
									<SplitLetters
										key={(index + 1) % texts.length}
										text={texts[(index + 1) % texts.length]}
										animation={enterAnim}
										className="absolute bottom-0"
									/>

									
								</>
							)
					)}
			</AnimatePresence>
		</div>
	);
};

export default Ticker;
