import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { query } from "@components/queries/singleProjectQuery.js";
import { allProjectSlugsQuery } from "@components/queries/allProjectSlugsQuery.js";
import PrevNext from "@components/PrevNext";
import SingleItem from "@components/SingleItem";
import Layout from "@components/Layout";
import { motion } from "framer-motion";

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

	return (
		<Layout>
			<div className="font-ppmori">
				<div className="w-full h-80 overflow-hidden relative rounded-b-2xl">
					<img
						className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full blur-3xl scale-125"
						src={`${thumbnailImage}tr=w-1920`}
						alt=""
					/>

					<motion.div initial={{opacity: 0,}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 2}} className="overflow-hidden w-full h-full relative">
						{thumbnailVideo ? (
							<video
								className="h-full w-full object-cover"
								autoPlay
								muted
								loop
								src={thumbnailVideo}
							/>
						) : (
							<>
								<div className="absolute inset-0 bg-black opacity-40" />
								<img
									className="object-cover w-full h-full"
									src={`${thumbnailImage}tr=w-1920`}
									alt=""
								/>
							</>
						)}
					</motion.div>

					<div className="w-4/5 absolute left-0 bottom-0 px-20 py-16 text-white">
						<p className="text-2xl mb-4 ml-1">{`${client}`}</p>
						<p className="w-4/5 text-8xl font-neuemachina title text-white">{`${title}`}</p>
					</div>
				</div>

				<div className="w-full px-20 pt-18">
					<div className="project-details-wrapper flex justify-between">
						<div className="w-6/12">
							<p className="headline text-5xl leading-tighter">
								{headline ? headline : title}
							</p>
						</div>
						<div className="w-4/12">
							<p className="text-xl pb-6">{summary}</p>
							<p>{`Role: ${role}`}</p>
						</div>
					</div>

					<div className="project-details-wrapper mt-20 grid gap-4">
						<div className="w-full grid gap-24 text-xl">
							{sections.map((section, i) => {
								return (
									<div className={`grid`} key={i}>
										<div
											className={`${section.sectionClasses}`}
										>
											{section.items.map((item, j) => {
												return (
													<SingleItem
														data={item}
														key={j}
													/>
												);
											})}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<PrevNext prev={prev} next={next} />
			</div>
		</Layout>
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
		revalidate: 1,
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
	return { paths, fallback: false };
}
