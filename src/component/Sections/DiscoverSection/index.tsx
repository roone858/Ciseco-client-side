import DiscoverCard from "../../Cards/DiscoverCard";
import shirt from "../../../assets/yellow-shirt.webp";
import ball from "../../../assets/ball.webp";
import dog from "../../../assets/dog.webp";
import oil from "../../../assets/oil.webp";
import SwiperGlide from "../../Sliders/Swiper";
import SectionHeaderComponent from "../../Others/sectionHeaderComponent/SectionHeaderComponent";
import { useRef } from "react";

const cards = [
  <DiscoverCard color={"rgb(254 252 232)"} image={shirt} />,
  <DiscoverCard color={"rgb(254 242 242)"} image={ball} />,
  <DiscoverCard color={"rgb(239 246 255)"} image={dog} />,
  <DiscoverCard color={"rgb(240 253 244)"} image={oil} />,
];
const DiscoverSection = () => {
  const swiperRef = useRef(null);
  const handleSwiper = (swiper: any) => {
    swiperRef.current = swiper;
  };
  return (
    <div className="overflow-hidden relative pl-6 md:pl-8 mt-24 lg:pl-12 lg:mt-32  mb-32 ">
      <div className={"mr-12"}>
        <SectionHeaderComponent
          swiperRef={swiperRef}
          title="Discover more. "
          subTitle="Good things are waiting for you"
          buttons={true}
        />
      </div>
      <div className="min-w-[1400px]">
        <SwiperGlide
          cards={cards}
          handleSwiper={handleSwiper}
          slidesPerView={3}
          emptySlides={true}
        />
      </div>
    </div>
  );
};

export default DiscoverSection;
