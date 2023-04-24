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
		y: -10,
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: [0.11, 0, 0.5, 0],
		},
	},
};

export const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 0.1,
			duration: 1,
			ease: [0.33, 1, 0.68, 1],
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: [0.11, 0, 0.5, 0],
		},
	},
};

export const singleItemAnim = {
	initial: { opacity: 0, y: 40 },
	whileInView: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.75,
			ease: [0.33, 1, 0.68, 1],
		},
	},
	viewport: { amount: 0.25, once: true },
};
