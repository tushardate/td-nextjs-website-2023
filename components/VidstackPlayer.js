import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import {
	MediaPlayer,
	MediaProvider,
	Controls,
	MutedIcon,
	PauseIcon,
	PlayIcon,
	RestartIcon,
} from "@vidstack/react";
import {
	PlyrLayout,
	plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useCursorStore } from "./GlobalStore";

export default function VidstackPlayer({ url, poster, type }) {
	const [play, setPlay] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const { setCursorType } = useCursorStore();
	const [posterLoaded, setPosterLoaded] = useState(false);

	const cleanUrl = (link) => link.replace(/\s+/g, "%20");

	function onLoadedMetadata(e) {
		console.log("loaded");
		setPosterLoaded(true);
	}

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
			style={{ opacity: posterLoaded ? 1 : 0, transition: "opacity 1s" }}
		>
			<MediaPlayer
				className="vidstackPlayer"
				onMouseOver={() => setIsHovering(true)}
				onContextMenu={(e) => e.preventDefault()}
				onPlaying={() => setIsPlaying(true)}
				src={url}
				aspectRatio="1.777"
				onLoadedMetadata={onLoadedMetadata}
				poster={poster}
			>
				<MediaProvider />
				<PlyrLayout icons={plyrLayoutIcons} />
				{isPlaying && <Controls.Root></Controls.Root>}
			</MediaPlayer>
		</div>
	);
}
