export const query = `
	query getProjects {
		projects (first: 50) {
			nodes {
				project {
					thumbnailImage
					thumbnailVideo
					client
				}
				id
				slug
				title
			}
		}
	}
`;
