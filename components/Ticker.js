import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
	initial: {
		opacity: 0,
		y: 3,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.65,
			ease: "easeOut",
		},
	},
	exit: {
		opacity: 0,
		y: -3,
		transition: {
			duration: 0.65,
			ease: "easeIn",
		},
	},
};

const texts = ["Creative Director", "Art Director", "Freelance", "Los Angeles"];

const Ticker = () => {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="ticker-container">
			<AnimatePresence mode="wait">
				{texts.map(
					(text, index) =>
						index === currentTextIndex && (
							<motion.div
								key={index}
								className="ticker-text"
								variants={textVariants}
								initial="initial"
								animate="animate"
								exit="exit"
								custom={index === 0 ? 0 : 1} // Add a custom delay for the entering text
							>
								{text}
							</motion.div>
						)
				)}
			</AnimatePresence>
		</div>
	);
};

export default Ticker;
