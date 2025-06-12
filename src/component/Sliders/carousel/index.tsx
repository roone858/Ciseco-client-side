import image1 from "../../../assets/hero-right.webp";
import image2 from "../../../assets/hero-right-2.webp";
import image3 from "../../../assets/hero-right-3.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";

// import required modules

export default function App() {
  return (
  
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ItemContent image={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemContent image={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <ItemContent image={image3} />
        </SwiperSlide>
      </Swiper>
  
  );
}

const ItemContent = ({ image }: { image: string }) => {
  return (
    <div className="relative carousel-item px-10 ">
      <div className="   py-44">
        <div className="  text relative z-[1] w-full max-w-3xl space-y-8 sm:space-y-14 ">
          <div className=" space-y-5 sm:space-y-6">
            <span className="block text-base md:text-xl text-slate-700 font-medium">
              In this season, find the best 🔥
            </span>
            <h2 className=" font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[114%] text-slate-900">
              Exclusive collection for everyone
            </h2>
          </div>
          <a
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-6 sm:py-5 sm:px-9  disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl nc-SectionHero2Item__button dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
            href="/"
          >
            <span>Explore now</span>
            <span>
              <svg className="w-5 h-5 ml-2.5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22 22L20 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="image-container absolute w-full top-0 right-0">
        <img
          alt="Exclusive collection for everyone"
          className=" "
          src={image}
        />
      </div>
    </div>
  );
};
