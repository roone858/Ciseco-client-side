import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosError } from "axios";
import axios from "../../utils/axios";

// Define the async thunk for fetching data from the product route
export const fetchProducts: any = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    console.log("fetching Products from server");
    try {
      const response = await axios.get("http://localhost:3000/users");
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue({ error: axiosError.message });
    }
  }
);

const initialState = {
  data: [] as any[],
  isLoading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchProducts.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state: any, action: any) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchProducts.rejected, (state: any, action: any) => {
      return { ...state, error: action.payload.error, isLoading: false };
    });
  },
});

// export const { addProduct, updateProduct, deleteProduct } =
//   productsSlice.actions;
export default productsSlice.reducer;
