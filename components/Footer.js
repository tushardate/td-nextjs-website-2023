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
				className="p-4 md:px-6 w-full block md:flex justify-between text-sm uppercase text-center md:text-left"
			>
				<p>&#9997; tushardate@gmail.com</p>
				<p>&#128222; 720-292-0384</p>
				<p>© 2023 Tushar Date</p>
			</motion.div>
		</>
	);
}
