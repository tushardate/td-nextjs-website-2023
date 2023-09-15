import "@components/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { useCursorStore } from "@components/GlobalStore";
import Cursor from "@components/Cursor";

export default function App({ Component, pageProps, router }) {
	const { setCursorType } = useCursorStore();

	return (
		<>
			{/* <Cursor /> */}
			<AnimatePresence
				mode="wait"
				// initial={false}
				onExitComplete={() => {
					window.scrollTo(0, 0);
					setCursorType("default");
				}}
			>
				<Component {...pageProps} key={router.asPath} />
			</AnimatePresence>
		</>
	);
}
