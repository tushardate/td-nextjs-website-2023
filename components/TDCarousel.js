import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TDCarousel({ images }) {
	return (
		<div className="w-full h-full">
			<div className="">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={16}
					slidesPerView={3}
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
