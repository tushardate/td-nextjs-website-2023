import { motion, useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

export default function Ticker2() {
	const [scope, animate] = useAnimate();

    console.log("render")

	const yAnim = [10, 0, 0, -10];
	const opacityAnim = [0, 1, 1, 0];
	const yTimes = [0, 0.1, 0.9, 1];
	const duration = 3;
	const at = "-0.15";

	const sequence = [
		["li", { y: 20, opacity: 0 }, { duration: 0 }],
		[
			".name1",
			{ y: yAnim, opacity: opacityAnim },
			{ times: yTimes, duration: duration, at: at },
		],
		[
			".role",
			{ y: yAnim, opacity: opacityAnim },
			{ times: yTimes, duration: duration, at: at },
		],
		[
			".location",
			{ y: yAnim, opacity: opacityAnim },
			{ times: yTimes, duration: duration, at: at },
		],
		// [
		// 	".name2",
		// 	{ y: yAnim, opacity: opacityAnim },
		// 	{ times: yTimes, duration: duration, at: at },
		// ],
	];

	useEffect(() => {
		animate(sequence, {
			repeat: 1,
			repeatDelay: -0.15,
			ease: "anticipate",
		});
	});

	return (
		<motion.ul className="relative" ref={scope}>
			<motion.li className="name1 absolute inset-0 whitespace-nowrap">
				Tushar Date
			</motion.li>
			<motion.li className="role absolute inset-0 whitespace-nowrap">
				Creative Director
			</motion.li>
			<motion.li className="location absolute inset-0 whitespace-nowrap">
				Los Angeles
			</motion.li>
			{/* <motion.li className="name2 absolute inset-0 whitespace-nowrap">
				Tushar Date
			</motion.li> */}
		</motion.ul>
	);
}
