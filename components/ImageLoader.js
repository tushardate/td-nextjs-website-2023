"use client";
import Image from "next/image";

export default function ImageLoader(props) {
	return (
		// <LazyLoadImage
		// 	className="w-full h-auto overflow-hidden rounded-lg"
		// 	wrapperClassName="w-full"
		// 	placeholderSrc={`${src}tr=w-200,bl-30,q-50`}
		// 	effect="blur"
		// 	alt="picture"
		// 	src={`${src}tr=w-1440`}
		// 	srcSet={`${src}tr=w-800 800w, ${src}tr=w-1200 1200w, ${src}tr=w-1500 1500w, ${src}tr=w-1920 1920w,`}
		// 	threshold={400}
		// />
		<div className="w-full">
			<Image
				// loader={imageKitLoader}
				src={props.src}
				width="0"
				height="0"
				sizes="100vw"
				className="w-full h-auto overflow-hidden rounded-lg"
				alt="Tushar Date Portoflio Image"
			/>
		</div>
	);
}
