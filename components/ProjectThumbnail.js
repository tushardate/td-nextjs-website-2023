import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";
import { useCursorStore } from "./GlobalStore";
import useMobileDetect from "use-mobile-detect-hook";
import { deviceDetect, isMobile } from "react-device-detect";

function ProjectThumbnail(props) {
	const { title, id, slug, project } = props.data;
	const { cursorType, setCursorType } = useCursorStore();
	const detectMobile = useMobileDetect();

	const controls = useAnimationControls();

	const transition = {
		duration: 0.5,
		ease: [0.33, 1, 0.68, 1],
	};

	const titleAnim = {
		initial: {
			y: 5,
			opacity: 0,
			transition: transition,
		},
		hover: {
			y: 0,
			opacity: 1,
			transition: transition,
		},
	};

	const overlayAnim = {
		initial: {
			opacity: 0,
			transition: transition,
		},
		mobile: {
			opacity: 0.25,
			transition: transition,
		},
		hover: {
			opacity: 0.8,
			transition: transition,
		},
	};

	const imageAnim = {
		initial: {
			scale: 1,
			transition: transition,
		},
		hover: {
			scale: 1.035,
			transition: transition,
		},
	};

	return (
		<Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
			<motion.div
				onHoverStart={() => setCursorType("arrowBottomRight")}
				onHoverEnd={() => setCursorType("default")}
				className="project-thumbnail"
			>
				<div className="thumbnailRatio relative w-full rounded-lg">
					<div className="thumbnail absolute w-full h-full">
						<motion.img
							variants={imageAnim}
							initial="initial"
							animate={controls}
							onHoverStart={() =>
								controls.start(!isMobile ? "hover" : "initial")
							}
							onHoverEnd={() => controls.start("initial")}
							className="object-cover w-full"
							src={`${project.thumbnailImage}tr=w-1024`}
							srcSet={`${project.thumbnailImage}tr=w-1024 1024w, ${project.thumbnailImage}tr=w-1920 1920w,`}
							sizes="(min-width: 1024px) 50vw, 100vw"
							alt=""
						/>
					</div>
					<div className="w-full h-full">
						<motion.div
							variants={overlayAnim}
							initial={!isMobile ? "initial" : "mobile"}
							animate={controls}
							onHoverStart={() =>
								controls.start(!isMobile ? "initial" : "mobile")
							}
							onHoverEnd={() =>
								controls.start(!isMobile ? "hover" : "mobile")
							}
							className="absolute top-0 left-0 w-full h-full bg"
						/>
						<motion.div
							variants={titleAnim}
							initial={!isMobile ? "initial" : "hover"}
							animate={controls}
							onHoverStart={() => controls.start("hover")}
							onHoverEnd={() =>
								controls.start(!isMobile ? "initial" : "hover")
							}
							className={`absolute top-0 left-0 w-full h-full p-3 lg:p-17 flex flex-col gap-0 lg:gap-2 justify-end items-start ${
								isMobile && "dropShadow"
							}`}
						>
							<p className="text-white text-sm">
								{project.client}
							</p>
							<p className="text-2xl lg:text-5xl text-white lg:w-3/5 thumbnailTitle">
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
