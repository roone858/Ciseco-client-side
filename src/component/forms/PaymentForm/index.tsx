import { useState } from "react";

const PaymentMethodForm = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl">
      <div className="p-6 flex flex-col sm:flex-row items-start">
        <span className="hidden sm:block">
          <svg
            className="w-6 h-6 text-slate-700 dark:text-slate-400 mt-0.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.92969 15.8792L15.8797 3.9292"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M11.1013 18.2791L12.3013 17.0791"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.793 15.5887L16.183 13.1987"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2 21.9985H22"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
        <div className="sm:ml-8">
          <h3 className=" text-slate-700 dark:text-slate-400 flex ">
            <span className="uppercase tracking-tight">PAYMENT METHOD</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="w-5 h-5 ml-3 text-slate-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              ></path>
            </svg>
          </h3>
          <div className="font-semibold mt-1 text-sm">
            <span className="">Google / Apple Wallet</span>
            <span className="ml-3">xxx-xxx-xx55</span>
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
        <div>
          <div className="flex items-start space-x-4 sm:space-x-6">
            <div className="flex items-center text-sm sm:text-base pt-3.5">
              <input
                id="Credit-Card"
                type="radio"
                onChange={handleChange}
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                name="payment-method"
                value="Credit-Card"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="Credit-Card"
                className="flex items-center space-x-4 sm:space-x-6"
              >
                <div className="p-2.5 rounded-xl border-2 border-slate-600 dark:border-slate-300">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 12.6101H19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M5.25 17.8101H6.96997"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.10986 17.8101H12.5499"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="font-medium">Debit / Credit Card</p>
              </label>
              <div
                className={`mt-6 mb-4 space-y-3 sm:space-y-5 ${
                  data["payment-method"] == "Credit-Card" ? "block" : "hidden"
                } `}
              >
                <div className="max-w-lg">
                  <label
                    className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
                    data-nc-id="Label"
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    className="block w-full border-neutral-200 focus:border-primary-300 border focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                    autoComplete="off"
                  />
                </div>
                <div className="max-w-lg">
                  <label
                    className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
                    data-nc-id="Label"
                  >
                    Name on Card
                  </label>
                  <input
                    type="text"
                    className="block w-full border-neutral-200 focus:border-primary-300 border focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <div className="sm:w-2/3">
                    <label
                      className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
                      data-nc-id="Label"
                    >
                      Expiration date (MM/YY)
                    </label>
                    <input
                      type="text"
                      className="block w-full border-neutral-200 focus:border-primary-300 border focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      autoComplete="off"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200 text-sm"
                      data-nc-id="Label"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      className="block w-full border-neutral-200 focus:border-primary-300 border focus:outline-none focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      autoComplete="off"
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start space-x-4 sm:space-x-6">
            <div className="flex items-center text-sm sm:text-base pt-3.5">
              <input
                id="Internet-banking"
                type="radio"
                onChange={handleChange}
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                name="payment-method"
                value="Internet-banking"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="Internet-banking"
                className="flex items-center space-x-4 sm:space-x-6"
              >
                <div className="p-2.5 rounded-xl border-2 border-gray-200 dark:border-slate-600">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15 3C16.95 8.84 16.95 15.16 15 21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p className="font-medium">Internet banking</p>
              </label>
              <div
                className={`mt-6 mb-4 ${
                  data["payment-method"] == "Internet-banking"
                    ? "block"
                    : "hidden"
                } `}
              >
                <p className="text-sm dark:text-slate-300">
                  Your order will be delivered to you after you transfer to:
                </p>
                <ul className="mt-3.5 text-sm text-slate-500 dark:text-slate-400 space-y-2">
                  <li>
                    <h3 className="text-base text-slate-800 dark:text-slate-200 font-semibold mb-1">
                      ChisNghiax
                    </h3>
                  </li>
                  <li>
                    <span className="text-slate-900 dark:text-slate-200 font-medium">
                      Bank name: Example Bank Name
                    </span>
                  </li>
                  <li>
                    <span className="text-slate-900 dark:text-slate-200 font-medium">
                      Account number: 555 888 777
                    </span>
                  </li>
                  <li>
                    <span className="text-slate-900 dark:text-slate-200 font-medium">
                      Sort code: 999
                    </span>
                  </li>
                  <li>
                    <span className="text-slate-900 dark:text-slate-200 font-medium">
                      IBAN: IBAN
                    </span>
                  </li>
                  <li>
                    <span className="text-slate-900 dark:text-slate-200 font-medium">
                      BIC: BIC/Swift
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-start space-x-4 sm:space-x-6">
              <div className="flex items-center text-sm sm:text-base pt-3.5">
                <input
                  id="Wallet"
                  type="radio"
                  onChange={handleChange}
                  className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                  name="payment-method"
                  value="Wallet"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="Wallet"
                  className="flex items-center space-x-4 sm:space-x-6 "
                >
                  <div className="p-2.5 rounded-xl border-2 border-slate-600 dark:border-slate-300">
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M7 12H14"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="font-medium">Google / Apple Wallet</p>
                </label>
                <div className="mt-6 mb-4 space-y-6 block">
                  <div className="text-sm prose dark:prose-invert">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque dolore quod quas fugit perspiciatis architecto,
                      temporibus quos ducimus libero explicabo?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodForm;
