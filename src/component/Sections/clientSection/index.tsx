import ClientQuote from "../../Others/clientQuotes/ClientQuote";
import SwiperGlide from "../../Sliders/Swiper";
import quotation from "../../../assets/quotation.webp";
import quotation2 from "../../../assets/quotation2.webp";
import clientSayMain from "../../../assets/clientSayMain.webp";
import clientSay1 from "../../../assets/clientSay1.webp";
import clientSay2 from "../../../assets/clientSay2.webp";
import clientSay3 from "../../../assets/clientSay3.webp";
import clientSay4 from "../../../assets/clientSay4.webp";
import clientSay5 from "../../../assets/clientSay5.webp";
import clientSay6 from "../../../assets/clientSay6.jpg";
import './clientSection.css'


const ClientSection = () => {
  return (
    <div className="SectionClientSay relative flow-root mt-12 ">
      <div className="relative md:mb-16 max-w-2xl mx-auto">
        <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
          <div className="flex flex-col items-center text-center w-full mx-auto">
            <h2 className="justify-center text-3xl md:text-4xl font-semibold">
              Good news from far away 🥇
            </h2>
            <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
              Let's see what people think of Ciseco
            </span>
          </div>
        </div>
        <img
          alt=""
          loading="lazy"
          width="126"
          height="120"
          className="mx-auto"
          src={clientSayMain}
        />
        <div className=" images mt-12 lg:mt-16 relative ">
          <img id="one" src={clientSay1}/>
          <img id="two" src={clientSay2}/>
          <img id="three" src={clientSay3}/>
          <img id="four" src={clientSay4}/>
          <img id="five" src={clientSay5}/>
          <img id="six" src={clientSay6}/>
        
          <img
            alt=""
            loading="lazy"
            width="52"
            height="45"
            decoding="async"
            data-nimg="1"
            className="opacity-50 md:opacity-100
             absolute -mr-16 lg:mr-3 right-full
              top-1"
            src={quotation}
          />
          <img
            alt=""
            loading="lazy"
            width="52"
            height="45"
            decoding="async"
            data-nimg="1"
            className="opacity-50
             md:opacity-100 absolute -ml-16 
             lg:ml-3 left-full 
             top-1"
            src={quotation2}
          />

          <SwiperGlide
            handleSwiper={() => { }}
            slidesPerView={1}
            cards={[<ClientQuote />, <ClientQuote />, <ClientQuote />]}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
