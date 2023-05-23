import { motion } from "framer-motion";

export default function Ticker() {
	const items = ["Tushar Date", "Creative Director", "Los Angeles"];

	const anim = {
		initial: {
			y: 30,
		},
		animate: (custom) => ({
			y: [30, 0, 0, -30],
			transition: {
				times: [0, 0.2, 0.8, 1],
				delay: custom.index * 1.6,
				duration: 2,
				repeat: 5,
				repeatDelay: 1.6 * (custom.length - 1)
			},
		}),
	};

	return (
		<div className="relative hidden md:block">
			{items.map((el, i) => {
				return (
					<motion.div
						key={i}
						variants={anim}
						initial="initial"
						animate="animate"
						custom={{index: i, length: items.length}}
						className="absolute top-0 whitespace-nowrap leading-none"
					>
						{el}
					</motion.div>
				);
			})}
		</div>
	);
}
