import { setWishlist } from "../redux/slice/wishlist-slice";
import axios from "../utils/axios";

class wishlistService {
  static async getWishlist(dispatch: any) {
    try {
      const res = await axios.get("http://localhost:3000/wishlist");
      if (res.data.length) dispatch(setWishlist(res.data));
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  static async removeFromWishlist(productId: string) {
    try {
      const response = await axios.delete(
        "http://localhost:3000/wishlist/remove/" + productId
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }

  static async addToWishlist(productId: string) {
    try {
      const response = await axios.post(
        "http://localhost:3000/wishlist/add/" + productId
      );
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
}
export default wishlistService;
