import { useSelector } from "react-redux";
import CollectionCard from "../../Cards/CollectionCard";
import SwiperWithHeader from "../../Sliders/SwiperWithHeader";
import { State } from "../../../interfaces";

const CollectionsSections = () => {
  const products = useSelector((state: State) => state.products.data);
  const chosenExpertProducts = products.filter((product) => product.expert);

  return (
    <div className="my-32">
      <SwiperWithHeader
        cards={[
          chosenExpertProducts.map((product, key) => (
            <CollectionCard key={key} product={product} />
          )),

          <MoreItems key={"moreItem"} />,
        ]}
        title="Chosen by our experts"
        subTitle=""
        slidesPerView={3}
      />
    </div>
  );
};

export default CollectionsSections;

const MoreItems = () => {
  return (
    <a className="block relative group" href="/search">
      <div className="relative rounded-2xl overflow-hidden h-[410px]">
        <div className="h-[410px] bg-black/5 dark:bg-neutral-800"></div>
        <div className="absolute inset-y-6 inset-x-10  flex flex-col items-center justify-center">
          <div className="flex items-center justify-center relative">
            <span className="text-xl font-semibold">More items</span>
            <svg
              className="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 20.4999V3.66992"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <span className="text-sm mt-1">Show me more</span>
        </div>
      </div>
    </a>
  );
};
