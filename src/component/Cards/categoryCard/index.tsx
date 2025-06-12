
const CategoryCard = ({pattern ,image,title,count}:any) => {
  return (
    <div className="h-80 relative w-full aspect-w-12 aspect-h-11 hover:shadow-xl rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 group hover:nc-shadow-lg transition-shadow ">
      <div>
        <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
          <img
            alt=""
            loading="lazy"
            width="358"
            height="376"
         
            src={pattern}
          />
        </div>
        <div className="absolute inset-5 sm:inset-8 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden z-0 bg-indigo-50">
              <img
                alt=""
                loading="lazy"
                width="80"
                height="80"
                className="object-cover w-full h-full"
                src={image}
              />
            </div>
            <span className="text-xs text-slate-700 dark:text-neutral-300 font-medium">
             {count} products
            </span>
          </div>
          <div className="">
            <span className="block mb-2 text-sm text-slate-500 dark:text-slate-400">
              Manufacturar
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
          </div>
          <a
            className="flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors"
            href="/collection"
          >
            <span>See Collection</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4 ml-2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <a href="/collection"></a>
    </div>
  );
};

export default CategoryCard;
