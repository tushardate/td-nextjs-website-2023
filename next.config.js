/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
				port: "",
				pathname: "/tsswunfp0/**",
			},
		],
	},
};

module.exports = nextConfig;
