import { useDispatch, useSelector } from "react-redux";
import CollapsePlus from "../../component/Buttons/CollapsePlus";
import {
  MinusIcon,
  NationwideIcon,
  NewIcon,
  PlusIcon,
  RefundIcon,
  ReturnIcon,
  ShippingIcon,
  SpannerIcon,
  StarIcon,
} from "../../component/icons";
import { Product, State } from "../../interfaces";
import ReviewSection from "../../component/Sections/ReviewSection";
import SwiperWithHeader from "../../component/Sliders/SwiperWithHeader";
import ProductCard from "../../component/Cards/ProductCard";
import PromoTow from "../../component/Promos/promoTow/PromoTow";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NewBadge from "../../component/Badges/NewBadge";
import CartService from "../../services/cart.service";
import { FavButton } from "../../component/Buttons/FavButton";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ size: "", color: "", count: 1 });
  const productId = useParams().id;
  const products = useSelector((state: State) => state.products.data);
  const product = products.find(
    (product: Product) => productId && product._id == productId
  );

  useEffect(() => {
    setData({
      size: product?.sizes?.find((size) => size) || " ",
      color: product?.colors?.find((size) => size) || " ",
      count: 1,
    });
  }, [product?.colors, product?.sizes]);
  if (!product) return <SpannerIcon />;
  return (
    <div className="w-full p-10 mt-16">
      <div className="lg:flex">
        <div className="w-full lg:w-[55%] ">
          <div className="relative">
            <div className="aspect-w-16  aspect-h-16 relative">
              <img
                alt="product detail 1"
                className="w-full rounded-2xl object-cover"
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
            <div className="absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white dark:bg-slate-900 nc-shadow-lg rounded-full flex items-center justify-center  text-slate-900 dark:text-slate-300">
              <NewIcon />
              <span className="ml-1 leading-none">New in</span>
            </div>
            <FavButton productId={product?._id} />
          </div>
          <div className="grid grid-cols-2 gap-3 mt-3 sm:gap-6 sm:mt-6 xl:gap-8 xl:mt-8">
            <div className="aspect-w-11 xl:aspect-w-10 2xl:aspect-w-11 aspect-h-16 relative">
              <img
                alt="product detail 1"
                src={product?.images[1]}
                className="w-full rounded-2xl object-cover"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: " 100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div className="aspect-w-11 xl:aspect-w-10 2xl:aspect-w-11 aspect-h-16 relative">
              <img
                alt="product detail 1"
                loading="lazy"
                className="w-full rounded-2xl object-cover"
                src={product?.images[0]}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
          <div className="space-y-7 2xl:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {product?.title}
              </h2>
              <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
                <div className="">
                  <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold">
                    <span className="text-green-500 !leading-none">
                      ${product?.price}
                    </span>
                  </div>
                </div>
                <div className="h-7 border-l border-slate-300 dark:border-slate-700"></div>
                <div className="flex items-center">
                  <a
                    href="#reviews"
                    className="flex items-center text-sm font-medium"
                  >
                    <StarIcon />
                    <div className="ml-1.5 flex">
                      <span>4.9</span>
                      <span className="block mx-2">·</span>
                      <span className="text-slate-600 dark:text-slate-400 underline">
                        142 reviews
                      </span>
                    </div>
                  </a>
                  <span className="hidden sm:block mx-2.5">·</span>
                  <NewBadge />
                </div>
              </div>
            </div>
            <div className="">
              {product?.colors && (
                <div>
                  <label htmlFor="">
                    <span className="text-sm font-medium">
                      Color:
                      <span className="ml-1 font-semibold">
                        {product?.colors[0]?.toUpperCase() || "Orange"}
                      </span>
                    </span>
                  </label>
                </div>
              )}
            </div>
            <div className="">
              <div>
                <div className="flex justify-between font-medium text-sm">
                  <label htmlFor="">
                    <span className="">
                      Size:
                      <span className="ml-1 font-semibold">{data.size}</span>
                    </span>
                  </label>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="##"
                    className="text-sky-6000 hover:text-sky-500"
                  >
                    See sizing chart
                  </a>
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-3">
                  {product?.sizes
                    ? product?.sizes.map((size: string, index: number) =>
                        size ? (
                          <div
                            key={index}
                            onClick={() => setData({ ...data, size: size })}
                          >
                            {" "}
                            <AvailableSize
                              size={size}
                              active={size == data.size ? true : false}
                            />
                          </div>
                        ) : (
                          <UnavailableSize key={index} size={size} />
                        )
                      )
                    : ""}
                </div>
              </div>
            </div>
            <div className="flex space-x-3.5">
              <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
                <div className="nc-NcInputNumber flex items-center justify-between space-x-5 w-full">
                  <div className="nc-NcInputNumber__content flex items-center justify-between w-[104px] sm:w-28">
                    <button
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                      type="button"
                      onClick={() =>
                        setData({ ...data, count: data.count - 1 })
                      }
                    >
                      <MinusIcon />
                    </button>
                    <span className="select-none block flex-1 text-center leading-none">
                      {data.count}
                    </span>
                    <button
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                      type="button"
                      onClick={() =>
                        setData({ ...data, count: data.count + 1 })
                      }
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  productId &&
                    CartService.addToCart(dispatch, {
                      productId: productId,
                      quantity: data.count,
                      subtotal: product.price * data.count,
                    });
                }}
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  Buttonsky disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl flex-1 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-6000 dark:focus:ring-offset-0"
              >
                {" "}
                Add To Cart
              </button>
            </div>
            <hr className=" 2xl:!my-10 border-slate-200 dark:border-slate-700" />
            <div className="w-full rounded-2xl space-y-2.5">
              <CollapsePlus
                title="Description"
                Content={
                  <div className="pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6">
                    {product?.description}
                  </div>
                }
              />
              <CollapsePlus
                title="Fabric + Care"
                Content={
                  <div className="p-4 pt-3 pl-0  last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6">
                    <ul className="list-disc list-inside leading-7">
                      {product?.highlights ? (
                        product.highlights.map(
                          (item: string, index: number) => (
                            <li key={index}> {item}</li>
                          )
                        )
                      ) : (
                        <>
                          {" "}
                          <li>Made from a sheer Belgian power micromesh.</li>
                          <li>74% Polyamide (Nylon) 26% Elastane (Spandex)</li>
                          <li>Adjustable hook &amp; eye closure and straps</li>
                          <li>Hand wash in cold water, dry flat</li>
                        </>
                      )}
                    </ul>
                  </div>
                }
              />
              <CollapsePlus
                title="How it Fits"
                Content={
                  <div className="pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6">
                    Use this as a guide. Preference is a huge factor — if you're
                    near the top of a size range and/or prefer more coverage,
                    you may want to size up.
                  </div>
                }
              />
              <CollapsePlus
                title="FAQ"
                Content={
                  <div className="p-4 pt-3 pl-0 last:pb-0 text-slate-600 text-sm dark:text-slate-300 leading-6">
                    <ul className="list-disc list-inside leading-7">
                      <li>
                        All full-priced, unworn items, with tags attached and in
                        their original packaging are eligible for return or
                        exchange within 30 days of placing your order.
                      </li>
                      <li>
                        Please note, packs must be returned in full. We do not
                        accept partial returns of packs.
                      </li>
                      <li>
                        Want to know our full returns policies? Here you go.
                      </li>
                      <li>
                        Want more info about shipping, materials or care
                        instructions? Here!
                      </li>
                    </ul>
                  </div>
                }
              />
            </div>
            <div className="hidden xl:block">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                <div className="flex flex-col p-5 rounded-2xl bg-red-50 dark:bg-opacity-90">
                  <div>
                    <ShippingIcon />
                  </div>
                  <div className="mt-2.5">
                    <p className="font-semibold text-slate-900">
                      Free shipping
                    </p>
                    <p className="text-slate-500 mt-0.5 text-sm">
                      On orders over $50.00
                    </p>
                  </div>
                </div>
                <div className="flex flex-col p-5 rounded-2xl bg-sky-50 dark:bg-opacity-90">
                  <div>
                    <ReturnIcon />
                  </div>
                  <div className="mt-2.5">
                    <p className="font-semibold text-slate-900">
                      Very easy to return
                    </p>
                    <p className="text-slate-500 mt-0.5 text-sm">
                      Just phone number.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col p-5 rounded-2xl bg-green-50 dark:bg-opacity-90">
                  <div>
                    <NationwideIcon />
                  </div>
                  <div className="mt-2.5">
                    <p className="font-semibold text-slate-900">
                      Nationwide Delivery
                    </p>
                    <p className="text-slate-500 mt-0.5 text-sm">
                      Fast delivery nationwide.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col p-5 rounded-2xl bg-amber-50 dark:bg-opacity-90">
                  <div>
                    <RefundIcon />
                  </div>
                  <div className="mt-2.5">
                    <p className="font-semibold text-slate-900">
                      Refunds policy
                    </p>
                    <p className="text-slate-500 mt-0.5 text-sm">
                      60 days return for any reason
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 space-y-10 sm:space-y-16">
        <DetailsComponent
          description={product?.description}
          highlights={product?.highlights}
        />
        <hr className="border-slate-200 dark:border-slate-700" />
        <ReviewSection productId={product._id} />
        <hr className="border-slate-200 dark:border-slate-700" />
        <SwiperWithHeader
          title="Customers also purchased"
          subTitle=""
          slidesPerView={4}
          cards={products?.slice(0, 5).map((product: Product) => (
            <ProductCard productId={product._id} />
          ))}
        />
        <hr className="border" />
        <PromoTow />
      </div>
    </div>
  );
};

export default ProductDetails;

export const DetailsComponent = ({
  description,
  highlights,
}: {
  description?: string;
  highlights?: string[];
}) => {
  return (
    <div className="">
      <h2 className="text-2xl font-semibold">Product Details</h2>
      <div className="prose prose-sm sm:prose text-slate-700 sm:max-w-4xl mt-7">
        <p>
          {description
            ? description
            : "The patented eighteen-inch hardwood Arrowhead deck --- finely mortised in, makes this the strongest and most rigid canoe ever built. You cannot buy a canoe that will afford greater satisfaction."}
        </p>
        <p className="my-4">
          The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
          1922. Wickett had previously worked for the Old Town Canoe Co from
          1900 to 1914. Manufacturing of the classic wooden canoes in Valley
          Park, Missouri ceased in 1978.
        </p>
        <ul className="list-disc list-inside leading-7 pl-7 mt-5 ">
          {highlights ? (
            highlights?.map((item: string, index: number) => (
              <li key={index}> {item}</li>
            ))
          ) : (
            <>
              <li>Regular fit, mid-weight t-shirt</li>
              <li>Natural color, 100% premium combed organic cotton</li>
              <li>
                Quality cotton grown without the use of herbicides or pesticides
                - GOTS certified
              </li>
              <li>Soft touch water based printed in the USA</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export const AvailableSize = ({
  size,
  active,
}: {
  size: string;
  active: boolean;
}) => {
  const unActiveClass =
    "relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 cursor-pointer border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700";
  const activeClass =
    "relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 cursor-pointer bg-sky-600 border-sky-600 text-white hover:bg-sky-600";
  return <div className={active ? activeClass : unActiveClass}>{size}</div>;
};

export const UnavailableSize = ({ size }: { size: string }) => {
  return (
    <div
      className="relative h-10 sm:h-11 rounded-2xl border flex items-center justify-center 
text-sm sm:text-base uppercase font-semibold select-none overflow-hidden z-0 text-opacity-20 dark:text-opacity-20 cursor-not-allowed border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
    >
      {size}
    </div>
  );
};
