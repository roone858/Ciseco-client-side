import DiscoverSection from "../../component/Sections/DiscoverSection";
import ArrivalsSection from "../../component/Sections/ArrivalsSection";
import FeaturesSection from "../../component/Sections/FeaturesSection";
import PromoOne from "../../component/Promos/promoOne/PromoOne";
import CategoriesSection from "../../component/Sections/CategoriesSection";
import PromoTow from "../../component/Promos/promoTow/PromoTow";
import CollectionsSections from "../../component/Sections/CollectionsSection";
import DepartmentSection from "../../component/Sections/DepatrmentSection";
import PromoThree from "../../component/Promos/promoThree/PromoThree";
import TrendingSection from "../../component/Sections/TrendingSection";
import BlogsSection from "../../component/Sections/BlogsSection";
import ClientSection from "../../component/Sections/ClientSection";
import Carousel from "../../component/Sliders/Carousel";

const Home = () => {
  return (
    <>
      <div className="w-full h-20"></div>

      <Carousel />
      <DiscoverSection />

      <div className="  relative px-6 md:px-8 lg:px-12 mt-24  lg:mt-32">
        <ArrivalsSection />
        <FeaturesSection />
        <PromoOne />
        <CategoriesSection />
        <PromoTow />
        <CollectionsSections />
        <DepartmentSection />
        <PromoThree />
        <TrendingSection />
        <BlogsSection />
        <ClientSection />
      </div>
    </>
  );
};

export default Home;
