import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { query } from "@components/queries/homepageQuery.js";
import ProjectThumbnail from "@components/ProjectThumbnail";
import Layout from "@components/Layout";

export default function Home({ projects }) {
	return (
		<Layout>
			<div className="px-3 mt-40 font-ppmori">
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
			</div>
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
