import CategoryCard from "../../Cards/CategoryCard";
import explore1 from "../../../assets/explore1.webp";
import explore2 from "../../../assets/explore2.webp";
import explore3 from "../../../assets/explore3.webp";
import explore4 from "../../../assets/explore4.webp";
import explore5 from "../../../assets/explore5.webp";
import explore6 from "../../../assets/explore6.webp";
import explore1Pattern from "../../../assets/explore1.svg";
import explore2Pattern from "../../../assets/explore2.svg";
import explore3Pattern from "../../../assets/explore3.svg";
import explore4Pattern from "../../../assets/explore4.svg";
import explore5Pattern from "../../../assets/explore5.svg";
import explore6Pattern from "../../../assets/explore6.svg";
import {
  BeautyIcon,
  FemaleIcon,
  JewelryIcon,
  KidIcon,
  MaleIcon,
  SportIcon,
} from "../../icons";
const CategoriesSection = () => {
  return (
    <div className="relative py-24 lg:py-32">
      <div className="BackgroundSection relative py-24 px-10   lg:py-32 inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100/70 dark:bg-black/20">
        <div className="relative ">
          <div>
            <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
              <div className="flex flex-col items-center text-center w-full mx-auto">
                <h2 className="justify-center text-3xl md:text-4xl 2xl:text-5xl font-semibold">
                  Start exploring.
                </h2>
              </div>
            </div>
            <nav
              className=" mb-12 lg:mb-14 relative flex justify-center w-full text-sm md:text-base"
              data-nc-id="Nav"
            >
              <ul className="flex  p-1 bg-white dark:bg-neutral-800 rounded-full shadow-lg overflow-x-auto hiddenScrollbar">
                <li className="nc-NavItem2 relative" data-nc-id="NavItem2">
                  <button className="block font-medium whitespace-nowrap px-1 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full text-slate-600 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-900  focus:outline-none">
                    <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm ">
                      <span className="inline-block">
                        <FemaleIcon />
                      </span>
                      <span>Women</span>
                    </div>
                  </button>
                </li>
                <li className="nc-NavItem2 relative" data-nc-id="NavItem2">
                  <button className="block font-medium whitespace-nowrap px-1.5 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full bg-slate-900 text-slate-50 focus:outline-none">
                    <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm ">
                      <span className="inline-block">
                        <MaleIcon />
                      </span>
                      <span>Man</span>
                    </div>
                  </button>
                </li>
                <li className="nc-NavItem2 relative" data-nc-id="NavItem2">
                  <button className="block font-medium whitespace-nowrap px-1 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full text-slate-600 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-900  focus:outline-none">
                    <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm ">
                      <span className="inline-block">
                        <KidIcon />
                      </span>
                      <span>Kids</span>
                    </div>
                  </button>
                </li>
                <li className="nc-NavItem2 relative" data-nc-id="NavItem2">
                  <button className="block font-medium whitespace-nowrap px-1 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full text-slate-600 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-900  focus:outline-none">
                    <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                      <span className="inline-block">
                        <SportIcon />
                      </span>
                      <span>Sports</span>
                    </div>
                  </button>
                </li>
                <li className="nc-NavItem2 relative" data-nc-id="NavItem2">
                  <button className="block font-medium whitespace-nowrap px-1 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full text-slate-600 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-900  focus:outline-none">
                    <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                      <span className="inline-block">
                        <BeautyIcon />
                      </span>
                      <span>Beauty</span>
                    </div>
                  </button>
                </li>
                <li className="nc-NavItem2 relative" data-nc-id="NavItem2">
                  <button className="block font-medium whitespace-nowrap px-1 py-2 text-sm sm:px-7 sm:py-3 capitalize rounded-full text-slate-600 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-900  focus:outline-none">
                    <div className="flex items-center justify-center space-x-1.5 sm:space-x-2.5 text-xs sm:text-sm ">
                      <span className="inline-block">
                        <JewelryIcon />
                      </span>
                      <span>Jewelry</span>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="grid gap-4 md:gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <CategoryCard
              image={explore1}
              pattern={explore1Pattern}
              count={155}
              title={"Backpack"}
            />
            <CategoryCard
              image={explore2}
              pattern={explore2Pattern}
              count={22}
              title={"Shoes"}
            />
            <CategoryCard
              image={explore3}
              pattern={explore3Pattern}
              count={144}
              title={"Recycled Blanked"}
            />
            <CategoryCard
              image={explore4}
              pattern={explore4Pattern}
              count={343}
              title={"Cycling Shorts"}
            />
            <CategoryCard
              image={explore5}
              pattern={explore5Pattern}
              count={222}
              title={"Cycling Jersey"}
            />
            <CategoryCard
              image={explore6}
              pattern={explore6Pattern}
              count={155}
              title={"Car Coat"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
