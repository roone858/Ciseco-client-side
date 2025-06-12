import OrderItem from "../../items/OrderItem";

const OrderSection = () => {
  return (
    <div>
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">Order History</h2>
        <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden z-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-500/5">
            <div>
              <p className="text-lg font-semibold">#WU3746HGG12</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
                <span>Aug 8, 2023</span>
                <span className="mx-2">·</span>
                <span className="text-primary-500">Delivered</span>
              </p>
            </div>
            <div className="mt-3 sm:mt-0">
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm font-medium py-2.5 px-4 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800  border border-slate-300 dark:border-slate-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                View Order
              </button>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 p-2 sm:p-8 divide-y divide-y-slate-200 dark:divide-slate-700">
            {/* Repeat this block for each item in the order */}
            <OrderItem />
            {/* End of item block */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
