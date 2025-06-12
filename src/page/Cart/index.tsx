import { useSelector } from "react-redux";
import CartCard from "../../component/Cards/CartCard";
import { State } from "../../interfaces";
import OrderSummaryCard from "../../component/Cards/OrderSummaryCard";

const Cart = () => {
  const cartProducts = useSelector((state: State) => state.cart.items);
  return (
    <div className="px-12 py-32">
      <div className="mb-12 sm:mb-16">
        <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
          Shopping Cart
        </h2>
        <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
          <a className="" href="/">
            Homepage
          </a>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <a className="" href="/collection">
            Clothing Categories
          </a>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <span className="underline">Shopping Cart</span>
        </div>
      </div>
      <hr className="border-slate-200 dark:border-slate-700 my-10 xl:my-12"></hr>
      <div className="flex ">
        <div className="w-full lg:w-[60%] xl:w-[55%] divide-y divide-slate-200 dark:divide-slate-700 ">
          {cartProducts.map((product, key) => (
            <CartCard key={key} item={product} />
          ))}
        </div>
        <div className="border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20 flex-shrink-0"></div>
        <div className="flex-1">
          <OrderSummaryCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
