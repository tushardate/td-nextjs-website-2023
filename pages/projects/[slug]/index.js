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
import { motion, useAnimate, usePresence, stagger } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import VideoThumbnail from "@components/VideoThumbnail";
import { FaTrophy, FaCog } from "react-icons/fa";
import TDSplitText from "@components/TDSplitText";
import TDTextLineReveal2 from "@components/TDTextLineReveal2";

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
	const [height, setHeight] = useState("80vh");
	const [animComplete, setAnimComplete] = useState(false);

	const [isPresent, safeToRemove] = usePresence();
	const [scope, animate] = useAnimate();

	useEffect(() => {
		if (winW / winH < 1) {
			setHeight(`max(100vw, 70vh)`);
		} else {
			setHeight("70vh");
		}
	}, [winW, winH]);

	useEffect(() => {
		if (isPresent) {
			let enterAnim = async () => {
				await animate([
					[
						".heroBanner",
						{
							clipPath: [
								"inset(0% 98% 0% 0% round 16px 16px 16px 16px)",
								"inset(0% 0% 0% 0% round 16px 16px 16px 16px)",
							],
							opacity: [0, 1, 1, 1],
						},
						{
							duration: 1,
							ease: [0.75, 0, 0, 1],
						},
					],
					[
						".heroBanner",
						{
							clipPath: [
								"inset(0% 0% 0% 0% round 16px 16px 16px 16px)",
								"inset(0% 0% 0% 0% round 16px 16px 16px 0px)",
							],
						},
					],
					[
						".pill",
						{
							rotateX: ["90deg", "0deg"],
							y: [-32, 0],
							opacity: [0, 1, 1, 1],
						},
						{
							duration: 0.75,
							ease: [0.75, 0, 0, 1.2],
							at: "<",
						},
					],
					[
						".projectName",
						{ opacity: [0, 1] },
						{ duration: 0.5, at: "-0.25" },
					],
					[
						".word",
						{ y: ["30%", "0%"], opacity: [0, 1] },
						{
							delay: stagger(0.04),
							duration: 0.75,
							ease: [0.75, 0, 0, 1.2],
						},
					],
				]);
			};
			enterAnim().then(() => setAnimComplete(true));
		} else {
			let exitAnim = async () => {
				await animate([
					[
						scope.current,
						{ opacity: [1, 0], x: [0, 10] },
						{ duration: 0.5, ease: [0.11, 0, 0.5, 0] },
					],
				]);
				safeToRemove();
			};
			exitAnim();
		}
	}, [isPresent]);

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
					ref={scope}
				>
					<div className="px-4 md:px-16 md:mt-28">
						<motion.div
							style={{ height }}
							className="w-full heroBanner overflow-hidden relative td-rounded-banner"
						>
							<img
								fetchpriority="high"
								className="absolute inset-0 object-cover w-full h-full blur-3xl scale-125"
								src={`${thumbnailImage}tr=w-200,bl-30,q-50`}
								alt=""
							/>
							{thumbnailVideo ? (
								<>
									<VideoThumbnail src={thumbnailVideo} />
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
									<img
										fetchpriority="high"
										className="absolute inset-0 object-cover w-full h-full"
										src={`${thumbnailImage}tr=w-1920`}
										alt=""
									/>
								</motion.div>
							)}
						</motion.div>
					</div>

					<motion.div className="bottomWrapper w-full px-4 md:px-16 -translate-y-8">
						<div className="perspective">
							<motion.div className="pill h-16 bg-white w-max px-8 rounded-full mb-10">
								<motion.p className="md:text-3xl md:leading-[64px] text-black">{`${client}: ${title}`}</motion.p>
							</motion.div>
						</div>
						<div className="project-details-wrapper grid grid-cols-12 gap-4">
							<div className="col-span-9">
								<motion.div className="mb-10">
									<TDSplitText
										types="words"
										onComplete={animComplete}
										className="headline font-semibold text-80px leading-max tracking-touchtight"
									>
										{headline ? headline : title}
									</TDSplitText>
								</motion.div>

								<motion.div
									variants={singleItemAnim}
									initial="initial"
									whileInView="whileInView"
									viewport={singleItemAnim.viewport}
									className="w-9/12"
								>
									<motion.div className="">
										<p className="md:text-3xl">{summary}</p>
									</motion.div>
								</motion.div>
							</div>
							<motion.div
								variants={singleItemAnim}
								initial="initial"
								whileInView="whileInView"
								viewport={singleItemAnim.viewport}
								className="col-span-2 col-start-11 flex flex-col justify-end text-lg leading-5"
							>
								<div>
									<div className="">
										<p>Role:</p>
										<p className="">{role}</p>
									</div>
								</div>
								{awards ? (
									<div>
										<div className="pt-6">
											<p>Awards:</p>
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
