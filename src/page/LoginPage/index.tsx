import { Link } from "react-router-dom";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/telegram.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HttpStatusCodes, State } from "../../interfaces";
import { SpannerIcon } from "../../component/icons";
import authService from "../../services/auth.service";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
const LoginPage = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ identifier: "", password: "" });
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const error = useSelector((state: State) => state.login.error);
  const isLoginLoading = useSelector((state: State) => state.login.isLoading);

  
const googleLogin = useGoogleLogin({
  flow: 'auth-code',
  onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const tokens = await axios.post(
          'http://localhost:3000/auth/google', {
              code: codeResponse.code,
          });

      console.log(tokens);
  },
  onError: errorResponse => console.log(errorResponse),
});
  // const onSuccess = async (payload: any) => {
  //   console.log("Login Success:", payload);

  //   // Send the Google authentication token to the backend for further verification
  //   try {
  //     // const backendResponse = await axios.get(
  //     //   "http://localhost:3000/auth/google/callback"
  //     // );
  //     const response = await fetch(
  //       "http://localhost:3000/auth/google",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ payload }),
  //       }
  //     );

  //     const data = await response.json();
  //     console.log("Server Response:", data);
  //     // console.log(backendResponse);
  //     // const backendData = await backendResponse.json();
  //     // onLoginSuccess({ ...response.profileObj, backendData });
  //     // console.log({ ...response.profileObj, backendData });
  //   } catch (error) {
  //     // onLoginFailure(error);
  //     console.log(error);
  //   }
  // };

  const handleLogin = async () => await authService.login(dispatch, data);

  useEffect(() => {
    setErrMessage(
      error?.statusCode == HttpStatusCodes.NotFound
        ? "User not Found "
        : error?.statusCode == HttpStatusCodes.Unauthorized
        ? "Password is Incorrect "
        : ""
    );
    setLoading(isLoginLoading);
  }, [error, isLoginLoading]);
  return (
    <div
      className="nc-PageLogin items-center justify-center flex"
      data-nc-id="PageLogin"
    >
      <div className="container my-24 lg:mb-32">
        <h2 className="my-12 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <GoogleLogin
          onSuccess={googleLogin}
          
          onError={() => {
            console.log("Login Failed");
          }}
        />
 
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            <a
              href="#"
              className="flex w-full rounded-lg bg-sky-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                alt="Continue with Facebook"
                loading="lazy"
                width="18"
                height="17"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0"
                src={facebook}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                Continue with Facebook
              </h3>
            </a>
            <a
              href="#"
              className="flex w-full rounded-lg bg-sky-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                alt="Continue with Twitter"
                loading="lazy"
                width="21"
                height="18"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0"
                src={twitter}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                Continue with Twitter
              </h3>
            </a>
            <a
              
              className="flex w-full rounded-lg bg-sky-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                alt="Continue with Google"
                loading="lazy"
                width="17"
                height="18"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0"
                src={google}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                Continue with Google
              </h3>
            </a>
          </div>
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email or Username
              </span>
              <input
                onChange={(e) =>
                  setData({ ...data, identifier: e.target.value })
                }
                className="block w-full border border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                placeholder="mahmoud99"
                type="text"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <a className="text-sm text-green-600" href="/forgot-pass">
                  Forgot password?
                </a>
              </span>
              <input
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="block w-full border border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                type="password"
              />
            </label>
            {errMessage && <WrongAlert message={errMessage} />}
            <button
              onClick={handleLogin}
              className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-6000 dark:focus:ring-offset-0"
              type="submit"
            >
              {!loading ? "Continue" : <SpannerIcon />}
            </button>
          </div>
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user?{" "}
            <Link className="text-green-600" to="/signup">
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

const WrongAlert = ({ message }: { message: string }) => {
  return (
    <div className="border rounded-2xl border-red-400  bg-red-100 px-4 py-3 text-red-700">
      <p>{message}.</p>
    </div>
  );
};
