import moon from "../../../assets/Moon.svg";
import promo from "../../../assets/promo3.webp";
const PromoThree = () => {
  return (
    <div className="SectionPromo3 mt-28 lg:pt-10">
      <div className="relative flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
        <div className="absolute inset-0">
          <img
            alt="backgroundLineSvg"
            className="absolute w-full h-full object-contain object-bottom dark:opacity-5"
            src={moon}
          />
        </div>
        <div className="lg:w-[50%] max-w-lg relative">
          <h2 className="font-semibold text-4xl md:text-5xl">
            Don't miss out on special offers
          </h2>
          <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Register to receive news about the latest, savings combos, discount
            codes...
          </span>
          <ul className="space-y-4 mt-10">
            <li className="flex items-center space-x-4">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-purple-800 bg-purple-100  relative">
                01
              </span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                Savings combos
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-blue-800 bg-blue-100  relative">
                02
              </span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                Freeship
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-red-800 bg-red-100  relative">
                03
              </span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                Premium magazines
              </span>
            </li>
          </ul>
          <form className="mt-10 relative max-w-sm">
            <input
              className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-full text-sm font-normal h-11 px-4 py-3 "
              required={true}
              aria-required="true"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className=" flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-slate-900 hover:bg-slate-800 
        text-slate-50 absolute transform top-1/2 -translate-y-1/2 right-1  w-9 h-9  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </form>
        </div>
        <div className="relative block lg:absolute lg:right-0 lg:bottom-0 mt-10 lg:mt-0 max-w-lg lg:max-w-[calc(50%-40px)]">
          <img
            alt=""
            loading="lazy"
            width="751"
            height="824"
            sizes="(max-width: 768px) 100vw, 50vw"
            src={promo}
          />
        </div>
      </div>
    </div>
  );
};

export default PromoThree;
