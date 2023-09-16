import Link from "next/link";
import { useRouter } from "next/router";
import { useCursorStore } from "./GlobalStore";
import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Ticker from "./Ticker";

export default function Header() {
	const router = useRouter();
	const { cursorType, setCursorType } = useCursorStore();
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 24) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	const anim = {
		visible: {
			opacity: 1,
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
				className="nav flex align-baseline text-white py-4 px-4 md:px-6 w-full justify-between fixed top-0 z-50 mix-blend-difference font-satoshi font-medium text-base md:text-2xl"
			>
				<Link
					href="/"
					scroll={false}
					onMouseOver={() => setCursorType("hover")}
					onMouseLeave={() => setCursorType("default")}
				>
					<div className="relative">
						<motion.div className="flex text-2.25xl">
							<div className="">Tushar Date</div>
							{/* <span className="text-base">®</span> */}
							{/* <div className="hidden md:block opacity-30 ml-2">
								Creative Director
							</div> */}
							<span className="px-2"> &middot; </span>
							<div className="">
								<Ticker />
							</div>
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
