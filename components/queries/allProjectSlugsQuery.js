export const allProjectSlugsQuery = `
	query getProjects {
		projects (first: 50) {
			nodes {
				slug
				title
			}
		}
	}
`;
