import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useCursorStore } from "./GlobalStore";

export default function Player({ url, poster, type }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const { setCursorType } = useCursorStore();

	const cleanUrl = (link) => link.replace(/\s+/g, "%20");

	useEffect(() => {
		console.log(poster);
		console.log(cleanUrl(poster));
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

	return (
		<div
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			style={{ position: "relative", paddingTop: "56.25%" }}
		>
			<ReactPlayer
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
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				onEnded={() => setIsPlaying(false)}
				url={cleanUrl(url)}
				controls={true}
				width="100%"
				height="100%"
				light={cleanUrl(poster)}
				playing={true}
				playIcon={<PlayButton />}
			/>
		</div>
	);
}

const PlayButton = () => {
	return (
		<div className="bg-[rgba(0,0,0,0.1)] group flex justify-center items-center w-full h-full">
			<div className="min-w-[64px] w-[12%]">
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
			</div>
			{/* <div className="text-4xl px-4 py-2 rounded-lg bg-white text-black font-bold">
				PLAY
			</div> */}
		</div>
	);
};
