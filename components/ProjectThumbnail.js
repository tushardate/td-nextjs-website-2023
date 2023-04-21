import React, { useContext, useEffect } from "react";
import Link from "next/link";

function ProjectThumbnail(props) {
	const { title, id, slug, project } = props.data;

	return (
		<Link as={`/projects/${slug}`} href="/projects/[slug]" scroll={false}>
			<div className="project-thumbnail">
				<div className="thumbnailRatio relative w-full rounded-lg">
					<div
						className="thumbnail absolute w-full h-full"
					>
						<img
							className="object-cover w-full"
							src={`${project.thumbnailImage}tr=w-1024`}
							srcSet={`${project.thumbnailImage}tr=w-1024 1024w, ${project.thumbnailImage}tr=w-1920 1920w,`}
							sizes="(min-width: 1024px) 50vw, 100vw"
							alt=""
						/>
					</div>
					<div className="w-full h-full">
						<div
							className="absolute top-0 left-0 w-full h-full bg"
						/>
						<div className="absolute top-0 left-0 w-full h-full p-17 flex flex-col gap-2 justify-end items-start">
							<p
								className="text-white text-sm"
							>
								{project.client}
							</p>
							<p
								className="text-5xl text-white w-3/5 thumbnailTitle"
							>
								{title}
							</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProjectThumbnail;
