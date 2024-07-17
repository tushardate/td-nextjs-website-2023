import Image from "next/image";

export default function ImageLoader(props) {
	return (
		<>
			{props.fileInfo?.width !== undefined ? (
				<Image
					src={props.src}
					width={props.fileInfo.width}
					height={props.fileInfo.height}
					sizes={`(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, ${props.fileInfo.width}px`}
					className={`w-full h-auto overflow-hidden rounded-lg`}
					alt="Tushar Date Portoflio Image"
				/>
			) : (
				<Image
					// loader={imageKitLoader}
					src={props.src}
					width={1920}
					height={1080}
					sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1536px"
					className="w-full h-auto overflow-hidden rounded-lg"
					alt="Tushar Date Portoflio Image"
				/>
			)}
		</>
	);
}
