import { motion } from "framer-motion";

const SplitLetters = ({ text, className, animation, style }) => {
	return (
		<motion.div className={`whitespace-nowrap ${className}`}>
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
							variants={animation}
							initial="initial"
							animate="animate"
							exit="exit"
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

export default SplitLetters;
