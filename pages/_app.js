import "@components/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { useCursorStore, useTickerStore } from "@components/GlobalStore";
// import Cursor from "@components/Cursor";
import TickerCounterUpdater from "@components/TicketCounterUpdates";

export default function App({ Component, pageProps, router }) {
	const { setCursorType } = useCursorStore();

	return (
		<>
			{/* <Cursor /> */}
			<TickerCounterUpdater />
			<AnimatePresence
				mode="wait"
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
