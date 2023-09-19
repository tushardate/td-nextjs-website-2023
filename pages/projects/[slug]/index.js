import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
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
import Footer from "@components/Footer";
import Header from "@components/Header";

export default function Project({
	singleProjectData,
	next,
	prev,
	allProjects,
}) {
	const { project, title } = singleProjectData;
	const {
		summary,
		headline,
		client,
		role,
		thumbnailImage,
		thumbnailVideo,
		sections,
	} = project;

	const [winW, winH] = useWindowSize();
	const [height, setHeight] = useState("100vw");
	const [revealVideo, setRevealVideo] = useState(false);

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
						{/* <img
							fetchpriority="high"
							className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full blur-3xl scale-125"
							src={`${thumbnailImage}tr=w-1920`}
							alt=""
						/> */}

						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: !thumbnailVideo
									? 1
									: revealVideo
									? 1
									: 0,
							}}
							transition={{ duration: 1, delay: 0.5 }}
							className="overflow-hidden w-full h-full relative"
						>
							{thumbnailVideo ? (
								<video
									className="h-full w-full object-cover absolute inset-0"
									autoPlay
									playsInline
									muted
									loop
									src={thumbnailVideo}
									onCanPlay={() => setRevealVideo(true)}
								/>
							) : (
								<>
									<div className="absolute inset-0 bg-black opacity-40" />
									<img
										fetchpriority="high"
										className="object-cover w-full h-full"
										src={`${thumbnailImage}tr=w-1920`}
										alt=""
									/>
								</>
							)}
						</motion.div>

						<motion.div className="md:w-5/6 absolute left-0 bottom-0 px-4 py-10 md:p-16 text-white">
							<motion.p
								variants={singleProjectTitles}
								custom={1}
								className="md:text-2xl mb-2 lg:mb-4"
							>{`${client}`}</motion.p>
							<motion.p
								custom={2}
								variants={singleProjectTitles}
								className="text-8xl font-migra font-normal title text-white"
							>{`${title}`}</motion.p>
						</motion.div>
					</motion.div>

					<motion.div
						variants={pageTransition}
						className="w-full p-4 md:px-16 md:pt-18"
					>
						<div className="project-details-wrapper md:flex justify-between mb-16">
							<motion.div
								variants={singleItemAnim}
								initial="initial"
								whileInView="whileInView"
								viewport={singleItemAnim.viewport}
								className="md:w-6/12"
							>
								<p className="font-migra font-medium headline text-5xl leading-tighter py-6 md:py-0">
									{headline ? headline : title}
								</p>
							</motion.div>
							<motion.div
								variants={singleItemAnim}
								initial="initial"
								whileInView="whileInView"
								viewport={singleItemAnim.viewport}
								className="md:w-4/12"
							>
								<p className="text-xl pb-6 md:pb-8">
									{summary}
								</p>
								<p>{`Role: ${role}`}</p>
							</motion.div>
						</div>

						<div className="project-details-wrapper">
							<div className="w-full text-xl relative">
								{sections.map((section, i) => {
									return (
										<div className={``} key={i}>
											<div
												className={`w-full mt-16 ${section.sectionClasses}`}
											>
												{section.items.map(
													(item, j) => {
														return (
															<SingleItem
																data={item}
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
	const client = new ApolloClient({
		uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			${query}
		`,
		variables: {
			slug: params.slug,
		},
	});

	const { project: singleProjectData, projects } = data;
	const allProjects = projects.nodes;

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
	const client = new ApolloClient({
		uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			${allProjectSlugsQuery}
		`,
	});

	const paths = data.projects.nodes.map((project) => ({
		params: {
			slug: project.slug.toString(),
		},
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: "blocking" };
}
