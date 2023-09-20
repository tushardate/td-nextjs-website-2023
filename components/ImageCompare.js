import {
	anticipate,
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
			className="imageCompareWrapper overflow-hidden rounded-lg"
		>
			<img
				className="image image-before"
				src={`${before}tr=w-1440`}
				srcSet={`${before}tr=w-800 800w, ${before}tr=w-1200 1200w, ${before}tr=w-1500 1500w, ${before}tr=w-1920 1920w,`}
				sizes="(max-width: 1024px) 100vw, 50vw"
			/>
			<div className="image-after-wrapper">
				<motion.img
					variants={anim}
					// style={{
					// 	clipPath: `polygon(calc(${pos.get()}% + 1px) 0, 100% 0, 100% 100%, calc(${pos.get()}% + 1px) 100%)`,
					// }}
					className="image image-after"
					src={`${after}tr=w-1440`}
					srcSet={`${after}tr=w-800 800w, ${after}tr=w-1200 1200w, ${after}tr=w-1500 1500w, ${after}tr=w-1920 1920w,`}
					sizes="(max-width: 1024px) 100vw, 50vw"
				/>
			</div>
		</motion.div>
	);
}
