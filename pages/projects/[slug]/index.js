import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { query } from "@components/queries/singleProjectQuery.js";
import { allProjectSlugsQuery } from "@components/queries/allProjectSlugsQuery.js";
import PrevNext from "@components/PrevNext";
import SingleItem from "@components/SingleItem";
import Layout from "@components/Layout";
import {
	pageTransition,
	fadeIn,
	singleItemAnim,
	singleProjectTitles,
} from "@components/animation/animations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import VideoThumbnail from "@components/VideoThumbnail";
import { FaTrophy, FaCog } from "react-icons/fa";

export default function Project({
	singleProjectData,
	next,
	prev,
	allProjects,
}) {
	const {
		title,
		summary,
		headline,
		client,
		role,
		thumbnailImage,
		thumbnailVideo,
		items,
		awards,
	} = singleProjectData;

	const [winW, winH] = useWindowSize();
	const [height, setHeight] = useState("100vw");

	useEffect(() => {
		if (winW / winH < 1) {
			setHeight(`max(100vw, 80vh)`);
		} else {
			setHeight("100vh");
		}
	}, [winW, winH]);

	return (
		<>
			<Head>
				<title>{`Tushar Date | ${title}`}</title>
				<meta name="description" content={headline} />
			</Head>
			<Layout>
				<motion.div
					initial="initial"
					animate="animate"
					exit="exit"
					className="font-ppmori"
				>
					<motion.div
						variants={fadeIn}
						style={{ height }}
						className="w-full h-80 overflow-hidden relative rounded-b-2xl"
					>
						<img
							fetchpriority="high"
							className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full blur-3xl scale-125"
							src={`${thumbnailImage}tr=w-200,bl-30,q-50`}
							alt=""
						/>

						{thumbnailVideo ? (
							<>
								<VideoThumbnail src={thumbnailVideo} />
								<div className="absolute inset-0 dropShadow" />
							</>
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
								}}
								transition={{ duration: 1 }}
								className="overflow-hidden w-full h-full relative"
							>
								<div className="absolute inset-0 bg-black opacity-40" />
								<img
									fetchpriority="high"
									className="object-cover w-full h-full"
									src={`${thumbnailImage}tr=w-1920`}
									alt=""
								/>
							</motion.div>
						)}

						<motion.div className="md:w-5/6 absolute left-0 bottom-0 px-4 py-10 md:p-16 text-white">
							<motion.p
								variants={singleProjectTitles}
								custom={1}
								className="md:text-2xl mb-2"
							>{`${client}`}</motion.p>
							<motion.p
								custom={2}
								variants={singleProjectTitles}
								className="lg:w-3/5 text-8xl font-migra tracking-hintTight title text-white"
							>{`${title}`}</motion.p>
						</motion.div>
					</motion.div>

					<motion.div
						variants={pageTransition}
						className="w-full p-4 md:px-16 lg:pt-18"
					>
						<div className="project-details-wrapper lg:flex justify-between mb-16">
							<motion.div
								variants={singleItemAnim}
								initial="initial"
								whileInView="whileInView"
								viewport={singleItemAnim.viewport}
								className="lg:w-6/12"
							>
								<p className="font-medium headline text-5xl leading-tighter py-6 lg:py-0">
									{headline ? headline : title}
								</p>
							</motion.div>
							<motion.div
								variants={singleItemAnim}
								initial="initial"
								whileInView="whileInView"
								viewport={singleItemAnim.viewport}
								className="lg:w-4/12"
							>
								<p className="lg:text-xl pb-6 lg:pb-8">
									{summary}
								</p>
								<div className="pb-2">
									<div className="inline-grid grid-flow-col gap-2">
										<FaCog className="mt-0.5" />
										<p className="">{role}</p>
									</div>
								</div>
								{awards ? (
									<div>
										<div className="inline-grid grid-flow-col gap-2">
											<FaTrophy className="mt-0.5" />
											<p>{awards}</p>
										</div>
									</div>
								) : (
									<></>
								)}
							</motion.div>
						</div>

						<div className="project-details-wrapper">
							<div className="w-full text-xl relative">
								{items.map((item, i) => {
									return (
										<div className={``} key={i}>
											<div
												className={`w-full mt-16 ${item.classes}`}
											>
												{item.section.map(
													(section, j) => {
														return (
															<SingleItem
																data={section}
																key={j}
															/>
														);
													}
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</motion.div>
					<PrevNext prev={prev} next={next} />
				</motion.div>
			</Layout>
		</>
	);
}
export async function getStaticProps({ params }) {
	const endpoint = `${process.env.NEXT_PUBLIC_DATOCMS_SITE_URL}`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${process.env.DATOCMS_KEY}`,
		},
	});
	const variables = {
		slug: params.slug,
	};

	const data = await client.request(query, variables);

	const { project: singleProjectData, allProjects } = data;

	const currentIdx = allProjects.findIndex((p) => p.slug === params.slug);
	const nextIdx = (currentIdx + 1) % allProjects.length;
	const prevIdx = (currentIdx - 1 + allProjects.length) % allProjects.length;

	return {
		props: {
			singleProjectData,
			allProjects,
			next: allProjects[nextIdx],
			prev: allProjects[prevIdx],
		},
		revalidate: 2,
	};
}

export async function getStaticPaths(params) {
	const endpoint = `${process.env.NEXT_PUBLIC_DATOCMS_SITE_URL}`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${process.env.DATOCMS_KEY}`,
		},
	});

	const data = await client.request(allProjectSlugsQuery);

	const paths = data.allProjects.map((project) => ({
		params: {
			slug: project.slug.toString(),
		},
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: "blocking" };
}
