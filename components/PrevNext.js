import Link from "next/link";
import { useCursorStore } from "./GlobalStore";
import { motion } from "framer-motion";
import {
	prevNextAnim,
} from "@components/animation/animations";

export default function PrevNext(props) {
	const { prev, next } = props;
	const { setCursorType } = useCursorStore();

	return (
		<motion.div className="z-50 px-4 pt-4 md:pt-8 flex justify-between font-ppmori tracking-ultra text-5xl md:text-8xl">
			<Link
				as={`/projects/${prev.slug}`}
				href="/projects/[slug]"
				scroll={false}
				className="pt-4 pr-4 pb-4 md:pt-8 md:pr-8 md:pb-8"
				onMouseEnter={() => setCursorType("arrowLeft")}
				onMouseLeave={() => setCursorType("default")}
			>
				<motion.span
					variants={prevNextAnim}
					initial="initial"
					whileInView="whileInView"
					viewport={prevNextAnim.viewport}
					exit="exit"
					className="inline-block"
				>
					Prev
				</motion.span>
			</Link>
			<Link
				as={`/projects/${next.slug}`}
				href="/projects/[slug]"
				scroll={false}
				className="pl-4 pt-4 pb-4 md:pl-8 md:pt-8 md:pb-8"
				onMouseEnter={() => setCursorType("arrowRight")}
				onMouseLeave={() => setCursorType("default")}
			>
				<motion.span
					variants={prevNextAnim}
					initial="initial"
					whileInView="whileInView"
					viewport={prevNextAnim.viewport}
					exit="exit"
					className="inline-block"
				>
					Next
				</motion.span>
			</Link>
		</motion.div>
	);
}
