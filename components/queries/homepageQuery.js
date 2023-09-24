export const query = `
	query getProjects {
		allProjects {
			client
			slug
			title
			thumbnailImage
			thumbnailVideo
			id
		}
	}
`;
