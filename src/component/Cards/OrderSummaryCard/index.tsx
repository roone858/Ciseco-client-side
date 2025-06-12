import { useSelector } from "react-redux";
import { State } from "../../../interfaces";
import { useState } from "react";

const OrderSummaryCard = () => {
  const [shipping, setShipping] = useState(5);
  const [tax, setTax] = useState(24);
  const total = useSelector((state: State) => state.cart.total);

  return (
    <div>
      <div className="sticky top-28">
        <h3 className="text-lg font-semibold ">Order Summary</h3>
        <div className="mt-7 text-sm text-slate-500 dark:text-slate-400 divide-y divide-slate-200/70 dark:divide-slate-700/80">
          <div className="flex justify-between pb-4">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              {total}
            </span>
          </div>
          <div className="flex justify-between py-4">
            <span>Shpping estimate</span>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              ${shipping}
            </span>
          </div>
          <div className="flex justify-between py-4">
            <span>Tax estimate</span>
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              ${tax}
            </span>
          </div>
          <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-200 text-base pt-4">
            <span>Order total</span>
            <span>${total + tax + shipping}</span>
          </div>
        </div>
        <a
          className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl mt-8 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 "
          href="/checkout"
        >
          Checkout
        </a>
        <div className="mt-5 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center">
          <p className="block relative pl-5">
            <svg
              className="w-4 h-4 absolute -left-1 top-0.5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 8V13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M11.9945 16H12.0035"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Learn more{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="##"
              className="text-slate-900 dark:text-slate-200 underline font-medium"
            >
              Taxes
            </a>
            <span> and </span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="##"
              className="text-slate-900 dark:text-slate-200 underline font-medium"
            >
              Shipping
            </a>{" "}
            infomation
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
