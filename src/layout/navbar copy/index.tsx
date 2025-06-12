// import { useState } from "react";
import { useState } from "react";
import {
  CartIcon,
  LoginIcon,
  SearchIcon,
  ToggleIcon,
  UserIcon,
} from "../../component/icons";
import ShoppingCart from "../../component/DropdownMenus/ShoppingCartMenu";
import UserDropdown from "../../component/DropdownMenus/UserMenu";
import NavDropdown from "../../component/Buttons/NavDropdownButton";
import ResponsiveNavbar from "../ResponsiveNavbar";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../interfaces";

const NavbarComponent = () => {
  const login = useSelector((state: State) => state.login);
  const cart = useSelector((state: State) => state.cart);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed top-0 w-full z-40 ">
      <div className="relative z-10 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700">
        <div className=" px-6 md:px-8  lg:px-12">
          <div className="h-20 flex justify-between">
            {/* toggle button */}
            <div className="flex items-center lg:hidden flex-1">
              <button
                onClick={() => setToggle(!toggle)}
                className="p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300 focus:outline-none flex items-center justify-center"
              >
                <ToggleIcon />
              </button>
              {toggle && <ResponsiveNavbar setToggle={setToggle} />}
            </div>
            {/*end toggle button */}
            {/*logo image */}
            <div className="lg:flex-1 flex items-center">
              <Link
                className="inline-block text-slate-600 flex-shrink-0"
                to="/"
              >
                <img
                  alt="Logo"
                  width="162"
                  height="46"
                  className="block h-8 sm:h-10 w-auto dark:hidden"
                  src={logo}
                />
              </Link>
            </div>
            {/*end logo image */}
            <div className="flex-[2] hidden lg:flex justify-center mx-4">
              <ul className="nc-Navigation flex items-center">
                <li className="menu-item flex-shrink-0">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <Link
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      to="/collection?category=men"
                    >
                      Men
                    </Link>
                  </div>
                </li>
                <li className="menu-item flex-shrink-0">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <Link
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      to="/collection?category=women"
                    >
                      Women
                    </Link>
                  </div>
                </li>
                <li className="menu-item flex-shrink-0">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <Link
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      to="/collection?category=kids"
                    >
                      Kids
                    </Link>
                  </div>
                </li>
                <li className="menu-item flex-shrink-0">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <Link
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      to={"/collection?category=sport"}
                    >
                      Sport
                    </Link>
                  </div>
                </li>
                <li className="menu-item flex-shrink-0 ">
                  <div className="relative group h-20 flex-shrink-0 flex items-center">
                    <Link
                      className="inline-flex items-center text-sm lg:text-[15px] font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      to="/about"
                    >
                      About us
                    </Link>
                  </div>
                  <div className="invisible sub-menu absolute top-full inset-x-0 transform z-50">
                    <div className="bg-white dark:bg-neutral-900 shadow-lg"></div>
                  </div>
                </li>
                <li className="menu-item menu-dropdown relative">
                  <div className="h-20 flex-shrink-0 flex items-center">
                    <Link
                      className="inline-flex items-center text-sm lg:text-[15px] text-center whitespace-nowrap font-medium text-slate-700 dark:text-slate-300 py-2.5 px-4 xl:px-5 rounded-full hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      to="/contact"
                    >
                      Contact us
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
              <Link
                to="/search"
                className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center"
              >
                <SearchIcon />
              </Link>

              {login.isLoggedIn ? (
                <NavDropdown icon={<UserIcon />} list={<UserDropdown />} />
              ) : (
                <Link
                  to={"/login"}
                  className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center"
                >
                  <LoginIcon />
                </Link>
              )}
              <NavDropdown
                icon={
                  <>
                    {" "}
                    <CartIcon />
                    <div className=" cart w-3.5  h-3.5 absolute inline-flex items-center justify-center bg-sky-500  top-1.5 right-1.5 rounded-full text-[10px] leading-none text-white font-medium">
                      <span className="mt-[1px]">{cart.items.length}</span>
                    </div>
                  </>
                }
                list={<ShoppingCart />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
