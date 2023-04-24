import Cursor from "@components/Cursor";
import "@components/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { useCursorStore } from "@components/GlobalStore";
import useMobileDetect from "use-mobile-detect-hook";

export default function App({ Component, pageProps, router }) {
	const detectMobile = useMobileDetect();
	const { setCursorType } = useCursorStore();

	return (
		<>
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
			{!detectMobile.isMobile() ? <Cursor /> : <></>}
		</>
	);
}
