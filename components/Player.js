import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useCursorStore } from "./GlobalStore";

export default function Player({ url, poster, type }) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const { setCursorType } = useCursorStore();

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
				url={url}
				controls={true}
				width="100%"
				height="100%"
			/>
		</div>
	);
}
