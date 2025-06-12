import { useSelector } from "react-redux";
import FilterDropMenu from "../../component/DropdownMenus/FilterDropMenu";
import { State } from "../../interfaces";
import { useLocation } from "react-router-dom";
import CollectionsSections from "../../component/Sections/CollectionsSection";
import PromoOne from "../../component/Promos/promoOne/PromoOne";
import PaginatedItems from "../../component/Pagination";

const CollectionPage = () => {
  const products = useSelector((state: State) => state.products.data);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category");
  const filterProducts = category
    ? products.filter((product) => product.category == category)
    : products;

  return (
    <div className="my-28 px-12">
      <div className="max-w-screen-sm">
        <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
          {category ? (
            <>
              <span className="capitalize">{category}</span> collection
            </>
          ) : (
            "All collection"
          )}
        </h2>
        <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </span>
      </div>
      <FilterDropMenu />
      <PaginatedItems itemsPerPage={8} items={filterProducts} />
      <div className="flex justify-center items-center"></div>
      <hr className="border-slate-200 dark:border-slate-700"></hr>
      <CollectionsSections />
      <hr className="border-slate-200 dark:border-slate-700"></hr>
      <PromoOne />
    </div>
  );
};

export default CollectionPage;
