import React from "react";

const OrderItem = () => {
  return (
    <div>
      <div className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
        <div className="relative h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            alt="Rey Nylon Backpack"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="h-full w-full object-cover object-center"
            sizes="100px"
            src="https://f.nooncdn.com/p/pzsku/Z203C4A559EFDE3003FAFZ/45/_/1692268847/5f0eb8a8-d50f-422c-b36c-d3b5c05b429c.jpg?format=avif&width=800"
          />
        </div>
        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium line-clamp-1">
                  Rey Nylon Backpack
                </h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>Natural</span>
                  <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                  <span>XL</span>
                </p>
              </div>
              <div className="mt-0.5 ml-2">
                <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                  <span className="text-green-500 !leading-none">$33</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400 flex items-center">
              <span className="hidden sm:inline-block">Qty</span>
              <span className="inline-block sm:hidden">x</span>
              <span className="ml-2">1</span>
            </p>
            <div className="flex">
              <button
                type="button"
                className="font-medium text-indigo-600 dark:text-primary-500 "
              >
                Leave review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
