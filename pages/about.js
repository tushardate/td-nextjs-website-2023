import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Layout from "@components/Layout";
import { query } from "@components/queries/aboutPageQuery.js";
import { pageTransition, fadeIn } from "@components/animation/animations";
import { motion } from "framer-motion";
import { useCursorStore } from "@components/GlobalStore";
import { useEffect } from "react";
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
					className="pt-32 mb-16 font-ppmori"
				>
					<div className="px-4 md:px-16 text-xl">
						<div className="pb-16 md:flex">
							<motion.div
								variants={fadeIn}
								initial="initial"
								animate="animate"
								exit="exit"
								className="md:w-1/3 md:pr-16 md:max-w-[40%]"
							>
								<div className="profilePic relative w-full rounded-lg overflow-hidden safari-fix">
									<div className="absolute w-full h-full">
										<motion.img
											className="object-cover w-full"
											src={profilePic}
											alt="profile picture"
										/>
									</div>
								</div>
							</motion.div>
							<p className="font-migra font-medium md:w-2/3 md:w-11/12 md:-ml-1 text-8xl aboutHeadline self-end md:-mb-[1.5vw] mt-6 md:mt-0 lg:pr-16">
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
										<div className="flex items-center lg:pb-4 gap-3">
											<FaPhoneAlt className="mb-1" />
											<p
												onMouseOver={() =>
													setCursorType("phone")
												}
												onMouseLeave={() =>
													setCursorType("default")
												}
											>
												{phone}
											</p>
										</div>
									</a>
									<a
										className="hover:text-tdblue"
										href={`mailto:${email}`}
									>
										<div className="flex items-center lg:pb-4 gap-3">
											<FaEnvelope className="mb-1" />
											<p
												onMouseOver={() =>
													setCursorType("email")
												}
												onMouseLeave={() =>
													setCursorType("default")
												}
											>
												{email}
											</p>
										</div>
									</a>
									<a
										className="hover:text-tdblue"
										href="http://www.linkedin.com/pub/tushar-date/11/315/a25"
										target="_blank"
									>
										<div className="flex items-center lg:pb-8 gap-3">
											<FaLinkedin className="mb-1" />
											<p
												onMouseOver={() =>
													setCursorType(
														"arrowTopRight"
													)
												}
												onMouseLeave={() =>
													setCursorType("default")
												}
											>
												LinkedIn
											</p>
										</div>
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
