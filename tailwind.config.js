/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				"4xl": "2em",
			},
			colors: {
				tdblue: "#000ce4",
			},
			fontFamily: {
				ppmori: [
					"PP Mori",
					"Helvetica",
					"ui-sans-serif",
					"system-ui",
					"sans-serif",
				],
				// favorit: ["Favorit"],
			},
			fontSize: {
				"24px": "24px",
				"30px": "30px",
				"32px": "32px",
				2.25: "1.625rem",
				"54px": "3.61rem",
				"80px": "5rem",
				"84px": "5.25rem",
				"90px": "5.5rem",
				"140px": "9rem",
			},
			lineHeight: {
				x: "0.75em",
				zero: "0",
				11: "2.75em",
				12: "3em",
				13: "3.25em",
				14: "3.5em",
				16: "4em",
				max: "0.975",
				tighter: "1.125",
				tightest: "1.0625",
				looser: "2.5",
				loosest: "3",
				5.5: "5.5em",
			},
			letterSpacing: {
				ultra: "-.125em",
				tightest: "-.075em",
				tighter: "-.05em",
				tight: "-.025em",
				touchtight: "-.015em",
				normal: "0",
				wide: ".025em",
				wider: ".05em",
				widest: ".1em",
				widestest: ".25em",
			},
			maxHeight: {
				"10vh": "10vh",
				"20vh": "20vh",
				"25vh": "25vh",
				"30vh": "30vh",
				"40vh": "40vh",
				"50vh": "50vh",
				"60vh": "60vh",
				"70vh": "70vh",
				"75vh": "75vh",
				"80vh": "80vh",
				"90vh": "90vh",
				"100vh": "100vh",
			},
			spacing: {
				17: "4.25rem",
				18: "4.5rem",
				19: "4.75rem",
				22: "5.5rem",
				42: "10.5rem",
			},
		},
	},
	plugins: [require("tailwindcss-multi-column")()],
	safelist: [
		{
			pattern: /^(grid|flex)/,
			variants: ["md", "lg"],
		},
		{
			pattern:
				/^(w|justify|items|self|gap|place|grid|flex|max|row|col|text|order)-.*/,
			variants: ["md", "lg"],
		},
		{ pattern: /^p[tlrbxy]-.*/, variants: ["md", "lg"] },
		{ pattern: /^m[tlrbxy]-.*/, variants: ["md", "lg"] },
		"text-center",
		"text-left",
		"text-justify",
		"text-right",
		"bg-red-500",
	],
};
