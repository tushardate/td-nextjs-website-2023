import Link from "next/link";
import { motion, useAnimationControls } from "framer-motion";

function ProjectThumbnail(props) {
	const { title, id, slug, project } = props.data;

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
			<motion.div className="project-thumbnail">
				<div className="thumbnailRatio relative w-full rounded-lg">
					<div className="thumbnail absolute w-full h-full">
						<motion.img
							variants={imageAnim}
							initial="initial"
							animate={controls}
							onHoverStart={() => controls.start("hover")}
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
							initial="initial"
							animate={controls}
							onHoverStart={() => controls.start("hover")}
							onHoverEnd={() => controls.start("initial")}
							className="absolute top-0 left-0 w-full h-full bg"
						/>
						<motion.div
							variants={titleAnim}
							initial="initial"
							animate={controls}
							onHoverStart={() => controls.start("hover")}
							onHoverEnd={() => controls.start("initial")}
							className="absolute top-0 left-0 w-full h-full p-17 flex flex-col gap-2 justify-end items-start"
						>
							<p className="text-white text-sm">
								{project.client}
							</p>
							<p className="text-5xl text-white w-3/5 thumbnailTitle">
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
