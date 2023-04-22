import { motion } from "framer-motion";
export default function Ticker() {
	const tick = {
		initial: {
			opacity: 0,
			y: 5,
		},
		animate: (custom) => ({
			opacity: [1, 1, 0],
			y: [0, 0, -5],
			transition: {
				delay: custom * 2,
				duration: 1,
                repeat: Infinity
			},
		}),
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			className="tickerWrapper2 relative"
		>
			<motion.p
				variants={tick}
				custom={0}
				className="absolute top-0 left-0"
			>
				Tushar Date
			</motion.p>
			<motion.p
				variants={tick}
				custom={1}
				className="absolute top-0 left-0"
			>
				Creative Director
			</motion.p>
			{/* <motion.p variants={tick} initial="initial" animate="animate" custom={2} className="absolute top-0 left-0">Los Angeles</motion.p>
			<motion.p variants={tick} initial="initial" animate="animate" custom={3} className="absolute top-0 left-0">Tushar Date</motion.p> */}
		</motion.div>
	);
}
