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
				className="h-20 px-16 w-full md:flex justify-between items-center uppercase text-xl bg-white text-black"
			>
				<p className="">tushardate@gmail.com</p>
				<p className="">720-292-0384</p>
				<p className="">© 2023 Tushar Date</p>
			</motion.div>
		</>
	);
}
