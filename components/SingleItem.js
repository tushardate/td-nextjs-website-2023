import ImageCompare from "./ImageCompare";
import Player from "./Player";
import { motion } from "framer-motion";
import { singleItemAnim, clipPathAnim } from "./animation/animations";
import ImageLoader from "./ImageLoader";
import TDCarousel from "./TDCarousel";
import TDTextLineReveal2 from "./TDTextLineReveal2";
import PlyrReact from "./PlyrReact";

export default function SingleItem({ data }) {
	return <RenderSingle data={data}></RenderSingle>;
}

function RenderSingle({ data }) {
	if (data._modelApiKey === "text") {
		if (data.content !== "") {
			return (
				<motion.div
					// variants={singleItemAnim}
					// initial="initial"
					// whileInView="whileInView"
					// viewport={singleItemAnim.viewport}
					className={`single-item ${data.textClasses}`}
				>
					<div>{data.content}</div>
				</motion.div>
			);
		}
	} else if (data._modelApiKey === "image") {
		return (
			<motion.div
				variants={clipPathAnim}
				initial="initial"
				whileInView="whileInView"
				viewport={clipPathAnim.viewport}
				className={`single-item td-rounded leading-zero ${data.imageClasses}`}
			>
				<ImageLoader src={data.url} />
				{/* <img src={data.url} alt="" /> */}
			</motion.div>
		);
	} else if (data._modelApiKey === "video") {
		if (data.videoType === "VIDEOPOSTER") {
			return (
				<motion.div
					variants={clipPathAnim}
					initial="initial"
					whileInView="whileInView"
					viewport={clipPathAnim.viewport}
					className={`single-item ${data.videoClasses} w-full h-full td-rounded safari-fix`}
				>
					<div
						className="overflow-hidden w-full h-0 relative"
						style={{ paddingBottom: `${data.ratio}%` }}
					>
						<video
							className="h-full w-full object-cover absolute inset-0"
							autoPlay
							playsInline
							muted
							loop
							src={data.url}
						/>
					</div>
				</motion.div>
			);
		} else {
			return (
				<motion.div
					variants={clipPathAnim}
					initial="initial"
					whileInView="whileInView"
					viewport={clipPathAnim.viewport}
					className={`single-item ${data.videoClasses} overflow-hidden td-rounded`}
				>
					<Player
						url={data.url}
						poster={data.poster}
						type={data.videoType}
					/>
				</motion.div>
			);
		}
	} else if (data._modelApiKey === "embed") {
		return (
			<motion.div
				variants={singleItemAnim}
				initial="initial"
				whileInView="whileInView"
				viewport={singleItemAnim.viewport}
				className={`single-item ${data.embedClasses}`}
			>
				<div> dangerouslySetInnerHTML={{ __html: data.content }}</div>
			</motion.div>
		);
	} else if (data._modelApiKey === "image_compare") {
		return (
			<motion.div
				variants={clipPathAnim}
				initial="initial"
				whileInView="whileInView"
				viewport={clipPathAnim.viewport}
				className={`single-item ${data.imageCompareClasses}  overflow-hidden td-rounded`}
			>
				<ImageCompare before={data.urlLeft} after={data.urlRight} />
			</motion.div>
		);
	} else if (data._modelApiKey === "carousel") {
		return (
			<motion.div
				variants={singleItemAnim}
				initial="initial"
				whileInView="whileInView"
				viewport={singleItemAnim.viewport}
				className={`single-item ${data.carouselClasses}`}
			>
				<TDCarousel
					images={data.images}
					slidesPerBreakpoint={data.slidesPerBreakpoint}
				/>
			</motion.div>
		);
	} else {
		return null;
	}
}
