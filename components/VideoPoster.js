import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function VideoPoster({ src }) {
	const [revealVideo, setRevealVideo] = useState(false);

	function handleCanPlayThrough() {
		setRevealVideo(true)
	}

	useEffect(() => {
		const video = document.querySelector("video");
		if (video) {
			video.addEventListener("canplaythrough", handleCanPlayThrough);

			if (video.readyState > 3) {
				handleCanPlayThrough();
			}
		}

		return () => {
			// Remove event listeners if the component unmounts
			if (video) {
				video.removeEventListener(
					"canplaythrough",
					handleCanPlayThrough
				);
			}
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: revealVideo ? 1 : 0,
			}}
			transition={{ duration: 1, delay: 0.4 }}
			className="overflow-hidden w-full h-full relative"
		>
			<video
				className="h-full w-full object-cover absolute inset-0"
				width="1920"
				height="1080"
				autoPlay
				playsInline
				muted
				loop
				src={src}
			/>
		</motion.div>
	);
}
