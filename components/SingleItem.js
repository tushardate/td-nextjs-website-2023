import ImageCompare from "./ImageCompare";
import Player from "./Player";
import { motion } from "framer-motion";
import { singleItemAnim } from "./animation/animations";

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
				<img src={data.url} alt="" />
			</motion.div>
		);
	} else if (data.fieldGroupName === "Project_Project_sections_Items_Video") {
		return (
			<motion.div
				variants={singleItemAnim}
				initial="initial"
				whileInView="whileInView"
				viewport={singleItemAnim.viewport}
				className={`single-item ${data.videoClasses}`}
			>
				<Player url={data.url} poster={data.poster} type={data.type} />
			</motion.div>
		);
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
	} else {
		return null;
	}
}
