import { useRef } from "react";
import SectionHeaderComponent from "../../Others/sectionHeaderComponent/SectionHeaderComponent";
import SwiperGlide from "../Swiper";


const SwiperWithHeader = ({
  title,
  subTitle,
  slidesPerView,
  cards,
  spaceBetween
}: any) => {
  const swiperRef = useRef(null);
  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
  };
  return (
    <div className="mb-32">
      <SectionHeaderComponent
        title={title}
        subTitle={subTitle}
        swiperRef={swiperRef}
        buttons={true}
      />
      <SwiperGlide
        spaceBetween={spaceBetween }
        handleSwiper={handleSwiper}
        slidesPerView={slidesPerView}
        cards={cards}
      />
    </div>
  );
};

export default SwiperWithHeader;
