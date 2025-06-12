import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Credentials, LoginState } from "../../interfaces";
import axios from "../../utils/axios";
import {
  getTokenInSessionStorage,
  SetTokenInSessionStorage,
} from "../../utils/sessionStorage";
import { AxiosError } from "axios";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        identifier: credentials.identifier,
        password: credentials.password,
      });

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue(axiosError?.response?.data);
    }
  }
);
const accessToken = getTokenInSessionStorage();
const initialState: LoginState = {
  accessToken: accessToken,
  isLoggedIn: accessToken ? true : false,
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(login.pending, (state: any) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      login.fulfilled,
      (state: LoginState, action: PayloadAction<{ access_token: string }>) => {
        SetTokenInSessionStorage(action.payload.access_token);

        return {
          ...state,
          accessToken: action.payload.access_token,
          isLoggedIn: true,
          isLoading: false,
        };
      }
    );
    builder.addCase(
      login.rejected,
      (state: LoginState, action: PayloadAction) => {
        return { ...state, isLoading: false, error: action.payload };
      }
    );
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  loginSlice.actions;

export default loginSlice.reducer;
