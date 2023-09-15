import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TDCarousel({ images, slidesPerBreakpoint, winWidth }) {
	const [noOfSlides, setNoOfSlides] = useState(3);

	useEffect(() => {
		console.log(winWidth)
		if (winWidth < 768) {
			console.log("small");
			setNoOfSlides(slidesPerBreakpoint.small);
		} else if (winWidth >= 768 && winWidth < 1024) {
			console.log("medium");
			setNoOfSlides(slidesPerBreakpoint.medium);
		} else if (winWidth >= 1024) {
			console.log("large")
			setNoOfSlides(slidesPerBreakpoint.large);
		} else {
			setNoOfSlides(3);
		}
	}, [winWidth]);

	return (
		<div className="w-full h-full">
			<div className="">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={16}
					slidesPerView={noOfSlides}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					navigation
					pagination={{ clickable: true }}
				>
					{images.map((el, i) => (
						<SwiperSlide key={i}>
							<div>
								<img src={el.image} className="rounded-xl" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
