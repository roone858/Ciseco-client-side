import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import google from "../../assets/telegram.svg";
import { useState } from "react";
import { SpannerIcon } from "../../component/icons";
import authService from "../../services/auth.service";
import {
  Formik,
  Form,
  ErrorMessage,
  FormikHelpers,
  useField,
  Field,
} from "formik";
import { signupValidationSchema } from "../../utils/yup";
import { SignupFormValues } from "../../interfaces";
import { useDispatch } from "react-redux";
const Signup = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [timeoutID, setTimeoutID] = useState<number>();
  const [usernameExists, setUsernameExists] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",

    gender: "",
  };

  const handleSignup = async (
    values: SignupFormValues,
    { resetForm }: FormikHelpers<SignupFormValues>
  ) => {
    if (!usernameExists && !emailExists) {
      setIsLoading(true);
      const response = await authService.signup(values);
      if (response.success)
        await authService.login(dispatch, {
          ...values,
          identifier: values.username,
        });
      else console.log(response);
      resetForm();
      console.log(values);
      setIsLoading(false);
    }
  };

  const checkUsernameExists = (newUsername: string) => {
    setUsernameExists(false);
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    const timeoutId = setTimeout(async () => {
      const isExists = await authService.checkUsernameExists(newUsername);
      setUsernameExists(isExists);
    }, 3000);
    setTimeoutID(timeoutId);
  };

  const checkEmailExists = (email: string) => {
    setEmailExists(false);
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    const timeoutId = setTimeout(async () => {
      const isExists = await authService.checkEmailExists(email);
      setEmailExists(isExists);
    }, 3000);
    setTimeoutID(timeoutId);
  };

  return (
    <div
      className="nc-PageLogin items-center justify-center flex"
      data-nc-id="PageLogin"
    >
      <div className="container my-24 lg:mb-32">
        <h2 className="my-12 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Sign Up
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            <a
              href="#"
              className="flex w-full rounded-lg bg-sky-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                alt="Sign Up with Facebook"
                loading="lazy"
                width="18"
                height="17"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0"
                src={facebook}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                Sign Up with Facebook
              </h3>
            </a>
            <a
              href="#"
              className="flex w-full rounded-lg bg-sky-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                alt="Sign Up with Twitter"
                loading="lazy"
                width="21"
                height="18"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0"
                src={twitter}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                Sign Up with Twitter
              </h3>
            </a>
            <a
              href="#"
              className="flex w-full rounded-lg bg-sky-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                alt="Sign Up with Google"
                loading="lazy"
                width="17"
                height="18"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0"
                src={google}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                Sign Up with Google
              </h3>
            </a>
          </div>
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={signupValidationSchema}
            onSubmit={handleSignup}
          >
            <Form className="grid grid-cols-1 gap-6">
              <Input
                name="name"
                label="Name"
                type="text"
                placeholder="Your Name"
              />
              <Input
                name="username"
                label="Username"
                type="text"
                onKeyUp={(e: any) => checkUsernameExists(e.target.value)}
                isExistsErr={usernameExists}
                placeholder="Username"
              />
              <Input
                name="email"
                label="Email"
                type="text"
                onKeyUp={(e: any) => checkEmailExists(e.target.value)}
                isExistsErr={emailExists}
                placeholder="mahmoud@gmail.com"
              />
              <Input
                name="password"
                label="Password"
                type="password"
                placeholder="********"
              />
              <Input
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                placeholder="********"
              />
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="px-3 h-11 mt-1.5 block w-full focus:outline-none text-sm rounded-2xl border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900"
                >
                  <option value="" label="Select gender" />
                  <option value="Male" label="Male" />
                  <option value="Female" label="Female" />
                </Field>
                <ErrorMessage
                  name={"gender"}
                  component="div"
                  className="text-red-500 text-sm font-normal  px-4"
                />
              </div>

              <button
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-6000 dark:focus:ring-offset-0"
                type="submit"
              >
                {!isLoading ? "Sign Up" : <SpannerIcon />}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Signup;

export const Input: React.FC<{
  name: string;
  type: string;
  placeholder: string;
  label: string;
  isExistsErr?: boolean;
  onKeyUp?: (e: any) => void;
}> = ({ name, label, isExistsErr, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <label className="block">
      <span className="flex justify-between items-center  text-neutral-800">
        {label}
      </span>
      <input
        className={
          (meta.error && meta.touched) || isExistsErr
            ? "block w-full border focus:outline-none border-red-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50  disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
            : "block w-full border focus:outline-none border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
        }
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="text-red-500 text-sm font-normal  px-4"
      />
      {isExistsErr && (
        <>
          <div className="text-red-500 text-sm font-normal  px-4">
            {label} alerady Exists
          </div>
        </>
      )}
    </label>
  );
};
