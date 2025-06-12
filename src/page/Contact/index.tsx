import ContactSection from "../../component/Sections/ContactSection";
import PromoOne from "../../component/Promos/promoOne/PromoOne";

const ContactPage = () => {
  return (
    <div className="p-12">
      <ContactSection />
      <div className="relative p-1  my-28 ">
      <div className="BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100/70 dark:bg-black/20"></div>

        <PromoOne />
      </div>
    </div>
  );
};

export default ContactPage;
