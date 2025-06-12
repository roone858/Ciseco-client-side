import "./discoverCard.css";
const DiscoverCard = ({ color, image }: { color: string; image: string }) => {
  return (
    <div className="me-3 ">
      <a className="block  relative  " href="/collection">
        <div
          style={{ backgroundColor: color }}
          className="relative  h-60 w-full aspect-w-16 aspect-h-11 sm:aspect-h-9 rounded-2xl overflow-hidden group b"
        >
          <div>
            <div className="absolute inset-5 sm:inset-8">
              <img
                alt=""
                loading="lazy"
                className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl"
                src={image}
              />
            </div>
          </div>
          <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>
          <div>
            <div className="absolute inset-5 sm:inset-8 flex flex-col">
              <div className="max-w-xs">
                <span className="block mb-2 text-sm text-slate-700">
                  Explore new arrivals
                </span>
                <h2 className="text-xl md:text-2xl text-slate-900 font-semibold">
                  Shop the latest <br /> from top brands
                </h2>
              </div>
              <div className="mt-auto">
                <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 nc-shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                  Show me all
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DiscoverCard;
