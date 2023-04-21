import { useRef } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import VideoJS from "./VideoJS";

export default function Player({ url, poster, type }) {
	const playerRef = useRef(null);
	const videoJsOptions = {
		controls: true,
		responsive: true,
		poster: poster,
		fluid: true,
		sources: [
			{
				src: url,
				type: "video/mp4",
			},
		],
	};
	const handlePlayerReady = (player) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on("waiting", () => {
			videojs.log("player is waiting");
		});

		player.on("dispose", () => {
			videojs.log("player will dispose");
		});
	};

	const plyrProps = {
		source: url,
		options: undefined,
	};
	return (
		// <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
		<div style={{ position: "relative", paddingTop: "56.25%" }}>
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
				url={url}
				controls={true}
				width="100%"
				s
				height="100%"
			/>
		</div>
		// <div>
		//     <Plyr
		// 		source={{
		// 			type: "video",
		// 			sources: [{ src: url, provider: "video/mp4" }],
		// 		}}
		// 		poster={poster}
		// 	/>
		// </div>
	);
}
