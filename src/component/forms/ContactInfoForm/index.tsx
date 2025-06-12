import { useState } from "react";

const ContactInfoForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden z-0">
      <div className="flex flex-col sm:flex-row items-start p-6 ">
        <span className="hidden sm:block">
          <svg
            className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <div className="sm:ml-8">
          <h3 className=" text-slate-700 dark:text-slate-300 flex ">
            <span className="uppercase tracking-tight">CONTACT INFO</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              ></path>
            </svg>
          </h3>
          <div className="font-semibold mt-1 text-sm">
            <span className="">Enrico Smith</span>
            <span className="ml-3 tracking-tighter">+855 - 666 - 7744</span>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="py-2 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 mt-5 sm:mt-0 sm:ml-auto text-sm font-medium rounded-lg"
        >
          Change
        </button>
      </div>
      <div
        className={`border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6  ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between flex-wrap items-baseline">
          <h3 className="text-lg font-semibold">Contact information</h3>
          <span className="block text-sm my-1 md:my-0">
            Do not have an account?{" "}
            <a href="##" className="text-blue-500 font-medium">
              Log in
            </a>
          </span>
        </div>
        <div className="max-w-lg">
          <label
            className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
            data-nc-id="Label"
          >
            Your phone number
          </label>
          <input
            type="tel"
            className="block w-full border focus:outline-none border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white   disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
            value="+808 xxx"
          />
        </div>
        <div className="max-w-lg">
          <label
            className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
            data-nc-id="Label"
          >
            Email address
          </label>
          <input
            type="email"
            className="block w-full border focus:outline-none border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white   disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
          />
        </div>
        <div>
          <div className="flex text-sm sm:text-base !text-sm">
            <input
              id="uudai"
              type="checkbox"
              className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
              name="uudai"
            />
            <label
              htmlFor="uudai"
              className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
            >
              <span className="text-slate-900 dark:text-slate-100  ">
                Email me news and offers
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row pt-6">
          <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl sm:!px-7 shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
            Save and next to Shipping
          </button>
          <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 mt-3 sm:mt-0 sm:ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
