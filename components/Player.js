import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useCursorStore } from "./GlobalStore";

export default function Player({ url, poster, type }) {
	const [play, setPlay] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const { setCursorType } = useCursorStore();

	const cleanUrl = (link) => link.replace(/\s+/g, "%20");

	useEffect(() => {
		if (isHovering) {
			if (isPlaying) {
				setCursorType("pause");
			} else {
				setCursorType("play");
			}
		} else {
			setCursorType("default");
		}
	}, [isHovering, isPlaying]);

	const handlePreviewClick = () => {
		console.log("click")
		setPlay(true);
	};

	return (
		<div
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			style={{ position: "relative", paddingTop: "56.25%" }}
		>
			{!isPlaying && (
				<PlayButton
					onClick={handlePreviewClick}
					className="absolute inset-0 z-50 pointer-events-none"
				/>
			)}
			<ReactPlayer
				className="react-player hover:cursor-pointer"
				style={{ position: "absolute", top: 0, left: 0 }}
				onContextMenu={(e) => e.preventDefault()}
				config={{
					file: {
						attributes: {
							poster: poster,
							controlsList: "nodownload",
						},
					},
				}}
				onPlay={(e) => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				onEnded={() => setIsPlaying(false)}
				url={cleanUrl(url)}
				controls={true}
				width="100%"
				height="100%"
				playsinline
				playing={play}
			/>
		</div>
	);
}

const PlayButton = ({ className }) => {
	return (
		<div
			className={`bg-[rgba(0,0,0,0.1)] group flex justify-center items-center w-full h-full ${className} hover:cursor-pointer`}
		>
			{/* <div className="min-w-[64px] w-[12%]">
				<svg
					viewBox="0 0 80 80"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="40" cy="40" r="40" fill="white" />
					<path
						d="M58.3333 40L30.8333 55.8771L30.8333 24.1229L58.3333 40Z"
						fill="black"
					/>
				</svg>
			</div> */}
			<div className="text-4xl w-[11%] min-w-[60px] aspect-[1/1] rounded-full bg-white text-black font-semibold flex justify-center items-center drop-shadow-xl">
				<svg
					viewBox="0 0 29 32"
					height="40%"
					fill="none"
					className="pl-[10%]"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M28.3333 16L0.833342 31.8771L0.833343 0.122864L28.3333 16Z"
						fill="black"
					/>
				</svg>
				{/* <svg
					height="55%"
					viewBox="0 0 77 44"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="pl-1 pointer-events-none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M26.5912 33.6V0H30.2392V33.6H26.5912ZM54.2284 19.968C54.2284 13.488 51.1084 9.024 44.4844 9.024C38.4364 9.024 34.1644 12.816 35.4604 17.904H39.3484C38.4844 14.304 40.8364 12.384 44.4364 12.384C49.0924 12.384 50.5804 15.648 50.5804 19.92V20.112C48.7084 19.584 46.5484 19.296 44.4844 19.296C37.9084 19.296 33.6844 22.272 33.6844 27.072C33.6844 31.344 37.0924 34.176 41.9404 34.176C45.8764 34.176 48.9004 32.304 50.6284 29.232V33.6H54.2284V19.968ZM50.5804 23.328C50.1484 27.936 46.6924 30.912 42.3244 30.912C39.3484 30.912 37.5724 29.568 37.5724 27.216C37.5724 24.336 40.1644 22.464 44.7724 22.464C46.7404 22.464 48.8524 22.8 50.5804 23.328ZM76.8742 9.6H73.1302L66.2662 30.576L58.8742 9.6H54.9862L64.5862 34.848L64.3462 35.616C63.5302 38.016 62.1382 40.224 58.9222 40.224C57.7702 40.224 56.6662 39.984 55.5142 39.504V42.864C56.5702 43.296 57.9622 43.584 59.3062 43.584C63.6742 43.584 66.3622 40.608 68.0422 35.616L76.8742 9.6ZM22.896 21.6C22.896 14.064 18.432 9.024 12.048 9.024C8.352 9.024 5.424 10.752 3.648 13.68V9.6H0V43.2H3.648V29.52C5.424 32.448 8.352 34.176 12.048 34.176C18.384 34.176 22.896 29.184 22.896 21.6ZM19.008 21.6C19.008 27.12 15.888 30.816 11.232 30.816C6.576 30.816 3.504 27.12 3.504 21.6C3.504 16.08 6.576 12.384 11.232 12.384C15.888 12.384 19.008 16.08 19.008 21.6Z"
						fill="black"
					/>
				</svg> */}
			</div>
			{/* <div className="text-4xl w-2/12 aspect-[2/1] rounded-full bg-white text-black font-semibold flex justify-center items-center">
				<div>PLAY</div>
			</div> */}
		</div>
	);
};