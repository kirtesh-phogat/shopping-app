// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="assets/img/slide (1).jpg" alt="" className="h-75 min-w-full" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="assets/img/slide (2).jpg" alt="" className="h-75 min-w-full" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="assets/img/slide (3).jpg" alt="" className="h-75 min-w-full" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="assets/img/slide (4).jpg" alt="" className="h-75 min-w-full" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="assets/img/slide (5).jpg" alt="" className="h-75 min-w-full" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="assets/img/slide (6).jpg" alt="" className="h-75 min-w-full" loading="lazy"/></SwiperSlide>
        <SwiperSlide><img src="assets/img/slide (7).jpg" alt="" className="h-75 min-w-full" loading="lazy"/></SwiperSlide>
      </Swiper>
    </>
  );
}
