import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Layout from "@components/Layout";
import { query } from "@components/queries/aboutPageQuery.js";
import { pageTransition } from "@components/animation/animations";
import { motion } from "framer-motion";

export default function About({ about }) {
	const {
		title,
		name,
		email,
		phone,
		bio,
		headline,
		workExperience,
		awards,
		skills,
		edu,
	} = about;

	const filterClients = workExperience
		.map((e) => e.expClients.split(",").map((val) => val.trim()))
		.flat()
		.sort();
	const clients = [...new Set(filterClients)];
	const filterAwards = awards.map((e) => e.awardName);
	const awardList = [...new Set(filterAwards)];

	return (
		<Layout>
			<motion.div
				variants={pageTransition}
				initial="initial"
				animate="animate"
				exit="exit"
				className="px-3 my-40 font-ppmori"
			>
				<div className="px-16 text-lg">
					<div className="headline -ml-2 pb-12">
						<p className="ml-auto w-5/6 text-8xl font-neuemachina aboutHeadline">
							{headline}
						</p>
					</div>
					<div className="contact">
						<div className="flex">
							<p className="w-1/6 py-12">Contact</p>
							<div className="w-5/6 col-count-1 c-gap border-b py-12">
								<a
									className="hover:text-tdblue"
									href={`tel:+1-${phone}`}
								>
									<p>{phone}</p>
								</a>
								<a
									className="hover:text-tdblue"
									href={`mailto:${email}`}
								>
									<p>{email}</p>
								</a>
								<a
									className="hover:text-tdblue"
									href="http://www.linkedin.com/pub/tushar-date/11/315/a25"
									target="_blank"
								>
									<p>LinkedIn</p>
								</a>
							</div>
						</div>
					</div>
					<div className="bio">
						<div className="flex">
							<p className="w-1/6 py-12">About</p>
							<p
								className="w-5/6 col-count-2 c-gap border-b py-12"
								dangerouslySetInnerHTML={{ __html: bio }}
							></p>
						</div>
					</div>
					<div className="experience">
						<div className="flex">
							<p className="w-1/6 py-12">Experience</p>
							<div className="w-5/6 col-count-2 c-gap border-b py-12">
								{workExperience.map((exp, i) => {
									return (
										<div
											className="pb-4 avoid-break"
											key={i}
										>
											<p>{exp.expRole}</p>
											<p className="text-sm">
												{exp.expAgency}
											</p>
											<p className="text-sm">
												{exp.expDates}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="brands">
						<div className="flex">
							<p className="w-1/6 py-12">Brands</p>
							<div className="w-5/6 col-count-3 c-gap border-b py-12">
								{clients.map((client, j) => {
									return (
										<div className="" key={j}>
											<p>{client}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="awards">
						<div className="flex">
							<p className="w-1/6 py-12">Recognition</p>
							<div className="w-5/6 col-count-3 c-gap py-12">
								{awardList.map((aw, k) => {
									return (
										<div className="" key={k}>
											<p>{aw}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
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
			about: data.pageBy.about,
		},
	};
}
