import { HartIcon } from "../../icons";
import { useDispatch, useSelector } from "react-redux";
import { State, WishlistItem } from "../../../interfaces";
import wishlistService from "../../../services/wishlist.service";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/slice/wishlist-slice";

export const FavButton = ({ productId }: { productId: string }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: State) => state.user.data?._id);
  const isItemInWishlist = useSelector(
    (state: State) =>
      !!state.wishlist.items.find(
        (item: WishlistItem) => item.productId == productId
      )
  );

  const handleClick = async () => {
    if (isItemInWishlist) {
      dispatch(removeFromWishlist(productId));
    } else {
      // Add item to the wishlist
      dispatch(addToWishlist({ productId, userId: userId })); // You can replace 'Item Name' with the actual name
    }

    if (isItemInWishlist) wishlistService.removeFromWishlist(productId);
    if (!isItemInWishlist) wishlistService.addToWishlist(productId);
  };

  return (
    <button
      onClick={handleClick}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 text-neutral-700 dark:text-slate-200 nc-shadow-lg absolute top-3 right-3 z-10"
    >
      <HartIcon isFav={isItemInWishlist} />
    </button>
  );
};
