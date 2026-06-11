import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = Array.from(
  { length: 7 },
  (_, index) => `/assets/img/slide (${index + 1}).jpg`,
);

const HeroSlider = () => (
  <section aria-label="Featured promotions">
    <Swiper
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      navigation
      modules={[Pagination, Navigation, Autoplay]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide}>
          <img
            src={slide}
            alt={`Featured shopping promotion ${index + 1}`}
            className="h-56 w-full object-cover sm:h-72 md:h-96"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default HeroSlider;
