import ImageCompare from "./ImageCompare";
import Player from "./Player";
import { motion } from "framer-motion";
import { singleItemAnim } from "./animation/animations";
import ImageLoader from "./ImageLoader";
import TDCarousel from "./TDCarousel";

export default function SingleItem({ data }) {
	return <RenderSingle data={data}></RenderSingle>;
}

function RenderSingle({ data }) {
	if (data.fieldGroupName === "Project_Project_sections_Items_Text") {
		if (data.content !== "") {
			return (
				<motion.div
					variants={singleItemAnim}
					initial="initial"
					whileInView="whileInView"
					viewport={singleItemAnim.viewport}
					className={`single-item ${data.textClasses}`}
				>
					<div>{data.content}</div>
				</motion.div>
			);
		}
	} else if (data.fieldGroupName === "Project_Project_sections_Items_Image") {
		return (
			<motion.div
				variants={singleItemAnim}
				initial="initial"
				whileInView="whileInView"
				viewport={singleItemAnim.viewport}
				className={`single-item ${data.imageClasses}`}
			>
				<ImageLoader src={data.url} />
				{/* <img src={data.url} alt="" /> */}
			</motion.div>
		);
	} else if (data.fieldGroupName === "Project_Project_sections_Items_Video") {
		if (data.type === "VIDEOPOSTER") {
			return (
				<motion.div
					variants={singleItemAnim}
					initial="initial"
					whileInView="whileInView"
					viewport={singleItemAnim.viewport}
					className={`single-item ${data.videoClasses} w-full h-full rounded-xl safari-fix`}
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
					variants={singleItemAnim}
					initial="initial"
					whileInView="whileInView"
					viewport={singleItemAnim.viewport}
					className={`single-item ${data.videoClasses} overflow-hidden rounded-xl`}
				>
					<Player
						url={data.url}
						poster={data.poster}
						type={data.type}
					/>
				</motion.div>
			);
		}
	} else if (data.fieldGroupName === "Project_Project_sections_Items_Embed") {
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
	} else if (
		data.fieldGroupName === "Project_Project_sections_Items_ImageCompare"
	) {
		return (
			<motion.div
				variants={singleItemAnim}
				initial="initial"
				whileInView="whileInView"
				viewport={singleItemAnim.viewport}
				className={`single-item ${data.imageCompareClasses}`}
			>
				<ImageCompare before={data.urlLeft} after={data.urlRight} />
			</motion.div>
		);
	} else if (
		data.fieldGroupName === "Project_Project_sections_Items_Carousel"
	) {
		return (
			<div className={`single-item`}>
				<TDCarousel images={data.images} />
			</div>
		);
	} else {
		return null;
	}
}
