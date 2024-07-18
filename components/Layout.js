import Lenis from "lenis";
import { useRef, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	const lenisRef = useRef(null);
	const rafHandleRef = useRef(null);

	useEffect(() => {
		// Initialize Lenis on the first render
		if (!lenisRef.current) {
			lenisRef.current = new Lenis();
			const raf = (time) => {
				lenisRef.current?.raf(time);
				rafHandleRef.current = requestAnimationFrame(raf);
			};
			rafHandleRef.current = requestAnimationFrame(raf);
		}

		// Clean up on component unmount
		return () => {
			if (lenisRef.current) {
				lenisRef.current.destroy();
				lenisRef.current = undefined;
			}
			if (rafHandleRef.current) {
				cancelAnimationFrame(rafHandleRef.current);
				rafHandleRef.current = null;
			}
		};
	}, []);

	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	);
};

export default Layout;

// import Header from "./Header";
// import Footer from "./Footer";
// // import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

// export default function Layout({ children }) {
// 	// const lenis = useLenis(({ scroll }) => {
// 	// 	// called every scroll
// 	// });
// 	return (
// 		<>
// 			{/* <ReactLenis root options={{ lerp: 0.06 }}> */}
// 				<Header />
// 				<div>{children}</div>
// 				<Footer />
// 			{/* </ReactLenis> */}
// 		</>
// 	);
// }
