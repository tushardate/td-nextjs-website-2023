import Header from "./Header";
import Footer from "./Footer";
import { motion, quadIn, cubicOut } from "framer-motion";

export default function Layout({ children }) {
	const pageTransition = {
		initial: {
			y: 20,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.75,
				ease: cubicOut,
			},
		},
		exit: {
			y: 10,
			opacity: 0,
			transition: {
				duration: 0.35,
				ease: quadIn,
			},
		},
	};
	return (
		<>
			<Header />
			<motion.div
				variants={pageTransition}
				initial="initial"
				animate="animate"
				exit="exit"
			>
				{children}
			</motion.div>
			<Footer />
		</>
	);
}
