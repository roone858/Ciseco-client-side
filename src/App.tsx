import "./App.css";
import Footer from "./layout/Footer";
import NavbarComponent from "./layout/Navbar copy";
import AboutPage from "./page/About";
import CollectionPage from "./page/Collection";
import ContactPage from "./page/Contact";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./page/ProductDetails";
import LoginPage from "./page/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./interfaces";
import SearchPage from "./page/Search/SearchPage";
import AccountPage from "./page/Account";
import PaymentSection from "./component/Sections/PaymentSection";
import UpdatePasswordForm from "./component/Sections/ChangePasswordSection";
import SaveListSection from "./component/Sections/WishlistSection";
import AccountInformationForm from "./component/Sections/AccountInfo";
import CheckoutPage from "./page/Checkout";
import Cart from "./page/Cart";

import OrderSection from "./component/Sections/OrderSection";
import SignupPage from "./page/Signup";
import { useEffect } from "react";
import { setTokenInAxios } from "./utils/axios";
import productsService from "./services/products.service";
import userService from "./services/user.service";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import wishlistService from "./services/wishlist.service";
import CartService from "./services/cart.service";
import GlobalAlert from "./component/GlobalAlert";
import ScrollToTop from "./component/ScrollToTop";
import PaymentGateway from "./page/payment";

function App() {
  const dispatch = useDispatch();
  const login = useSelector((state: State) => state.login);
  const products = useSelector((state: State) => state.products.data);
  const user = useSelector((state: State) => state.user.data);

  useEffect(() => {
    if (login.isLoggedIn) {
      login.accessToken && setTokenInAxios(login.accessToken);
      if (!user) userService.getAuthenticatedUserInfo(dispatch);
    }
  }, [dispatch, login.accessToken, login.isLoggedIn, user]);

  useEffect(() => {
    if (login.isLoggedIn) {
      {
        wishlistService.getWishlist(dispatch);
        CartService.getCart(dispatch);
      }
    }
  }, [dispatch, login.isLoggedIn, products]);

  useEffect(() => {
    productsService.getProducts(dispatch);
  }, [dispatch]);
  return (
    <>
      <GlobalAlert />
      <BrowserRouter>
        <ScrollToTop />
        <GoogleOAuthProvider clientId="267959229684-cb60rimtu2gkm8p0g472pnnbdgqmjsbg.apps.googleusercontent.com">
          <NavbarComponent />
          <div className="light overflow-hidden   ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={login.isLoggedIn ? <Home /> : <LoginPage />}
              />
              <Route
                path="/signup"
                element={login.isLoggedIn ? <Home /> : <SignupPage />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/collection/:id" element={<ProductDetails />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/payment" element={<PaymentGateway />} />

              <Route
                path="/account"
                element={<PrivateRoute element={AccountPage} />}
              >
                <Route path="" element={<AccountInformationForm />} />
                <Route path="payment" element={<PaymentSection />} />
                <Route path="password" element={<UpdatePasswordForm />} />
                <Route path="billing" element={<PaymentSection />} />
                <Route path="order" element={<OrderSection />} />
                <Route path="savelist" element={<SaveListSection />} />
              </Route>
            </Routes>
            <Footer />
          </div>
        </GoogleOAuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

const PrivateRoute: React.FC<any> = ({ element: Element }) => {
  const isLoggedIn = useSelector((state: State) => state.login.isLoggedIn);

  return <>{isLoggedIn ? <Element /> : <Navigate to="/login" replace />}</>;
};
