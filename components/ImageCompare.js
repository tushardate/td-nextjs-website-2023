import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useSpring,
	useTransform,
} from "framer-motion";
import { useEffect } from "react";

export default function ImageCompare({ before, after }) {
	const anim = {
		initial: {
			clipPath:
				"polygon(calc(0% + 1px) 0, 100% 0, 100% 100%, calc(0% + 1px) 100%)",
		},
		animate: {
			clipPath: [
				"polygon(calc(0% + 1px) 0, 100% 0, 100% 100%, calc(0% + 1px) 100%)",
				"polygon(calc(100% + 1px) 0, 100% 0, 100% 100%, calc(100% + 1px) 100%)",
				"polygon(calc(0% + 1px) 0, 100% 0, 100% 100%, calc(0% + 1px) 100%)",
			],
			transition: {
				times: [0, 0.5, 1],
				duration: 8,
				ease: ["easeInOut", "easeInOut"],
				repeat: Infinity,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			animate="animate"
			className="imageCompareWrapper"
		>
			<img className="image image-before" src={`${before}tr=w-1920`} />
			<div className="image-after-wrapper">
				<motion.img
					variants={anim}
					// style={{
					// 	clipPath: `polygon(calc(${pos.get()}% + 1px) 0, 100% 0, 100% 100%, calc(${pos.get()}% + 1px) 100%)`,
					// }}
					className="image image-after"
					src={`${after}tr=w-1920`}
				/>
			</div>
		</motion.div>
	);
}
