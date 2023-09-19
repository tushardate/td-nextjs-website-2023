import Link from "next/link";
import { motion, useAnimationControls, useAnimate } from "framer-motion";
import { useCursorStore } from "./GlobalStore";
import { useEffect, useLayoutEffect } from "react";

function ProjectThumbnail(props) {
	const { title, id, slug, project } = props.data;
	const { cursorType, setCursorType } = useCursorStore();
	const controls = useAnimationControls();
	const [scope, animate] = useAnimate();

	useEffect(() => {
		animate(".thumbnailOverlay", { opacity: 0 }, { duration: 0.00001 });
		animate(
			".thumbnailInfo .client",
			{ y: 5, opacity: 0, color: "white" },
			{ duration: 0.00001 }
		);
		animate(
			".thumbnailInfo .thumbnailTitle",
			{ color: "white" },
			{ duration: 0.00001 }
		);
		animate(".thumbnailImage", { scale: 1 }, { duration: 0.00001 });
		animate(".thumbnailGradient", { opacity: 1 }, { duration: 0.00001 });
	}, []);

	const transition = {
		duration: 0.5,
		ease: [0.33, 1, 0.68, 1],
	};

	function handleHoverStart() {
		setCursorType("arrowBottomRight");
		animate(".thumbnailOverlay", { opacity: 0.75 }, transition);
		animate(
			".thumbnailInfo .client",
			{ y: 0, opacity: 1, color: "yellow" },
			transition
		);
		animate(
			".thumbnailInfo .thumbnailTitle",
			{ color: "yellow" },
			transition
		);
		animate(
			".thumbnailImage",
			{ scale: 1.035, filter: "grayscale(100%) brightness(85%)" },
			transition
		);
		animate(".thumbnailGradient", { opacity: 0 }, transition);
	}

	function handleHoverEnd() {
		setCursorType("default");
		animate(".thumbnailOverlay", { opacity: 0 }, transition);
		animate(
			".thumbnailInfo .client",
			{ y: 5, opacity: 0, color: "white" },
			transition
		);
		animate(
			".thumbnailInfo .thumbnailTitle",
			{ color: "white" },
			transition
		);
		animate(
			".thumbnailImage",
			{ scale: 1, filter: "grayscale(0%) brightness(100%)" },
			transition
		);
		animate(".thumbnailGradient", { opacity: 1 }, transition);
	}

	return (
		<Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
			<motion.div
				onHoverStart={() => handleHoverStart()}
				onHoverEnd={() => handleHoverEnd()}
				className="project-thumbnail"
				ref={scope}
			>
				<div className="thumbnailRatio relative w-full rounded-lg overflow-hidden safari-fix">
					<div className="thumbnail absolute w-full h-full">
						<motion.img
							className="object-cover w-full thumbnailImage"
							src={`${project.thumbnailImage}tr=w-1024`}
							srcSet={`${project.thumbnailImage}tr=w-1024 1024w, ${project.thumbnailImage}tr=w-1920 1920w,`}
							sizes="(min-width: 1024px) 50vw, 100vw"
							alt=""
						/>
					</div>
					<div className="w-full h-full">
						<motion.div className="absolute top-0 left-0 w-full h-full bg-tdblue thumbnailOverlay mix-blend-hard-light" />
						<motion.div className="absolute top-0 left-0 bottom-0 right-0 thumbnailGradient" />
						<motion.div
							className={`thumbnailInfo absolute top-0 left-0 w-full h-full px-6 py-5 flex flex-col gap-0 lg:gap-0.5 justify-end items-start`}
						>
							<p className="text-white text-base client">
								{project.client}
							</p>
							<p className="text-3xl sm:text-3xl text-white sm:w-5/6 thumbnailTitle">
								{title}
							</p>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</Link>
	);
}

export default ProjectThumbnail;
