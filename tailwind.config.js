/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				tdblue: "#0030ff",
				tdyellow: "#ffff00",
			},
			fontFamily: {
				ppmori: ["PP Mori"],
				neuemachina: ["Neue Machina"],
				migra: ["Migra"],
				polysans: ["PolySans"],
				moret: ["Moret"],
				resist: ["Resist Sans Text"],
				satoshi: ["Satoshi"],
				austin: ["Austin"]
			},
			fontSize: {
				2.25: "1.625rem",
				"5.5xl": "5.5rem",
			},
			lineHeight: {
				zero: "0",
				11: "3rem",
				tighter: "1.125",
				tightest: "1.0625",
				looser: "2.5",
				loosest: "3",
				5.5: "5.5rem",
			},
			letterSpacing: {
				ultra: "-.125rem",
				tightest: "-.075rem",
				tighter: "-.05rem",
				tight: "-.025rem",
				normal: "0",
				wide: ".025rem",
				wider: ".05rem",
				widest: ".1rem",
				widestest: ".25rem",
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
			pattern:
				/^(w|justify|items|self|gap|place|grid|flex|max|row|col|text|order)-.*/,
			variants: ["md", "lg"],
		},
		{ pattern: /^p[tmrbxy]-.*/, variants: ["md", "lg"] },
		{ pattern: /^m[tmrbxy]-.*/, variants: ["md", "lg"] },
		"text-center",
		"text-left",
		"text-justify",
		"text-right",
		"bg-red-500"
	],
};
