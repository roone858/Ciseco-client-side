const DepartmentCard = ({
  image,
  title,
  count,
  bgColor,
}: {
  image: string;
  title: string;
  bgColor: string;
  count: number;
}) => {
  return (
    <a className="relative h-80" href="/collection">
      <div
        className={
          "flex-1 relative   rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1 " +
          bgColor
        }
      >
        <div className="">
          <div className="w-full h-full flex justify-start items-end">
            <img alt="" className="object-contain   rounded-2xl" src={image} />
          </div>
        </div>
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity rounded-2xl"></span>
      </div>
      <div className="mt-5 flex-1 text-center">
        <h2 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
          {title}
        </h2>
        <span className="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
          {count}+ categories
        </span>
      </div>
    </a>
  );
};

export default DepartmentCard;


