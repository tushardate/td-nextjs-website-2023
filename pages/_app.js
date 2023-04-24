import Cursor from "@components/Cursor";
import "@components/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { useCursorStore } from "@components/GlobalStore";
import { useEffect } from "react";

export default function App({ Component, pageProps, router }) {
	const { setCursorType } = useCursorStore();

	return (
		<>
			<AnimatePresence
				mode="wait"
				initial={false}
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
