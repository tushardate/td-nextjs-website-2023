'use client';
import Link from "next/link";
import { useRouter } from "next/router";
import Ticker2 from "./Ticker2";
import { useCursorStore } from "./GlobalStore";
import { motion } from "framer-motion";
import TextScramble from "./TextScramble";
import { useRef } from "react";
import TextScramble2 from "./TextScramble2";

export default function Header() {
	const router = useRouter();
	const { cursorType, setCursorType } = useCursorStore();
	const ref1 = useRef(null);
	const ref2 = useRef(null);

	return (
		<>
			<Link
				href="/"
				scroll={false}
				onMouseOver={() => setCursorType("hover")}
				onMouseLeave={() => setCursorType("default")}
			>
				<div className="fixed top-9 left-6 z-50 font-satoshi mix-blend-difference text-white text-xl">
					<div className="w-9 h-9">
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 31 30"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M30.0391 0V9.13044H20.2434L17.6347 4.57827L15.026 0.0130562L12.4173 4.57827L9.80862 9.13044H0.0390625V0H30.0391ZM9.82167 9.13044V30H20.2565V9.13044H9.82167Z" />
						</svg>
					</div>
					<Ticker2 />
				</div>

				{/* <div className="tickerWrapper hidden md:block">
							<div className="ticker leading-snug">
								<p className="message">Tushar Date</p>
								<p className="message">Creative Director</p>
								<p className="message">Los Angeles</p>
								<p className="message">Tushar Date</p>
							</div>
						</div> */}
			</Link>
			<div className="flex leading-looser fixed top-9 right-6 z-50 font-satoshi mix-blend-difference text-white text-xl">
				<div
					onMouseEnter={() => ref1.current.handleHover()}
					onMouseLeave={() => ref1.current.handleLeave()}
					className="px-6 hover:cursor-pointer"
				>
					<Link
						className={`${
							router.asPath === "/" ? "active" : ""
						} relative`}
						href="/"
						scroll={false}
					>
						{router.asPath === "/" && (
							<motion.div
								layoutId="nav-highlight"
								className="absolute h-0.5 w-full bg-white"
							></motion.div>
						)}
						<TextScramble2 ref={ref1} text="Work" />
					</Link>
				</div>
				<div
					onMouseEnter={() => ref2.current.handleHover()}
					onMouseLeave={() => ref2.current.handleLeave()}
					className="pl-6 hover:cursor-pointer"
				>
					<Link
						className={`${
							router.asPath === "/about" ? "active" : ""
						} relative`}
						href="/about"
						scroll={false}
					>
						{router.asPath === "/about" && (
							<motion.div
								layoutId="nav-highlight"
								className="absolute h-0.5 w-full bg-white"
							></motion.div>
						)}
						<TextScramble2 ref={ref2} text="About" />
					</Link>
				</div>
			</div>
		</>
	);
}
