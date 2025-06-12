import { Outlet } from "react-router-dom";
import AccountPageNav from "../../component/ChoicesList/AccountPageNav";

const AccountPage = () => {
  return (
    <div className="nc-AccountCommonLayout px-10 pt-20">
      <div className="mt-14 sm:mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl xl:text-4xl font-semibold">Account</h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-base sm:text-lg">
              <span className="text-slate-900 dark:text-slate-200 font-semibold">
                Enrico Cole,
              </span>{" "}
              ciseco@gmail.com · Los Angeles, CA
            </span>
          </div>
          <hr className="mt-10 border-slate-200 dark:border-slate-700" />
          <AccountPageNav />
          <hr className="border-slate-200 dark:border-slate-700" />
        </div>
      </div>
      <div className="max-w-4xl mx-auto pt-14 sm:pt-26 pb-24 lg:pb-32">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;
