import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useWindowWidth } from "@react-hook/window-size";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TDCarousel({ images, slidesPerBreakpoint }) {
	const winWidth = useWindowWidth();
	const [numberOfSlides, setNumberOfSlides] = useState(3);
	const [showNavigation, setShowNavigation] = useState(true);

	useEffect(() => {
		if (winWidth < 768) {
			setNumberOfSlides(slidesPerBreakpoint.small);
		} else if (winWidth >= 768 && winWidth < 1024) {
			setNumberOfSlides(slidesPerBreakpoint.medium);
		} else if (winWidth >= 1024 && winWidth < 1536) {
			setNumberOfSlides(slidesPerBreakpoint.large);
		}  else if (winWidth >= 1536) {
			setNumberOfSlides(slidesPerBreakpoint.large + 1);
		} else {
			setNumberOfSlides(3);
		}
	}, [winWidth]);

	useEffect(() => {
		numberOfSlides < 2 ? setShowNavigation(false) : setShowNavigation(true);
	}, [numberOfSlides]);

	return (
		<div className="w-full h-full">
			<div className="">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={16}
					slidesPerView={numberOfSlides}
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					navigation={showNavigation}
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
