import Header from "./Header";
import Footer from "./Footer";
import Grid from "./Grid";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
			<Grid />
		</>
	);
}
