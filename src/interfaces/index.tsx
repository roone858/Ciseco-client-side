export interface Product {
  _id: string;
  image: string;
  expert: boolean;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: { rate: number; count: number } | number;
  stock: number;
  brand: string;
  sizes: string[];
  colors: string[];
  category: string;
  subCategory: string;
  thumbnail: string;
  images: string[];
  highlights: string[];
  feature: string;
}
export interface User {
  _id?: string;
  name: string;
  username: string;
  email: string;
  dob: Date;
  password: string;
  bio: string;
  image?: string;
  role: "user" | "admin";
  address: Address;
  phone: string;
  gender: "Male" | "Female";
}
export interface Address {
  street: string;
  state: string;
  city: string;
  zipcode: string;
}
export interface CartItem {
  productId: string;
  quantity: number;
  subtotal: number;
}
export interface CartState {
  items: CartItem[];
  total: number;
}
export interface LoginState {
  accessToken: null | string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
}
export interface WishlistState {
  items: WishlistItem[];
}
export interface WishlistItem {
  userId: string;

  productId: string;
}
export interface AlertState {
  show: boolean;
  type: string; // success, warning, error
  message: string;
}

export interface State {
  products: { data: Product[]; isLoading: boolean; error: any };
  cart: CartState;
  login: LoginState;
  reviews: ReviewsState;
  alert: AlertState;
  wishlist: WishlistState;
  user: { data: User; isLoading: boolean; error: any };
}
export interface ReviewsState {
  reviews: Review[];
  loading: boolean;
  error: any;
}
export interface Review {
  _id?: string;
  userId: User;
  productId: string;
  rate: number;
  text: string;
}
export interface NewReview {
  userId: string;
  productId: string;
  rate: number;
  text: string;
}
export interface Credentials {
  identifier: string;
  password: string;
}
export enum HttpStatusCodes {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}
export interface SignupFormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
}
