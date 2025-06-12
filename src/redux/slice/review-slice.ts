// reviewSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ReviewsState, State } from "../../interfaces";
import reviewsService from "../../services/reviews.service";
import { AxiosError } from "axios";

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

// Async Thunk Action for Fetching Reviews
export const fetchReviews = createAsyncThunk(
  "review/fetchReviews",
  async (productId: string, { rejectWithValue }) => {
    try {
      const reviews = await reviewsService.getProductReviews(productId); // Update your API function to accept productId
      return reviews;
    } catch (error) {
      const axiosError = error as AxiosError;

      return rejectWithValue(axiosError.message);
    }
  }
);

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state: ReviewsState, action) => {
      const existingReviewIndex = state.reviews.findIndex(
        (review) => review._id === action.payload._id
      );

      if (existingReviewIndex !== -1) {
        // Update existing review
        state.reviews[existingReviewIndex] = action.payload;
      } else {
        // Add new review
        state.reviews.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state: ReviewsState, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addReview } = reviewSlice.actions;

export const selectReviews = (state: State) => state.reviews.reviews;
export const selectLoading = (state: State) => state.reviews.loading;
export const selectError = (state: State) => state.reviews.error;

export default reviewSlice.reducer;
