import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperGlide({
  handleSwiper,
  cards,
  slidesPerView,
  emptySlides,
  spaceBetween,
}: {
  handleSwiper: (swiper: any) => void;
  cards: JSX.Element[];
  slidesPerView: number;
  emptySlides?: boolean;
  spaceBetween?: number;
}) {
  return (
    <>
      <Swiper
        onSwiper={handleSwiper}
        slidesPerView={1}
        spaceBetween={spaceBetween ? spaceBetween : 30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: slidesPerView,
            spaceBetween: 40,
          },
          // 1024: {
          //   slidesPerView: 5,
          //   spaceBetween: 50,
          // },
        }}
        className="mySwiper"
      >
        {cards.map((card: any, key: number) => (
          <SwiperSlide key={key}> {card}</SwiperSlide>
        ))}

        {emptySlides && (
          <>
            {" "}
            <SwiperSlide> </SwiperSlide>
            <SwiperSlide> </SwiperSlide>
          </>
        )}
      </Swiper>
    </>
  );
}

export const NavigationButton = ({
  swiperRef,
  title,
}: {
  swiperRef: any;
  title: "next" | "prev";
}) => {
  return (
    <div>
      <button
        className="w-10 h-10  border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center border-2"
        onClick={() =>
          title == "next"
            ? swiperRef.current.slideNext()
            : swiperRef.current.slidePrev()
        }
      >
        <i
          className={
            title == "next"
              ? "fa-solid fa-arrow-right"
              : "fa-solid fa-arrow-left"
          }
        ></i>
      </button>
    </div>
  );
};
