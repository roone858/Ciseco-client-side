import  { useState } from "react";
import DropdownProvider from "../../Providers/DropdownProvider";

const NavDropdown = ({ icon, list }: any) => {
     const [open,setOpen]=useState(false)
  return (
    <DropdownProvider setOpen={setOpen}>
      <button
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none flex items-center justify-center"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded="false"
      >
        {icon}
      </button>
      <div
        style={{ opacity: open ? "1" : "0" }}
        className="duration-600 transition-all  absolute z-10 w-screen max-w-xs sm:max-w-md px-4 mt-3.5 -right-28 sm:right-0 sm:px-0  translate-y-0"
      >
        <div
          className="  duration-600 transition-all "
          style={{ display: open ? "block" : "none" }}
        >
          {list}
        </div>
      </div>
    </DropdownProvider>
  );
};

export default NavDropdown;
