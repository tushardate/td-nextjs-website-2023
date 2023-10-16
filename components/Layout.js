import Header from "./Header";
import Footer from "./Footer";
// import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Layout({ children }) {
	// const lenis = useLenis(({ scroll }) => {
	// 	// called every scroll
	// });
	return (
		<>
			{/* <ReactLenis root options={{ lerp: 0.125 }}> */}
				<Header />
				<div>{children}</div>
				<Footer />
			{/* </ReactLenis> */}
		</>
	);
}
