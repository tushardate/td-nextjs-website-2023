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
				className="px-16 pt-16 pb-8 w-full flex justify-between text-sm uppercase opacity-30"
			>
				<p>tushardate@gmail.com</p>
				<p>720-292-0384</p>
				<p>© 2023 Tushar Date</p>
			</motion.div>
		</>
	);
}
