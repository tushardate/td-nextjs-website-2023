export const query = `
	{
		about {
			awards
			bio(markdown: false)
			name
			phone
			title
			edu
			workExperience {
			  expAgency
			  expClients
			  expDates
			  expRole
			}
			email
			headline
			profilePic
		  }
	}
`;
