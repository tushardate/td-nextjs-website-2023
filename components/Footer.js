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
				className="px-4 md:px-16 pt-6 md:pt-8 pb-8 w-full block md:flex justify-between text-sm uppercase text-center md:text-left"
			>
				{/* <p className="">tushardate@gmail.com</p> */}
				{/* <p className="">720-292-0384</p> */}
				<p className="mx-auto">© 2023 Tushar Date</p>
			</motion.div>
		</>
	);
}
