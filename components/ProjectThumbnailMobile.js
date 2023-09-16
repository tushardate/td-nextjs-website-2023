import Link from "next/link";
import { useCursorStore } from "./GlobalStore";
import { useState, useEffect } from "react";

function ProjectThumbnailMobile(props) {
	const { title, id, slug, project } = props.data;
	const { cursorType, setCursorType } = useCursorStore();

	return (
		<Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
			<div className="project-thumbnail">
				<div className="thumbnailRatio relative w-full rounded-lg">
					<div className="thumbnail absolute w-full h-full">
						<img
							className="object-cover w-full"
							src={`${project.thumbnailImage}tr=w-1024`}
							srcSet={`${project.thumbnailImage}tr=w-1024 1024w, ${project.thumbnailImage}tr=w-1920 1920w,`}
							sizes="(min-width: 1024px) 50vw, 100vw"
							alt=""
						/>
					</div>
					<div className="w-full h-full">
						<div className="absolute top-0 left-0 w-full h-full bg" />
						<div
							className={`absolute top-0 left-0 w-full h-full p-6 lg:p-12 flex flex-col gap-0 lg:gap-2 justify-end items-start`}
						>
							<p className="text-white text-base">
								{project.client}
							</p>
							<p className="text-3xl sm:text-5xl text-white sm:w-4/6 thumbnailTitle">
								{title}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProjectThumbnailMobile;
