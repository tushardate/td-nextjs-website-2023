export const pageTransition = {
	initial: {
		x: -10,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.1,
			duration: 1,
			ease: [0.33, 1, 0.68, 1],
		},
	},
	exit: {
		x: 10,
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: [0.11, 0, 0.5, 0],
		},
	},
};


export const singleProjectTitles = {
	initial: {
		y: 10,
		opacity: 0,
	},
	animate: (custom) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: custom * 0.1 + 0.5,
			duration: 0.65,
			ease: [0.33, 1, 0.68, 1],
		},
	}),
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
	initial: { opacity: 0, y: 32 },
	whileInView: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: [0.75, 0, 0, 1.2],
		},
	},
	viewport: {
		amount: 0.05,
		once: true,
	},
};

export const clipPathAnim = {
	initial: {
		opacity: 0,
		clipPath: "inset(0% 0% 98% 0% round 16px 16px 16px 16px)",
	},
	whileInView: {
		opacity: [0, 1, 1, 1],
		clipPath: "inset(0% 0% 0% 0% round 16px 16px 16px 16px)",
		transition: {
			duration: 1,
			ease: [0.75, 0, 0, 1],
		},
	},
	viewport: {
		once: true,
		margin: "0px 0px -64px 0px",
	},
};

export const prevNextAnim = {
	initial: { opacity: 0 },
	whileInView: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
	viewport: {
		amount: 0.05,
		once: true,
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: [0.11, 0, 0.5, 0],
		},
	},
};
