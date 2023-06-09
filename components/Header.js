import Link from "next/link";
import { useRouter } from "next/router";
import { useCursorStore } from "./GlobalStore";
import { motion, useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

export default function Header() {
	const router = useRouter();
	const { cursorType, setCursorType } = useCursorStore();
	// const [scope, animate] = useAnimate();

	// const moveDist = 10;

	// function anim2() {
	// 	animate(
	// 		"li",
	// 		{ y: [moveDist, 0, 0, -moveDist], opacity: [0, 1, 1, 0] },
	// 		{
	// 			times: [0, 0.17, 0.83, 1],
	// 			duration: 4,
	// 			ease: "anticipate",
	// 			delay: stagger(3.35),
	// 			repeat: Infinity,
	// 			repeatType: "loop",
	// 			repeatDelay: 6.05,
	// 		}
	// 	);
	// }

	// useEffect(() => {
	// 	anim2();
	// }, []);

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
							<div className="opacity-30 ml-2">Creative Director</div>
						</div>

						{/* <motion.ul
							ref={scope}
							className="hidden md:inline-block relative whitespace-nowrap ml-4"
						>
							<motion.li
								initial={{ opacity: 0, y: moveDist }}
								className="absolute -top-1.5"
							>
								Tushar Date
							</motion.li>
							<motion.li
								initial={{ opacity: 0, y: moveDist }}
								className="absolute -top-1.5"
							>
								Creative Director
							</motion.li>
							<motion.li
								initial={{ opacity: 0, y: moveDist }}
								className="absolute -top-1.5"
							>
								Los Angeles
							</motion.li>
						</motion.ul> */}
					</div>
				</Link>
				<div className="flex menu-strikethrough">
					<div
						onMouseOver={() => setCursorType("hover")}
						onMouseLeave={() => setCursorType("default")}
						className="px-6"
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
						className="pl-16"
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
			</div>
		</>
	);
}
