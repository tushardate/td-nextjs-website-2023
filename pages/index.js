import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { query } from "@components/queries/homepageQuery.js";
import ProjectThumbnail from "@components/ProjectThumbnail";
import Layout from "@components/Layout";
import { pageTransition } from "@components/animation/animations";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home({ projects }) {
	return (
		<Layout>
			<motion.div
				variants={pageTransition}
				initial="initial"
				animate="animate"
				exit="exit"
				className="px-3 mt-40 font-ppmori"
			>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
					{projects.map((project, i) => {
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
	};
}
