import Link from "next/link";
import { useCursorStore } from "./GlobalStore";
import { useState, useEffect } from "react";

function ProjectThumbnailMobile(props) {
	const { title, id, slug, thumbnailImage, client } = props.data;
	const { cursorType, setCursorType } = useCursorStore();

	return (
		<Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
			<div className="project-thumbnail">
				<div className="thumbnailRatio relative w-full rounded-lg">
					<div className="thumbnail absolute w-full h-full">
						<img
							className="object-cover w-full"
							src={`${thumbnailImage}tr=w-1440`}
							srcSet={`${thumbnailImage}tr=w-800 800w, ${thumbnailImage}tr=w-1200 1200w, ${thumbnailImage}tr=w-1500 1500w, ${thumbnailImage}tr=w-1920 1920w,`}
							sizes="(max-width: 1024px) 100vw, 50vw"
							alt=""
						/>
					</div>
					<div className="w-full h-full">
						<div className="absolute top-0 left-0 w-full h-full bg" />
						<div
							className={`absolute top-0 left-0 w-full h-full px-9 py-6 sm:px-14 sm:py-11 flex flex-col gap-0 lg:gap-2 justify-end items-start`}
						>
							<p className="text-white text-base">
								{client}
							</p>
							<p className="text-3xl sm:text-5xl text-white sm:w-4/6 thumbnailTitle font-medium">
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
