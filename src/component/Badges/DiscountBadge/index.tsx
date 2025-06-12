import { DiscountIcon } from "../../icons";

const DiscountBadge = () => {
  return (
    <div className="nc-shadow-lg rounded-full flex items-center justify-center absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
      <DiscountIcon />
      <span className="ml-1 leading-none">50% Discount</span>
    </div>
  );
};

export default DiscountBadge;