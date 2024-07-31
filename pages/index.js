import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { query } from "@components/queries/homepageQuery.js";
import ProjectThumbnail from "@components/ProjectThumbnail";
import Layout from "@components/Layout";
import { pageTransition } from "@components/animation/animations";
import { motion } from "framer-motion";
import useIsTouchDevice from "@components/hooks/useIsTouchDevice";
import ProjectThumbnailMobile from "@components/ProjectThumbnailMobile";
import { isMobile } from "react-device-detect";
import { useEffect } from "react";

export default function Home({ projects }) {
	const isTouchDevice = useIsTouchDevice();

	useEffect(() => {
		console.log(projects);
	});

	return (
		<>
			<Head>
				<title>Tushar Date | Creative Director</title>
				<meta
					name="description"
					content="The portfolio of Tushar Date, an advertising creative director."
				/>
			</Head>
			<Layout>
				<motion.div
					variants={pageTransition}
					initial="initial"
					animate="animate"
					exit="exit"
					className="px-4 md:px-16 mt-18 md:mt-40 font-ppmori"
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 lg:gap-4">
						{projects.map((project, i) => {
							return isMobile ? (
								<ProjectThumbnailMobile
									key={project.id}
									data={{ ...project }}
								/>
							) : (
								<ProjectThumbnail
									key={project.id}
									data={{ ...project }}
								/>
							);
						})}
					</div>
				</motion.div>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const endpoint = `${process.env.NEXT_PUBLIC_DATOCMS_SITE_URL}`;
	const client = new GraphQLClient(endpoint, {
		headers: {
			"content-type": "application/json",
			authorization: `Bearer ${process.env.DATOCMS_KEY}`,
			"X-Environment": "main-copy-2024-07-21-dashmpeg-video",
		},
	});

	const data = await client.request(query);
	return {
		props: {
			projects: data.allProjects,
		},
		revalidate: 1,
	};
}
