import { useEffect } from "react";
import SplitType from "split-type";
import { motion, stagger, useAnimate } from "framer-motion";

export default function TDSplitText({ children }) {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		const text = new SplitType("#td-split-text");
		const lines = document.getElementsByClassName("line");
		for (let i = 0; i < lines.length; i++) {
			lines[i].style.opacity = 0
		}


		const anim = async () => {
			await animate(
				".line",
				{ opacity: 0, y: 15 },
				{ duration: 0.000001 }
			);
			await animate(
				".line",
				{ opacity: 1, y: 0 },
				{ duration: 2, delay: stagger(0.3) }
			);
		};

		anim();
	}, []);

	return (
		<div className="w-1/2">
			<motion.div ref={scope} id="td-split-text">
				{children}
			</motion.div>
		</div>
	);
}
