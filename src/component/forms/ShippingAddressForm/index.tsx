import { useState } from "react";

const ShippingAddressForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl my-8">
      <div className="p-6 flex flex-col sm:flex-row items-start">
        <span className="hidden sm:block">
          <svg
            className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <div className="sm:ml-8">
          <h3 className="text-slate-700 dark:text-slate-300 flex">
            <span className="uppercase">SHIPPING ADDRESS</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-5 h-5 ml-3 text-slate-900 dark:text-slate-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </h3>
          <div className="font-semibold mt-1 text-sm">
            <span className="">
              St. Paul's Road, Norris, SD 57560, Dakota, USA
            </span>
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
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
          <div>
            <label
              className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
              data-nc-id="Label"
            >
              First name
            </label>
            <input
              type="text"
              className="block w-full border-neutral-200 border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              value="Cole"
            />
          </div>
          <div>
            <label
              className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
              data-nc-id="Label"
            >
              Last name
            </label>
            <input
              type="text"
              className="block w-full border-neutral-200 border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              value="Enrico"
            />
          </div>
        </div>
        <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-3">
          <div className="flex-1">
            <label
              className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
              data-nc-id="Label"
            >
              Address
            </label>
            <input
              type="text"
              className="block w-full border-neutral-200 border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              placeholder=""
              value="123, Dream Avenue, USA"
            />
          </div>
          <div className="sm:w-1/3">
            <label
              className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
              data-nc-id="Label"
            >
              Apt, Suite *
            </label>
            <input
              type="text"
              className="block w-full border-neutral-200 border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              value="55U - DD5"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
          <div>
            <label
              className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
              data-nc-id="Label"
            >
              City
            </label>
            <input
              type="text"
              className="block w-full border-neutral-200 border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              value="Norris"
            />
          </div>
          <div>
            <label
              className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
              data-nc-id="Label"
            >
              Country
            </label>
            <select className="nc-Select border h-11 mt-1.5 block w-full text-sm rounded-2xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900">
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
              <option value="Israel">Israel</option>
              <option value="France">France</option>
              <option value="England">England</option>
              <option value="Laos">Laos</option>
              <option value="China">China</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
          <div>
            <label
              className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
              data-nc-id="Label"
            >
              State/Province
            </label>
            <input
              type="text"
              className="block w-full border-neutral-200 border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              value="Texas"
            />
          </div>
          <div>
            <label
              className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
              data-nc-id="Label"
            >
              Postal code
            </label>
            <input
              type="text"
              className="block w-full border-neutral-200 border focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
              value="2500"
            />
          </div>
        </div>
        <div>
          <label
            className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
            data-nc-id="Label"
          >
            Address type
          </label>
          <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="flex items-center text-sm sm:text-base ">
              <input
                id="Address-type-home"
                type="radio"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                name="Address-type"
                value="Address-type-home"
              />
              <label
                htmlFor="Address-type-home"
                className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none"
              >
                <span className="text-sm font-medium">
                  Home <span className="font-light">(All Day Delivery)</span>
                </span>
              </label>
            </div>
            <div className="flex items-center text-sm sm:text-base ">
              <input
                id="Address-type-office"
                type="radio"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                name="Address-type"
                value="Address-type-office"
              />
              <label
                htmlFor="Address-type-office"
                className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none"
              >
                <span className="text-sm font-medium">
                  Office{" "}
                  <span className="font-light">
                    (Delivery <span className="font-medium">9 AM - 5 PM</span>)
                  </span>{" "}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row pt-6">
          <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl sm:!px-7 shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
            Save and next to Payment
          </button>
          <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 mt-3 sm:mt-0 sm:ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressForm;
