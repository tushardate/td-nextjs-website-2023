export const pageTransition = {
	initial: {
		y: 10,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.1,
			duration: 1,
			ease: [0.33, 1, 0.68, 1],
		},
	},
	exit: {
		y: 10,
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: [0.11, 0, 0.5, 0],
		},
	},
};
