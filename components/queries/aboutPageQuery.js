export const query = `
	{
		pageBy(uri: "about") {
			about {
				awards {
					awardCategory
					awardClient
					awardDate
					awardName
					awardProject
					awardType
				}
				bio
				edu {
					eduDates
					eduDegree
					eduName
				}
				email
				headline
				name
				phone
				skills {
					skillName
				}
				title
				workExperience {
					expAgency
					expClients
					expDates
					expRole
				}
			}
		}
	}
`;
