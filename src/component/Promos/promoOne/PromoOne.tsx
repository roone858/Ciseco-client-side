import logo from "../../../assets/logo.svg";
import image from "../../../assets/promo-one.webp";

const PromoOne = () => {
  return (
    <div className="mt-28   relative flex flex-col lg:flex-row items-center ">
      <div className="relative flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        <a className="ttnc-logo inline-block text-slate-600 w-28" href="/">
          <img
            alt="Logo"
            width="162"
            height="46"
            className="block h-8 sm:h-10 w-auto dark:hidden"
            src={logo}
          />
        </a>
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.2] tracking-tight">
          Earn free money <br /> with Ciseco
        </h2>
        <span className="block mt-6 text-slate-500 dark:text-slate-400 ">
          With Ciseco you will get freeship &amp; savings combo...
        </span>
        <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
          <a
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
            href="/collection"
          >
            Savings combo
          </a>
          <a
            className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
            href="/search"
          >
            Discover more
          </a>
        </div>
      </div>
      <div className="relative flex-1 max-w-xl lg:max-w-none">
        <div className="">
          <img
            alt=""
            loading="lazy"
            width="1062"
            height="754"
            decoding="async"
            data-nimg="1"
            className=""
            sizes="(max-width: 768px) 100vw, 50vw"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoOne;
