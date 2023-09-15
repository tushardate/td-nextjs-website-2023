export const query = `
	query getProjects {
		projects (first: 100) {
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
