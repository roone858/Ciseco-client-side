import ProductPrice from "../../Badges/ProductPrice";
import { CartItem, State } from "../../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import CartService from "../../../services/cart.service";
import { SpannerIcon } from "../../icons";

const CartCard = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch();
  const product = useSelector((state: State) =>
    state.products.data.find((product) => product._id == item.productId)
  );
  if (!product) return <SpannerIcon />;
  return (
    <div className="flex py-5 last:pb-0">
      <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
        <img
          alt="Rey Nylon Backpack"
          className="h-full w-full object-contain object-center"
          sizes="100vw"
          src={product?.image}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
        />
        <a className="absolute inset-0" href="/product-detail"></a>
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between ">
            <div>
              <h3 className="text-base font-medium ">
                <a href="/product-detail">{product?.title}</a>
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                <span className="uppercase">{item?.color}</span>
                <span className="mx-2 border-l border-slate-200 dark:border-slate-700 h-4"></span>
                <span>{item?.size}</span>
              </p>
            </div>
            <div className="mt-0.5">
              <ProductPrice price={item.subtotal} />
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500 dark:text-slate-400">
            Qty {item.quantity}
          </p>
          <div className="flex">
            <button
              type="button"
              onClick={() => {
                CartService.removeFromCart(dispatch, item.productId);
              }}
              className="font-medium text-sky-600 dark:text-primary-500 "
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
