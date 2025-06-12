import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../interfaces";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    show: false,
    type: "", // success, warning, error
    message: "",
  },
  reducers: {
    showAlert: (state, action) => {
      state.show = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    hideAlert: (state) => {
      state.show = false;
      state.type = "";
      state.message = "";
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export const selectAlert = (state: State) => state.alert;
export default alertSlice.reducer;
