import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { AxiosError } from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data = [
  {
    id: " 1",
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    password: "password1122",
    image: "/1.png",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    password: "password1122",
    image: "/2.png",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    password: "password1122",
    image: "/3.png",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    password: "password1122",
    image: "/4.png",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    password: "password1122",
    image: "/5.png",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    password: "password1122",
    image: "/6.png",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    password: "password1122",
    image: "/7.png",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    password: "password1122",
    image: "/8.png",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    password: "password1122",
    image: "/9.png",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    password: "password1122",
    image: "/10.png",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
  },
];

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (_, thunkAPI) => {
    console.log("fetching user from server");
    try {
      const response = await axios.get("http://localhost:3000/auth/profile");
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return thunkAPI.rejectWithValue({ error: axiosError.message });
    }
  }
);

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      if (state.data && typeof state.data === "object") {
        state.data = action.payload;
      }
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchUserInfo.pending, (state: any) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserInfo.fulfilled, (state: any, action: any) => {
      return { ...state, data: action.payload, isLoading: false };
    });
    builder.addCase(fetchUserInfo.rejected, (state: any, action: any) => {
      return { ...state, error: action.payload.error, isLoading: false };
    });
  },
});
export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
