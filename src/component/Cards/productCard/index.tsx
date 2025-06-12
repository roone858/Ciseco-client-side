import "./productCard.css";
import ProductSizes from "../../ChoicesList/ProductSizes";
// import ProductPatterns from "../../ChoicesList/productPatterns/ProductPatterns";
// import ProductColors from "../../ChoicesList/productColors/ProductColors";
import ProductActions from "../../ChoicesList/ProductActions";
import ProductPrice from "../../Badges/ProductPrice";
import { State } from "../../../interfaces";
import { SpannerIcon, StarIcon } from "../../icons";
import { Link } from "react-router-dom";
import { FavButton } from "../../Buttons/FavButton";
import { useSelector } from "react-redux";

const ProductCard = ({ productId }: { productId: string }) => {
  const product = useSelector((state: State) =>
    state.products.data.find((product) => product._id == productId)
  );
  if (!product) return <SpannerIcon />;
  return (
    <div className=" nc-ProductCard relative flex flex-col bg-transparent   ">
      <Link
        className="absolute inset-0"
        to={"/collection/" + product?._id}
      ></Link>
      <div className=" relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-1 group">
        <Link className="block" to={"/collection/" + product?._id}>
          <div className="flex aspect-w-11 aspect-h-12 h-72 relative ">
            <img
              alt="product"
              loading="lazy"
              className="object-cover w-full h-full drop-shadow-xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
              src={product?.image}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                color: "transparent",
              }}
            />
          </div>
        </Link>
        <FavButton productId={product?._id} />
        <div className="assets absolute bottom-0 inset-x-1 space-x-1.5 flex justify-center opacity-0 invisible group-hover:bottom-4 group-hover:opacity-100 group-hover:visible transition-all">
          {product.category == "clothing" ? (
            <ProductSizes />
          ) : (
            <ProductActions product={product} />
          )}
        </div>
      </div>
      <div className="space-y-4 px-2.5 pt-[1.5rem] pb-2.5">
        {/* {product.category == "sport" ? <ProductColors /> : <ProductPatterns />} */}
        <div className="h-16">
          <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
            {product?.title.length > 50
              ? product?.title.substring(0, 50) + "..."
              : product?.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 ">
            {product?.description.slice(0, 30) + "..."}
          </p>
        </div>
        <div className="flex justify-between items-end ">
          <ProductPrice price={product?.price} />
          <div className="flex items-center mb-0.5">
            <StarIcon />
            <span className="text-sm ml-1 text-slate-500 dark:text-slate-400">
              {4.9} (98 reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
