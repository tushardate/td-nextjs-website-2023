import { prevNextAnim } from "./animation/animations";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<>
			<motion.div
				variants={prevNextAnim}
				initial="initial"
				whileInView="whileInView"
				viewport={prevNextAnim.viewport}
				exit="exit"
				className="font-medium p-4 md:px-6 w-full block md:flex justify-between text-md text-center md:text-left"
			>
				<p>tushardate@gmail.com</p>
				<p>720-292-0384</p>
				<p>©2023 Tushar Date</p>
			</motion.div>
		</>
	);
}
