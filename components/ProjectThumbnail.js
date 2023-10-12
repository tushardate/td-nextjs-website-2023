import Link from "next/link";
import {
	motion,
	useAnimationControls,
	useAnimate,
	stagger,
} from "framer-motion";
import { useCursorStore } from "./GlobalStore";
import { useEffect, useRef, useState } from "react";
import Tag from "./Tag";
import TDSplitText from "./TDSplitText";

function ProjectThumbnail(props) {
	const { title, id, slug, thumbnailImage, client } = props.data;
	const { cursorType, setCursorType } = useCursorStore();
	const controls = useAnimationControls();
	const [scope, animate] = useAnimate();
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (isHovered) {
			let enter = animate([
				[
					".thumbnailImage",
					{ scale: 1.05 },
					{ duration: 0.35, ease: "anticipate" },
				],
				[
					".blueOverlay",
					{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
					{ duration: 0.35, ease: [0.75, 0, 0, 1], at: "<" },
				],
				[
					".item",
					{ x: 0, opacity: [0, 1] },
					{
						duration: 0.5,
						ease: "anticipate",
						delay: stagger(0.03),
						at: "-0.25",
					},
				],
			]);
		} else {
			let exit = animate([
				[
					".item",
					{ x: 5, opacity: 0 },
					{ duration: 0.3, ease: "anticipate" },
				],
				[
					".blueOverlay",
					{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
					{ duration: 0.35, ease: [0.75, 0, 0, 1], at: "<" },
				],
				[
					".thumbnailImage",
					{ scale: 1 },
					{ duration: 0.4, ease: "anticipate", at: "<" },
				],
			]);
		}
	}, [scope, isHovered]);

	function handleHoverStart() {
		setCursorType("arrowBottomRight");
		setIsHovered(true);
	}

	function handleHoverEnd() {
		setCursorType("default");
		setIsHovered(false);
	}

	return (
		<motion.div ref={scope}>
			<Link
				as={`/projects/${slug}`}
				href="/projects/[slug]"
				scroll={false}
			>
				<motion.div
					onHoverStart={() => handleHoverStart()}
					onHoverEnd={() => handleHoverEnd()}
					className="projectThumbnail thumbnailRatio relative overflow-hidden rounded-2xl text-black"
				>
					<div className="overflow-hidden safari-fix rounded-2xl imageWrapper absolute w-full">
						<div className="absolute w-full h-full">
							<motion.img
								className="object-cover w-full thumbnailImage"
								src={`${thumbnailImage}tr=w-1440`}
								srcSet={`${thumbnailImage}tr=w-800 800w, ${thumbnailImage}tr=w-1200 1200w, ${thumbnailImage}tr=w-1500 1500w, ${thumbnailImage}tr=w-1920 1920w,`}
								sizes="(max-width: 1024px) 100vw, 50vw"
								alt=""
							/>
						</div>
					</div>
					<div className="blueOverlay w-full h-full absolute top-0 left-0 bg-white rounded-2xl"></div>
					{/* <div className="w-full h-full absolute top-0 left-0 bg-white"></div> */}
					{/* <motion.div className="absolute top-0 left-0 w-full h-full thumbnailOverlay" /> */}

					<div className="w-full h-full absolute top-0 left-0">
						<motion.div
							className={`thumbnailInfo absolute top-0 left-0 w-full h-full px-16 py-14 flex flex-col`}
						>
							<p className="item thumbnailClient text-xl mb-1 opacity-0">
								{client}
							</p>
							<TDSplitText
								type="words"
								wordClass="item opacity-0"
								className="thumbnailTitle text-[4vw] leading-tightest font-semibold -ml-0.5"
							>
								{title}
							</TDSplitText>
							{/* <p className="item thumbnailTitle text-[3.35vw] leading-tight font-bold -ml-0.5">
								{title}
							</p> */}
							<div className="thumbnailTags flex gap-3 border-black pb-[1px] mt-auto">
								<Tag className="item opacity-0" text="Branding" />
								<Tag className="item opacity-0" text="Campaign" />
								<Tag className="item opacity-0" text="Social" />
							</div>
						</motion.div>
					</div>
				</motion.div>
			</Link>
		</motion.div>
	);
}

export default ProjectThumbnail;
