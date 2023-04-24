import Cursor from "@components/Cursor";
import "@components/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { useCursorStore } from "@components/GlobalStore";
import useMobileDetect from "use-mobile-detect-hook";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps, router }) {
	const detectMobile = useMobileDetect();
	const { setCursorType } = useCursorStore();
	const [deviceIsMobile, setDevideIsMobile] = useState(false);

	useEffect(() => {
		setDevideIsMobile(detectMobile.isMobile());
	}, [detectMobile]);

	return (
		<>
			<BrowserView>
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
			</BrowserView>
			<MobileView>
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
				<div className="fixed top-0 left-0 text-4xl">MOBILE</div>
				<Cursor />
			</MobileView>
		</>
	);
}
