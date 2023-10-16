import Image from "next/image";

export default function ImageLoader(props) {
	return (
		<>
			{props.fileInfo?.width !== undefined ? (
				<Image
					src={props.src}
					width={props.fileInfo.width}
					height={props.fileInfo.height}
					sizes="100vw"
					className={`w-full h-auto overflow-hidden rounded-lg`}
					alt="Tushar Date Portoflio Image"
				/>
			) : (
				<Image
					// loader={imageKitLoader}
					src={props.src}
					width="0"
					height="0"
					sizes="100vw"
					className="w-full h-auto overflow-hidden rounded-lg"
					alt="Tushar Date Portoflio Image"
				/>
			)}
		</>
	);
}
