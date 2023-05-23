import Link from "next/link";
import { useCursorStore } from "./GlobalStore";
import { motion } from "framer-motion";
import {
	pageTransition,
	fadeIn,
	singleItemAnim,
} from "@components/animation/animations";

export default function PrevNext(props) {
	const { prev, next } = props;
	const { setCursorType } = useCursorStore();

	return (
		<motion.div
			variants={fadeIn}
			className="z-50 px-16 pt-16 flex justify-between font-migra text-8xl"
		>
			<Link
				as={`/projects/${prev.slug}`}
				href="/projects/[slug]"
				scroll={false}
				className="pt-8 pr-8 pb-8"
				onMouseEnter={() => setCursorType("arrowLeft")}
				onMouseLeave={() => setCursorType("default")}
			>
				<motion.span
					initial="initial"
					animate="animate"
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
				className="pl-8 pt-8 pb-8"
				onMouseEnter={() => setCursorType("arrowRight")}
				onMouseLeave={() => setCursorType("default")}
			>
				<motion.span
					initial="initial"
					animate="animate"
					exit="exit"
					className="inline-block"
				>
					Next
				</motion.span>
			</Link>
		</motion.div>
	);
}
