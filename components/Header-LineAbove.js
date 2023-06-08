import Link from "next/link";
import { useRouter } from "next/router";
import { useCursorStore } from "./GlobalStore";
import { motion, useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

export default function Header() {
	const router = useRouter();
	const { cursorType, setCursorType } = useCursorStore();

	return (
		<>
			<div className="nav uppercase flex align-baseline text-white px-16 pt-12 pb-6 w-full justify-between fixed top-0 z-50 mix-blend-difference font-ppmori text-xl">
				<Link
					href="/"
					scroll={false}
					onMouseOver={() => setCursorType("hover")}
					onMouseLeave={() => setCursorType("default")}
				>
					<div className="relative">
						<div className="flex text-2.25xl">
							<div className="">Tushar Date</div>
							<span className="text-base ml-0.5">®</span>
							<div className="opacity-30 ml-2">
								Creative Director
							</div>
						</div>
					</div>
				</Link>
				<div className="flex">
					<div
						onMouseOver={() => setCursorType("hover")}
						onMouseLeave={() => setCursorType("default")}
						className="mx-6 relative leading-10"
					>
						<motion.div
							className={`${
								router.asPath == "/" ? "block" : "hidden"
							} line-above`}
							layoutId="line-above"
						></motion.div>
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
						className="ml-16 relative leading-10"
					>
						<motion.div
							className={`${
								router.asPath == "/about" ? "block" : "hidden"
							} line-above`}
							layoutId="line-above"
						></motion.div>
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
			</div>
		</>
	);
}
