import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartService from "../../../services/cart.service";
import { Product } from "../../../interfaces";

const ProductActions = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  return (
    // absolute bottom-0 group-hover:bottom-4 inset-x-1 flex justify-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all
    <>
      <button
        onClick={() => {
          CartService.addToCart(dispatch, {
            productId: product._id,
            quantity: 1,
            subtotal: product.price,
          });
        }}
        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-xs py-2 px-4  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
      >
        <svg className="w-3.5 h-3.5 mb-0.5" viewBox="0 0 9 9" fill="none">
          <path
            d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="ml-1">Add to bag</span>
      </button>
      <Link
        to={"/collection/" + product._id}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full  text-xs py-2 px-4   text-slate-700 dark:bg-slate-900 dark:text-slate-300  dark:hover:bg-slate-800 ml-1.5 bg-white hover:!bg-gray-100 hover:text-slate-900 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="w-3.5 h-3.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          ></path>
        </svg>
        <span className="ml-1">Quick view</span>
      </Link>
    </>
  );
};

export default ProductActions;
