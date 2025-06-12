import aboutImage from "../../assets/hero-about.webp";
import PromoThree from "../../component/Promos/promoThree/PromoThree";
import ClientSection from "../../component/Sections/ClientSection";
import FactsSection from "../../component/Sections/FactsSection";
import FounderSection from "../../component/Sections/FounderSection";

const AboutPage = () => {
  return (
    <div className="px-12">
      <div className=" absolute inset-x-0 md:top-10 min-h-0 pl-20 py-24 flex overflow-hidden z-0">
        <span className="block bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96"></span>
        <span className="block bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-96 lg:h-96 animation-delay-2000"></span>
      </div>
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div className="SectionHero relative py-12 ">
          <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
            <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
              <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
                👋 About Us.
              </h2>
              <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
                We’re impartial and independent, and every day we create
                distinctive, world-className programmes and content which
                inform, educate and entertain millions of people in the around
                the world.
              </span>
            </div>
            <div className="flex-grow">
              <img alt="" className="w-full" src={aboutImage} />
            </div>
          </div>
        </div>
        <FounderSection />
      </div>
      <div className="relative py-12">
      <div className="BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100/70 dark:bg-black/20"></div>
      <ClientSection />
      </div>
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
      <FactsSection/>
      <PromoThree/>
      </div>
    </div>
  );
};

export default AboutPage;
