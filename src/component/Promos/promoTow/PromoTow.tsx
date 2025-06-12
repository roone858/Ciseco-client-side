import logo from "../../../assets/logo.svg";
import promo2 from "../../../assets/promo2.webp";
import moon from "../../../assets/Moon.svg";
const PromoTow = () => {
  return (
    <div className="nc-SectionPromo2 lg:pt-10">
      <div className="relative flex flex-col lg:flex-row lg:justify-end bg-yellow-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
        <div className="absolute inset-0">
          <img
            alt="backgroundLineSvg"
            loading="lazy"
            decoding="async"
            
            className="absolute w-full h-full object-contain dark:opacity-5"
            src={moon}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
          />
        </div>
        <div className="lg:w-[45%] max-w-lg relative">
          <a className=" inline-block text-slate-600 w-28" href="/">
            <img
              alt="Logo"
              width="162"
              height="46"
           
              className="block h-8 sm:h-10 w-auto dark:hidden"
              src={logo}
            />
          </a>
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.13] tracking-tight">
            Special offer <br />
            in kids products
          </h2>
          <span className="block mt-6 text-slate-500 dark:text-slate-400">
            Fashion is a form of self-expression and autonomy at a particular
            period and place.
          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <a
              className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6   disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50 shadow-xl dark:bg-slate-200 dark:text-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
              href="/search"
            >
              Discover more
            </a>
          </div>
        </div>
        <div className="relative block lg:absolute lg:left-0 lg:bottom-0 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(55%-40px)]">
          <img
            alt=""
            loading="lazy"
            width="851"
            height="852"
            sizes="(max-width: 768px) 100vw, 50vw"
            src={promo2}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoTow;
