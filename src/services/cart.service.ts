import { CartItem } from "../interfaces";
import { addToCart, removeFromCart, setCart } from "../redux/slice/cart-slice";
import axios from "../utils/axios";

class CartService {
  static async getCart(dispatch: any) {
    try {
      const res = await axios.get("http://localhost:3000/cart");
      const items = res.data.items;
      if (items.length) dispatch(setCart(items));
      return items;
    } catch (err) {
      console.log(err);
    }
  }

  static async removeFromCart(dispatch: any, productId: string) {
    try {
      const response = await axios.delete(
        "http://localhost:3000/cart/" + productId
      );

      dispatch(removeFromCart(productId));
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }

  static async addToCart(dispatch: any, item: CartItem) {
    try {    
      const response = await axios.post(
        "http://localhost:3000/cart/add/",
        item
      );

      if (response.data) dispatch(addToCart(item));
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
}
export default CartService;
