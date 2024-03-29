import { motion, AnimatePresence } from "framer-motion";
import { useTickerStore } from "./GlobalStore";

const textVariants = {
	initial: {
		opacity: 0,
		y: 3,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: [0.16, 1, 0.3, 1],
		},
	},
	exit: {
		opacity: 0,
		y: -3,
		transition: {
			duration: 1,

			ease: [0.7, 0, 0.84, 0],
		},
	},
};

const Ticker = () => {
	const { counter, icons, texts } = useTickerStore();

	return (
		<div className="ticker-container normal-case opacity-40">
			<AnimatePresence mode="wait" initial={false}>
				{icons &&
					icons.map(
						(Icon, index) =>
							index === counter && (
								<motion.div
									key={index}
									className="ticker-text flex items-center uppercase gap-1.5"
									variants={textVariants}
									initial="initial"
									animate="animate"
									exit="exit"
									custom={index === 0 ? 0 : 1} // Add a custom delay for the entering text
								>
									{/* <Icon className="text-base mb-1" /> */}
									{texts && texts[index]}
								</motion.div>
							)
					)}
			</AnimatePresence>
		</div>
	);
};

export default Ticker;
