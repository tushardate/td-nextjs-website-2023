import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";

export default function Layout({ children }) {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll"))
				.default;
			const locomotivescroll = new LocomotiveScroll({
				lenisOptions: {
					lerp: 0.1,
					// easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
				},
			});
		})();
	}, []);
	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	);
}
