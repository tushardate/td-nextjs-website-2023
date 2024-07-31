"use client";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/base.css";
import { MediaPlayer, MediaProvider, Controls } from "@vidstack/react";
import { useRef, useEffect } from "react";

export default function VideoPoster({ url, sources }) {
	const playerRef = useRef(null);
	function playVideo(nativeEvent) {
		const player = playerRef.current;
		if (player) {
			player.muted = true;
			player.play().catch((error) => {
				console.error("Autoplay was prevented:", error);
			});
		}
	}

	return (
		<>
			<MediaPlayer
				className="rounded-xl"
				ref={playerRef}
				src={sources}
				playsInline
				autoPlay
				muted
				loop
				aspectRatio="16/9"
				onLoadedData={() => playVideo()}
			>
				<MediaProvider />
				<Controls.Root />
			</MediaPlayer>
		</>
	);
}
