import Link from "next/link";
import { useRouter } from "next/router";
import { useCursorStore } from "./GlobalStore";
import { motion, useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";

export default function Header() {
	const router = useRouter();
	const { cursorType, setCursorType } = useCursorStore();
	const [scope, animate] = useAnimate();

	const moveDist = 10;

	function anim2() {
		animate(
			"li",
			{ y: [moveDist, 0, 0, -moveDist], opacity: [0, 1, 1, 0] },
			{
				times: [0, 0.17, 0.83, 1],
				duration: 4,
				ease: "anticipate",
				delay: stagger(3.35),
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 6.05,
			}
		);
	}

	useEffect(() => {
		anim2();
	}, []);

	return (
		<>
			<div className="nav flex text-white px-6 py-6 w-full justify-between items-baseline fixed top-0 z-50 mix-blend-difference font-satoshi">
				<Link
					href="/"
					scroll={false}
					onMouseOver={() => setCursorType("hover")}
					onMouseLeave={() => setCursorType("default")}
				>
					<div className="relative">
						<svg
							width="31"
							height="30"
							className="inline"
							viewBox="0 0 31 30"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="white"
								d="M30.0391 0V9.13044H20.2434L17.6347 4.57827L15.026 0.0130562L12.4173 4.57827L9.80862 9.13044H0.0390625V0H30.0391ZM9.82167 9.13044V30H20.2565V9.13044H9.82167Z"
							/>
						</svg>

						<motion.ul
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
						</motion.ul>

						{/* <Ticker /> */}
					</div>
				</Link>
				<div className="flex menu">
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
						className="pl-6"
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
