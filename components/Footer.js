import { fadeIn } from "./animation/animations";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<>
			<motion.div
				variants={fadeIn}
				initial="initial"
				animate="animate"
				exit="exit"
				className="px-4 md:px-16 pt-6 md:pt-16 pb-8 w-full block md:flex justify-between text-sm uppercase text-center md:text-left text-white-50"
			>
				<p className="opacity-50">tushardate@gmail.com</p>
				<p className="opacity-50">720-292-0384</p>
				<p className="opacity-50">© 2023 Tushar Date</p>
			</motion.div>
		</>
	);
}
