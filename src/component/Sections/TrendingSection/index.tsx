import { useState } from "react";
import FilterDropMenu from "../../DropdownMenus/FilterDropMenu";
import FilterNav from "../../ChoicesList/FilterNav";

import ProductCard from "../../Cards/ProductCard";

import { useSelector } from "react-redux";
import { State } from "../../../interfaces";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ShowMoreSpanner from "../../Spanners/ShowMoreSpanner";

const TrendingSection = () => {
  const products = useSelector((state: State) => state.products.data);
  const [filterDropdownToggle, setFilterDropdownToggle] = useState(true);
  const [searchParams] = useSearchParams();
  return (
    <div className="relative py-32">
      <div className="flex flex-col relative mb-12">
        <div className="Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">
              What's trending now
            </h2>
            <span className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
              Discover the most trending products in Ciseco.
            </span>
          </div>
        </div>
        <FilterNav
          toggle={filterDropdownToggle}
          setToggle={() => setFilterDropdownToggle(!filterDropdownToggle)}
        />

        <div
          className={
            !filterDropdownToggle
              ? "transition-all duration-500 relative -top-4   opacity-0"
              : "opacity-100 top-0 transition-all duration-500 "
          }
        >
          <div className={!filterDropdownToggle ? "hidden" : "block "}>
            <FilterDropMenu />
          </div>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {searchParams.get("category")
          ? products
              .filter(
                (product) => product.category == searchParams.get("category")
              )
              .map((p) => <ProductCard productId={p._id} />)
              .slice(0, 8)
          : products
              .slice(0, 8)
              .map((product, key: number) => (
                <ProductCard key={key} productId={product._id} />
              ))}
      </div>
      <Link
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        to={"collection/?category=" + searchParams.get("category")}
      >
        <ShowMoreSpanner />
      </Link>
    </div>
  );
};

export default TrendingSection;
