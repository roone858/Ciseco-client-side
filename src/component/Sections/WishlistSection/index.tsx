import { useSelector } from "react-redux";
import { State } from "../../../interfaces";
import ProductCard from "../../Cards/ProductCard";

const SaveListSection = () => {
  const wishlist = useSelector((state: State) => state.wishlist.items);
  return (
    <div className="space-y-10 sm:space-y-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">
        List of saved products
      </h2>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {wishlist?.map((item, key: number) => (
          <ProductCard key={key} productId={item.productId} />
        ))}
      </div>
    </div>
  );
};

export default SaveListSection;
