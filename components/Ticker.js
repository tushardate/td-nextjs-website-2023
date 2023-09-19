import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaMagic,
	FaPaintBrush,
	FaThumbsUp,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaFireExtinguisher,
	FaHandsHelping,
	FaHandPeace
} from "react-icons/fa";

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
			ease: [0.16, 1, 0.3, 1],
		},
	},
	exit: {
		opacity: 0,
		y: -3,
		transition: {
			duration: 0.65,

			ease: [0.7, 0, 0.84, 0],
		},
	},
};

const texts = [
	"Creative Director",
	"Art Director",
	"Freelance",
	"720-292-0384",
	"tushardate@gmail.com",
	"Los Angeles",
];
const icons = [
	FaMagic,
	FaPaintBrush,
	FaThumbsUp,
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
];

const Ticker = () => {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
		}, 3200);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="ticker-container normal-case">
			<AnimatePresence mode="wait">
				{icons.map(
					(Icon, index) =>
						index === currentTextIndex && (
							<motion.div
								key={index}
								className="ticker-text flex items-center text-lg uppercase gap-2"
								variants={textVariants}
								initial="initial"
								animate="animate"
								exit="exit"
								custom={index === 0 ? 0 : 1} // Add a custom delay for the entering text
							>
								<Icon className="text-base mb-1" />
								{texts[index]}
							</motion.div>
						)
				)}
			</AnimatePresence>
		</div>
	);
};

export default Ticker;
