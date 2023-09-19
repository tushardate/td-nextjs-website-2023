import Link from "next/link";
import { useRouter } from "next/router";
import { useCursorStore } from "./GlobalStore";
import { useState, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size";
import Ticker from "./Ticker";

export default function Header() {
	const router = useRouter();
	const { cursorType, setCursorType } = useCursorStore();
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const [showTicker, setShowTicker] = useState(true);
	const winWidth = useWindowWidth();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 24) {
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
		initial: {
			opacity: 0,
		},
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
				initial="initial"
				animate={hidden ? "hidden" : "visible"}
				onMouseOver={() => setHidden(false)}
				className="nav flex align-baseline  py-4 px-4 md:px-6 w-full justify-between fixed top-0 z-50 font-satoshi font-medium text-xl md:text-2xl"
			>
				<Link
					href="/"
					scroll={false}
					onMouseOver={() => setCursorType("hover")}
					onMouseLeave={() => setCursorType("default")}
				>
					<div className="relative">
						<motion.div className="flex">
							<div>Tushar Date</div>
							{showTicker && (
								<>
									<span className="px-2">&middot;</span>
									<Ticker />
								</>
							)}
						</motion.div>
					</div>
				</Link>
				<div className="flex menu-strikethrough">
					<div
						onMouseOver={() => setCursorType("hover")}
						onMouseLeave={() => setCursorType("default")}
						className="px-3 md:px-4 lg:px-6"
					>
						<Link
							className={`${
								router.asPath === "/" ? "active" : ""
							}`}
							href="/"
							scroll={false}
						>
							Work
						</Link>
					</div>
					<div
						onMouseOver={() => setCursorType("hover")}
						onMouseLeave={() => setCursorType("default")}
						className="pl-3 md:pl-9 lg:pl-16"
					>
						<Link
							className={`${
								router.asPath === "/about" ? "active" : ""
							} `}
							href="/about"
							scroll={false}
						>
							About
						</Link>
					</div>
				</div>
			</motion.div>
		</>
	);
}
