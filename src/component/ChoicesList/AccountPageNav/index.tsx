import { Link } from "react-router-dom";

const AccountPageNav = () => {
  return (
    <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
      <Link
        className="block py-5 md:py-8 border-b-2 flex-shrink-0 text-sm sm:text-base border-transparent text-slate-500  hover:text-slate-800 dark:hover:text-slate-200  focus:border-sky-500 focus:font-medium focus:text-slate-900 dark:text-slate-200"
        to="/account"
      >
        Account info
      </Link>
      <Link
        className="block py-5 md:py-8 border-b-2 flex-shrink-0 text-sm sm:text-base border-transparent text-slate-500  hover:text-slate-800 dark:hover:text-slate-200  focus:border-sky-500 focus:font-medium focus:text-slate-900 dark:text-slate-200"
        to="/account/savelist"
      >
        Save lists
      </Link>
      <Link
        className="block py-5 md:py-8 border-b-2 flex-shrink-0 text-sm sm:text-base border-transparent text-slate-500  hover:text-slate-800 dark:hover:text-slate-200  focus:border-sky-500 focus:font-medium focus:text-slate-900 dark:text-slate-200"
        to="/account/order"
      >
        My order
      </Link>
      <Link
        className="block py-5 md:py-8 border-b-2 flex-shrink-0 text-sm sm:text-base border-transparent text-slate-500  hover:text-slate-800 dark:hover:text-slate-200  focus:border-sky-500 focus:font-medium focus:text-slate-900 dark:text-slate-200"
        to="/account/password"
      >
        Change password
      </Link>
      <Link
        className="block py-5 md:py-8 border-b-2 flex-shrink-0 text-sm sm:text-base border-transparent text-slate-500  hover:text-slate-800 dark:hover:text-slate-200 focus:border-sky-500 focus:font-medium focus:text-slate-900 dark:text-slate-200"
        to="/account/billing"
      >
        Change Billing
      </Link>
    </div>
  );
};

export default AccountPageNav;
