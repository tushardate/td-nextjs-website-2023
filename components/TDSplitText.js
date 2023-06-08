import { useEffect } from "react";
import SplitType from "split-type";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

export default function TDSplitText({ children }) {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, {once: true});

	const anim = async () => {
		await animate(".line", { opacity: 0, x: 20 }, { duration: 0.000001 });
		await animate(
			".line",
			{ opacity: 1, x: 0 },
			{
				duration: 1,
				ease: [0.33, 1, 0.68, 1],
				delay: stagger(0.175),
			}
		);
	};

	useEffect(() => {
		const text = new SplitType("#td-split-text");
	}, []);

	useEffect(() => {
		if (isInView) {
			anim();
		}
	}, [isInView]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					duration: 1,
				},
			}}
		>
			<motion.div ref={scope} id="td-split-text">
				{children}
			</motion.div>
		</motion.div>
	);
}
