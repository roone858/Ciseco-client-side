import { useState } from "react";
import {
  BelowArrowIcon,
  FilterIcon,
  TopArrowIcon,
} from "../../icons";
import { useSearchParams } from "react-router-dom";

const FilterNav = ({ setToggle, toggle }: any) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active,setActive] =useState("")
  const handleClick = (e: any) => {
    searchParams.set("category", e.target.name.toLowerCase());
    setSearchParams(searchParams);
    setActive(e.target.name.toLowerCase())
  };
  const disActiveClass =
    "block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:bg-slate-900 focus:text-slate-100  focus:outline-none text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 ";
  const activeClass ="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900  focus:outline-none";

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0 lg:space-x-2 ">
      <nav className=" relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar">
        <ul className="flex  sm:space-x-2">
          <li className="relative">
            <button  className={active == "" ? activeClass : disActiveClass  } onClick={handleClick}>
              All items
            </button>
          </li>
          <li className="relative">
            <button name="women" className={active == "women" ? activeClass : disActiveClass  }  onClick={handleClick}>
              Women
            </button>
          </li>
          <li className="relative">
            <button name="men" className={active == "men" ? activeClass : disActiveClass  }  onClick={handleClick}>
              Mans
            </button>
          </li>
          <li className="relative">
            <button name="kids" className={active == "kids" ? activeClass : disActiveClass  }  onClick={handleClick}>
              Kids
            </button>
          </li>
          <li className="relative">
            <button name="jewels" className={active == "jewels" ? activeClass : disActiveClass  }  onClick={handleClick}>
              jewels
            </button>
          </li>
        </ul>
      </nav>
      <span className="block flex-shrink-0">
        <button
          onClick={setToggle}
          className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium pl-4 py-2.5 sm:pl-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl w-full !pr-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
        >
          <FilterIcon />
          <span className="block truncate ml-2.5">Filter</span>
          <span className="absolute top-1/2 -translate-y-1/2 right-5">
            {toggle ? <TopArrowIcon /> : <BelowArrowIcon />}
          </span>
        </button>
      </span>
    </div>
  );
};

export default FilterNav;
