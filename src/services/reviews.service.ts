import { NewReview } from "../interfaces";
import axios from "../utils/axios";

const reviewsService = {
  getProductReviews: async (productId: string) => {
    const res = await axios.get("http://localhost:3000/reviews/" + productId);
    return res.data;
  },
  addReview: async (newReview: NewReview) => {
    try {
      const res = await axios.post("http://localhost:3000/reviews/", newReview);
      if (res.data) return res.data;
    } catch (error) {
      return error;
    }
  },
};
export default reviewsService;
