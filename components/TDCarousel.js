import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { useWindowWidth } from "@react-hook/window-size";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TDCarousel({ images, slidesPerView }) {
	const init = {
		sm: 1,
		md: 2,
		lg: 3,
	};
	const sm = 640;
	const md = 768;
	const lg = 1024;
	const spv = { ...init, ...JSON.parse(slidesPerView) };
	const win = useWindowWidth();
	const [numberOfSlides, setNumberOfSlides] = useState(1);
	const [showNavigation, setShowNavigation] = useState(true);

	useEffect(() => {
		if (win > sm && win < md) {
			setNumberOfSlides(Number(spv.sm));
		} else if (win > md && win < lg) {
			setNumberOfSlides(Number(spv.md));
		} else if (win > lg) {
			setNumberOfSlides(Number(spv.lg));
		} else {
			setNumberOfSlides(Number(1));
		}

		console.log(numberOfSlides, win, spv, slidesPerView);
	}, [win]);

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
