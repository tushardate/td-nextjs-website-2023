import Image from "next/image";
import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { query } from "@components/queries/homepageQuery.js";
import ProjectThumbnail from "@components/ProjectThumbnail";
import Layout from "@components/Layout";
import { pageTransition } from "@components/animation/animations";
import { motion } from "framer-motion";
import useIsTouchDevice from "@components/hooks/useIsTouchDevice";
import ProjectThumbnailMobile from "@components/ProjectThumbnailMobile";
import { isMobile } from "react-device-detect";
import Header from "@components/Header-StaggerHover";
import Footer from "@components/Footer";

export default function Home({ projects }) {
	const isTouchDevice = useIsTouchDevice();

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
					className="px-16 mt-24 lg:mt-40 font-ppmori"
				>
					{/* <div className="font-migra text-8xl leading-11 pb-4 pt-8">Work</div> */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4">
						{projects.map((project, i) => {
							// return isMobile ? (
							// 	<ProjectThumbnailMobile
							// 		key={project.id}
							// 		data={{ ...project }}
							// 	/>
							// ) : (
							// 	<ProjectThumbnail
							// 		key={project.id}
							// 		data={{ ...project }}
							// 	/>
							// );
							return (
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
	const client = new ApolloClient({
		uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			${query}
		`,
	});

	return {
		props: {
			projects: data.projects.nodes,
		},
		revalidate: 1,
	};
}
