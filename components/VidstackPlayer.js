import { useEffect, useState, useRef } from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
	PlyrLayout,
	plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

import { useCursorStore } from "./GlobalStore";

export default function VidstackPlayer({ url, poster, type }) {
	// const [play, setPlay] = useState(false);
	// const [isPlaying, setIsPlaying] = useState(false);
	// const [isHovering, setIsHovering] = useState(false);
	// const { setCursorType } = useCursorStore();
	// const [posterLoaded, setPosterLoaded] = useState(false);

	// const cleanUrl = (link) => link.replace(/\s+/g, "%20");

	// function onLoadedMetadata(e) {
	// 	setPosterLoaded(true);
	// }

	// useEffect(() => {
	// 	if (isHovering) {
	// 		if (isPlaying) {
	// 			setCursorType("pause");
	// 		} else {
	// 			setCursorType("play");
	// 		}
	// 	} else {
	// 		setCursorType("default");
	// 	}
	// }, [isHovering, isPlaying]);

	return (
		<>
			<MediaPlayer
				className="vidstackPlayer rounded-xl"
				src={url}
				aspectRatio="1.777"
				poster={poster}
			>
				<MediaProvider />
				<PlyrLayout icons={plyrLayoutIcons} />
			</MediaPlayer>
			{/* <MediaPlayer
				className="vidstackPlayer rounded-xl"
				onMouseOver={() => setIsHovering(true)}
				onContextMenu={(e) => e.preventDefault()}
				onPlaying={() => setIsPlaying(true)}
				src={url}
				aspectRatio="1.777"
				onLoadedMetadata={onLoadedMetadata}
				poster={poster}
				style={{
					opacity: posterLoaded ? 1 : 0,
					transition: "opacity 1s",
				}}
			>
				<MediaProvider />
				<PlyrLayout icons={plyrLayoutIcons} />
			</MediaPlayer> */}
		</>
	);
}
