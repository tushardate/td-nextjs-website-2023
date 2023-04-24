import Link from "next/link";
import { useRouter } from "next/router";
import Ticker from "./Ticker";
import { useCursorStore } from "./GlobalStore";

export default function Header() {
	const router = useRouter();
	const { cursorType, setCursorType } = useCursorStore();

	return (
		<>
			<div className="nav flex text-white px-6 py-6 w-full justify-between items-baseline fixed top-0 z-50 mix-blend-difference font-ppmori">
				<Link
					href="/"
					scroll={false}
					onMouseOver={() => setCursorType("hover")}
					onMouseLeave={() => setCursorType("default")}
				>
					<div className="flex gap-6 items-baseline logo">
						<svg
							width="31"
							height="30"
							viewBox="0 0 31 30"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M30.0391 0V9.13044H20.2434L17.6347 4.57827L15.026 0.0130562L12.4173 4.57827L9.80862 9.13044H0.0390625V0H30.0391ZM9.82167 9.13044V30H20.2565V9.13044H9.82167Z" />
						</svg>

						<div className="tickerWrapper">
							<div className="ticker leading-snug">
								<p className="message">Tushar Date</p>
								<p className="message">Creative Director</p>
								<p className="message">Los Angeles</p>
								<p className="message">Tushar Date</p>
							</div>
						</div>

						{/* <Ticker /> */}
					</div>
				</Link>
				<div className="flex menu">
					<div
						onMouseOver={() => setCursorType("hover")}
						onMouseLeave={() => setCursorType("default")}
						className="px-4"
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
						className="pl-4"
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
