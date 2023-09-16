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
import { useEffect } from "react";

export default function Home({ projects }) {
	const isTouchDevice = useIsTouchDevice();

	useEffect(() => {
		document.body.style.backgroundColor = `#edece8`; // Set the new background color
	}, [])

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
					className="px-4 md:px-6 pt-20 font-satoshi"
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
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
