import { NavigationButton } from "../../Sliders/Swiper";
const SectionHeaderComponent = ({
  title,
  subTitle,
  swiperRef,
  buttons,
}: any) => {
  return (
    <div className="header flex justify-between items-center  mb-12 lg:mb-14  ">
      <div className="Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between  text-neutral-900 dark:text-neutral-50">
        <h2 className=" text-3xl md:text-4xl font-semibold">
          {title}
          <span className="text-neutral-500 dark:text-neutral-400">
            {subTitle}
          </span>
        </h2>
      </div>
      {buttons && (
        <div className="navigation-buttons flex gap-4 ">
          <NavigationButton title="prev" swiperRef={swiperRef} />
          <NavigationButton title="next" swiperRef={swiperRef} />
        </div>
      )}
    </div>
  );
};

export default SectionHeaderComponent;
