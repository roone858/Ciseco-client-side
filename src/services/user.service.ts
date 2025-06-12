import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Credentials, State } from "../interfaces";
import { AxiosError } from "axios";
import axios from "../utils/axios";
import { fetchUserInfo } from "../redux/slice/user-slice";

const userService = {
  changePassword: async (currentPassword: string, newPassword: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/change-password",
        { newPassword, currentPassword }
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return axiosError?.response?.data;
    }
  },
  getAuthenticatedUserInfo: async (dispatch: any) => {
    (dispatch as ThunkDispatch<State, Credentials, AnyAction>)(fetchUserInfo());
  },
  updateAuthenticatedUser: async (updatedUserData: any) => {
    try {
      const response = await axios.patch(
        "http://localhost:3000/users",
        updatedUserData
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return axiosError.message;
    }
  },
  updateUserImage: async (imageFile: any) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await axios.post(
        "http://localhost:3000/users/profile-picture",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return { error: axiosError.message };
    }
  },
};
export default userService;
