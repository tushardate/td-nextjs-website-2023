import Link from "next/link";
import { useCursorStore } from "./GlobalStore";
import { motion } from "framer-motion";
import { clipPathAnim } from "@components/animation/animations";
import TDAnimText from "./TDAnimText";

export default function PrevNext(props) {
	const { prev, next } = props;
	const { setCursorType } = useCursorStore();

	return (
		<motion.div className="flex flex-col items-center z-50 px-4 md:px-16 pt-4 md:mt-24 md:mb-16">
			<motion.div className="w-12 h-1 rounded-full bg-tdblue mb-4"></motion.div>

			<Link
				as={`/projects/${next.slug}`}
				href="/projects/[slug]"
				scroll={false}
				className="w-full "
				onMouseEnter={() => setCursorType("arrowRight")}
				onMouseLeave={() => setCursorType("default")}
			>
				<motion.div className="flex flex-col gap-2 items-center">
					<div className="text-30px">Next Project</div>
					<div className="text-54px font-bold leading-tighter mb-5">
						{next.title}
					</div>
					<motion.div
						variants={clipPathAnim}
						initial="initial"
						whileInView="whileInView"
						viewport={clipPathAnim.viewport}
						className="relative overflow-hidden safari-fix rounded-2xl imageWrapper w-5/12"
					>
						<div className="absolute w-full">
							<motion.img
								className="object-cover w-full thumbnailImage"
								src={`${next.thumbnailImage}tr=w-1440`}
								srcSet={`${next.thumbnailImage}tr=w-800 800w, ${next.thumbnailImage}tr=w-1200 1200w, ${next.thumbnailImage}tr=w-1500 1500w, ${next.thumbnailImage}tr=w-1920 1920w,`}
								sizes="(max-width: 1024px) 100vw, 50vw"
								alt=""
							/>
						</div>
					</motion.div>
				</motion.div>
			</Link>
			<TDAnimText text="Test Text" className="tdAnimText" el="p" />
			{/* <Link
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
			</Link> */}
		</motion.div>
	);
}
