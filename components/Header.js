import Link from "next/link";
import { useRouter } from "next/router";
import { useCursorStore } from "./GlobalStore";

export default function Header() {
	const router = useRouter();
	const { cursorType, setCursorType } = useCursorStore();

	return (
		<>
			<div className="nav uppercase flex align-baseline text-white px-4 md:px-16 pt-6 md:pt-12 pb-6 w-full justify-between fixed top-0 z-50 mix-blend-difference font-ppmori text-base md:text-xl">
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
							<div className="hidden md:block opacity-30 ml-2">
								Creative Director
							</div>
						</div>
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
			</div>
		</>
	);
}
