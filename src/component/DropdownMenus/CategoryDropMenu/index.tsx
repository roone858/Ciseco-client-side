import { useSearchParams } from "react-router-dom";

const CategoryDropMenu = ({ category, list }: any) => {
  return (
    <div className="overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
      <div className="relative flex flex-col px-5 py-6 space-y-5">
        <div className="flex text-sm sm:text-base ">
          <input
            id="All Categories"
            className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
            type="checkbox"
            name="All Categories"
          />
          <label
            htmlFor="All Categories"
            className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
          >
            <span className="text-slate-900 dark:text-slate-100  ">
              All Categories
            </span>
          </label>
        </div>
        <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
        {list.map((item: string, key: number) => (
          <CheckBox key={key} category={category} value={item} />
        ))}
      </div>
      <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
        <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonThird text-neutral-700 border border-neutral-200 dark:text-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
          Clear
        </button>
        <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-2 sm:px-5  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
          Apply
        </button>
      </div>
    </div>
  );
};

export default CategoryDropMenu;

export const CheckBox = ({
  value,
  category,
}: {
  value: string;
  category: string;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleInputChange = (e: any) => {
    e.target.checked
      ? searchParams.append(category.toLowerCase(), value.toLowerCase())
      : searchParams.delete(category.toLowerCase(), value.toLowerCase());

    setSearchParams(searchParams);
  };

  return (
    <div className="flex text-sm sm:text-base ">
      <input
        className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
        type="checkbox"
        name="Laptop Sleeves"
        onChange={handleInputChange}
      />
      <label className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none">
        <span className="text-slate-900 dark:text-slate-100  ">{value}</span>
      </label>
    </div>
  );
};
