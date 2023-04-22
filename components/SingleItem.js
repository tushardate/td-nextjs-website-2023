import ImageCompare from "./ImageCompare";
import Player from "./Player";

export default function SingleItem({ data }) {
	return <RenderSingle data={data}></RenderSingle>;
}

function RenderSingle({ data }) {
	if (data.fieldGroupName === "Project_Project_sections_Items_Text") {
		if (data.content !== "") {
			return (
				<div className={`single-item ${data.textClasses}`}>
					<div>{data.content}</div>
				</div>
			);
		}
	} else if (data.fieldGroupName === "Project_Project_sections_Items_Image") {
		return (
			<div className={`single-item ${data.imageClasses}`}>
				<img src={data.url} alt="" />
			</div>
		);
	} else if (data.fieldGroupName === "Project_Project_sections_Items_Video") {
		return (
			<div className={`single-item ${data.videoClasses}`}>
				<Player url={data.url} poster={data.poster} type={data.type} />
			</div>
		);
	} else if (data.fieldGroupName === "Project_Project_sections_Items_Embed") {
		return (
			<div className={`single-item ${data.embedClasses}`}>
				<div> dangerouslySetInnerHTML={{ __html: data.content }}</div>
			</div>
		);
	} else if (
		data.fieldGroupName === "Project_Project_sections_Items_ImageCompare"
	) {
		return <ImageCompare before={data.urlLeft} after={data.urlRight} />;
	} else {
		return null;
	}
}
