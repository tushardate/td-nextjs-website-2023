import Link from "next/link";
import { useRouter } from "next/router";
import { useCursorStore } from "./GlobalStore";
import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size";
import Ticker from "./Ticker";
import TDLogo from "./TDLogo";
import NavButton from "./NavButton";

export default function Header() {
	const router = useRouter();
	const { cursorType, setCursorType } = useCursorStore();
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const [showTicker, setShowTicker] = useState(true);
	const winWidth = useWindowWidth();
	const isWorkPage = () => {
		if (router.asPath === "/" || router.pathname.startsWith("/projects")) {
			return true;
		}
		return false;
	};
	const isAboutPage = () => {
		if (router.asPath === "/about") {
			return true;
		}
		return false;
	};

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 300) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	useEffect(() => {
		if (winWidth < 768) {
			setShowTicker(false);
		} else {
			setShowTicker(true);
		}
	}, [winWidth]);

	const anim = {
		visible: {
			opacity: 1,
			transition: {
				delay: 0.1,
				duration: 1,
				ease: [0.33, 1, 0.68, 1],
			},
		},
		hidden: {
			opacity: 0,
		},
	};

	return (
		<>
			<motion.div
				variants={anim}
				animate={hidden ? "hidden" : "visible"}
				onMouseOver={() => setHidden(false)}
				className="font-semibold uppercase flex gap-4 h-8 mt-8 px-16 w-full justify-between items-baseline fixed top-0 z-50 font-ppmori text-xl"
			>
				<Link
					href="/"
					scroll={false}
					onMouseOver={() => setCursorType("hover")}
					onMouseLeave={() => setCursorType("default")}
					className="basis-8/12"
				>
					<div className="relative flex items-end">
						<TDLogo />
						<span className="pl-8 w-full">
							{showTicker && <Ticker />}
						</span>
					</div>
				</Link>
				<div
					onMouseOver={() => setCursorType("hover")}
					onMouseLeave={() => setCursorType("default")}
					className="leading-none relative"
				>
					{isWorkPage() && (
						<motion.div
							layout
							layoutId="navPill"
							className="absolute w-full h-full border-2 border-tdblue rounded-full"
						></motion.div>
					)}
					<Link href="/" scroll={false}>
						<NavButton
							text="WORK"
							// className={`${isWorkPage() ? "active w-max" : ""}`}
						/>
					</Link>
				</div>
				<div
					onMouseOver={() => setCursorType("hover")}
					onMouseLeave={() => setCursorType("default")}
					className="leading-none text-right relative"
				>
					{isAboutPage() && (
						<motion.div
							layout
							layoutId="navPill"
							className="absolute w-full h-full border-2 border-tdblue rounded-full"
						></motion.div>
					)}
					<Link href="/about" scroll={false}>
						<NavButton
							text="ABOUT"
							// className={`${
							// 	router.asPath === "/about" ? "active w-max" : ""
							// }`}
						/>
					</Link>
				</div>
			</motion.div>
		</>
	);
}
