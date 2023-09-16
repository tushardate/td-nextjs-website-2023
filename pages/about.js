import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Layout from "@components/Layout";
import { query } from "@components/queries/aboutPageQuery.js";
import { pageTransition } from "@components/animation/animations";
import { motion } from "framer-motion";
import { useCursorStore } from "@components/GlobalStore";
import { getRandomHue } from "@components/utils/getRandomHue";
import { useEffect } from "react";

export default function About({ about }) {
	const { setCursorType } = useCursorStore();
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
		profilePic,
	} = about;

	const filterClients = workExperience
		.map((e) => e.expClients.split(",").map((val) => val.trim()))
		.flat()
		.sort();
	const clients = [...new Set(filterClients)];
	const filterAwards = awards.map((e) => e.awardName);
	const awardList = [...new Set(filterAwards)];

	useEffect(() => {
		document.body.style.backgroundColor = `hsl(${getRandomHue()}deg, 100%, 94%)`; // Set the new background color
	}, []);

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
					className="pt-20 mb-16 font-satoshi font-medium"
				>
					<div className="px-4 md:px-6 text-xl">
						<div className="pb-16 lg:flex">
							<div className="lg:w-1/3 lg:pr-16 md:max-w-[40%]">
								<div className="profilePic relative w-full rounded-lg overflow-hidden safari-fix">
									<div className="absolute w-full h-full">
										<motion.img
											className="object-cover w-full"
											src={profilePic}
										/>
									</div>
								</div>
							</div>
							<p className="font-normal lg:w-2/3 md:w-11/12 lg:-ml-1 text-8xl aboutHeadline self-end lg:-mb-2 mt-6 lg:mt-0 lg:pr-16">
								{headline}
							</p>
						</div>
						<div className="contact">
							<div className="lg:flex">
								<p className="text-2xl lg:text-xl uppercase lg:w-1/3 lg:py-8 pb-3 lg:text-right lg:pr-16">
									Contact
								</p>
								<div className="lg:w-2/3 lg:py-8 pb-8">
									<a
										className="hover:text-tdblue"
										href={`tel:+1-${phone}`}
									>
										<p
											className="lg:pb-4"
											onMouseOver={() =>
												setCursorType("phone")
											}
											onMouseLeave={() =>
												setCursorType("default")
											}
										>
											{phone}
										</p>
									</a>
									<a
										className="hover:text-tdblue"
										href={`mailto:${email}`}
									>
										<p
											className="lg:pb-4"
											onMouseOver={() =>
												setCursorType("email")
											}
											onMouseLeave={() =>
												setCursorType("default")
											}
										>
											{email}
										</p>
									</a>
									<a
										className="hover:text-tdblue"
										href="http://www.linkedin.com/pub/tushar-date/11/315/a25"
										target="_blank"
									>
										<p
											className="lg:pb-8"
											onMouseOver={() =>
												setCursorType("arrowTopRight")
											}
											onMouseLeave={() =>
												setCursorType("default")
											}
										>
											LinkedIn
										</p>
									</a>
								</div>
							</div>
						</div>
						<div className="bio">
							<div className="lg:flex pt-12 lg:pt-0">
								<p className="text-2xl lg:text-xl uppercase lg:w-1/3 lg:py-12 pb-3 lg:text-right lg:pr-16">
									About
								</p>
								<p
									className="lg:w-2/3 lg:py-12 pb-8 lg:pr-24"
									dangerouslySetInnerHTML={{ __html: bio }}
								></p>
							</div>
						</div>
						<div className="experience">
							<div className="lg:flex pt-12 lg:pt-0">
								<p className="text-2xl lg:text-xl uppercase lg:w-1/3 lg:py-12 pb-3 lg:text-right lg:pr-16">
									Experience
								</p>
								<div className="lg:w-2/3 lg:col-count-2 c-gap lg:py-12 pb-8">
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
						<div className="awards">
							<div className="lg:flex pt-12 lg:pt-0">
								<p className="text-2xl lg:text-xl uppercase lg:w-1/3 lg:py-12 pb-3 lg:text-right lg:pr-16">
									Recognition
								</p>
								<div className="lg:w-2/3 lg:col-count-3 c-gap  lg:py-12 pb-8">
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
						<div className="brands">
							<div className="lg:flex pt-12 lg:pt-0">
								<p className="text-2xl lg:text-xl uppercase lg:w-1/3 lg:py-12 pb-3 lg:text-right lg:pr-16">
									Brands
								</p>
								<div className="lg:w-2/3 md:col-count-2 lg:col-count-3 c-gap lg:py-12 pb-8">
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
			about: data.pageBy.about,
		},
		revalidate: 1,
	};
}
