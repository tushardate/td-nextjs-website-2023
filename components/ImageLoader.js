import Image from "next/image";

export default function ImageLoader({ src, fileInfo }) {
	return (
		<>
			{/* <div className="relative flex w-full h-full"> */}
			{fileInfo?.width !== undefined ? (
				<Image
					src={src}
					width={fileInfo.width}
					height={fileInfo.height}
					sizes={`(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, ${fileInfo.width}px`}
					className={`md:flex h-full w-auto overflow-hidden rounded-lg`}
					alt="Tushar Date Portoflio Image"
				/>
			) : (
				<Image
					// loader={imageKitLoader}
					src={src}
					width={fileInfo.width}
					height={fileInfo.height}
					sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1536px"
					className="md:flex h-full w-full overflow-hidden rounded-lg"
					alt="Tushar Date Portoflio Image"
				/>
			)}
			{/* </div> */}
		</>
	);
}

// export default function ImageLoader({ src, fileInfo, classes }) {
// 	return (
// 		<span className="inline-block">
// 			{fileInfo?.width !== undefined ? (
// 				<Image
// 					src={src}
// 					width={fileInfo.width}
// 					height={fileInfo.height}
// 					sizes={`(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, ${fileInfo.width}px`}
// 					className={`w-full h-auto overflow-hidden rounded-lg`}
// 					alt="Tushar Date Portoflio Image"
// 				/>
// 			) : (
// 				<Image
// 					// loader={imageKitLoader}
// 					src={src}
// 					width={1920}
// 					height={1080}
// 					sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, 1536px"
// 					className="w-full h-auto overflow-hidden rounded-lg"
// 					alt="Tushar Date Portoflio Image"
// 				/>
// 			)}
// 		</span>
// 	);
// }

// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// export default function ImageLoader({ src, classes }) {
// 	return (
// 		<LazyLoadImage
// 			className="w-full h-auto overflow-hidden rounded-lg"
// 			wrapperClassName="w-full"
// 			placeholderSrc={`${src}tr=w-200,bl-30,q-50`}
// 			effect="blur"
// 			alt="picture"
// 			src={`${src}tr=w-1440`}
// 			srcSet={`${src}tr=w-800 800w, ${src}tr=w-1200 1200w, ${src}tr=w-1500 1500w, ${src}tr=w-1920 1920w,`}
// 			threshold={400}
// 		/>
// 	);
// }
