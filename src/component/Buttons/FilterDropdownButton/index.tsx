import { useState } from "react";
import { BelowArrowIcon } from "../../icons";
import DropdownProvider from "../../Providers/DropdownProvider";
import CategoryDropMenu from "../../DropdownMenus/CategoryDropMenu";

const DropdownButton = ({
  icon,
  title,list
}: {
  icon: JSX.Element;
  title: string;
  list: string[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownProvider setOpen={setOpen}>
      <div className=" duration-300 ">
        <button
          onClick={() => setOpen(!open)}
          tabIndex={0}
          className="flex items-center  focus:border-sky-400 focus:ring-0 justify-center px-4 py-2 text-sm rounded-full border focus:outline-none select-none  !border-primary-500 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500"
          style={{
            borderColor: !open ? "rgb(212 212 212)" : "rgb(56 189 248)",
          }}
        >
          {icon}
          <span className="ml-2">{title}</span>
          <BelowArrowIcon />
        </button>

        <div
          style={{ display: open ? "block" : "none" }}
          className="absolute z-40 w-screen max-w-sm px-4 mt-3 left-0 sm:px-0 lg:max-w-md opacity-100 translate-y-0"
        >
          <CategoryDropMenu category={title} list={list} />
        </div>
      </div>
    </DropdownProvider>
  );
};

export default DropdownButton;
