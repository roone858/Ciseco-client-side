import { useDispatch, useSelector } from "react-redux";
import StateIcon, {
  AddressIcon,
  CityIcon,
  DateIcon,
  EmailIcon,
  PhoneIcon,
  SpannerIcon,
} from "../../icons";

import { Address, State, User } from "../../../interfaces";
import { useEffect, useState } from "react";
import userService from "../../../services/user.service";
import { InputImage } from "../../Inputs/ChangeImageInput";
import { updateUser } from "../../../redux/slice/user-slice";

const AccountInformationForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user.data);
  const isLoading = useSelector((state: State) => state.user.isLoading);
  const [data, setData] = useState<User>(user);
  const [selectedImage, setSelectedImage] = useState(null);

  const [address, setAddress] = useState<Address>(user?.address);
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleChangeAddress = (e: any) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
    console.log(address);
  };

  const handleUpdate = async () => {
    const updatedData = {
      ...data,
      address: address,
    };
    const updatedUser = await userService.updateAuthenticatedUser(updatedData);
    dispatch(updateUser({ ...updatedData, ...updatedUser }));
    if (selectedImage) {
      const res = await userService.updateUserImage(selectedImage);
      dispatch(updateUser(res));
    }
  };

  useEffect(() => {
    if (user) {
      setData(user);
      setAddress(user?.address);
    }
  }, [user]);
  if (isLoading)
    return (
      <div className="nc-AccountPage">
        <div className="flex justify-center items-center">
          <SpannerIcon />
        </div>
      </div>
    );
  return (
    <div className="nc-AccountPage">
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Account information
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 flex items-start">
            <InputImage
              image={user?.image}
              setSelectedImage={setSelectedImage}
            />
          </div>
          <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Full name
              </label>
              <input
                className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                type="text"
                name="name"
                onChange={handleChange}
                defaultValue={user?.name}
              />
            </div>
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Email
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <EmailIcon />
                </span>
                <input
                  onChange={handleChange}
                  className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  placeholder="example@email.com"
                  defaultValue={user?.email}
                  type="email"
                  name="email"
                />
              </div>
            </div>
            <div className="max-w-lg">
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Date of birth
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <DateIcon />
                </span>
                <input
                  onChange={handleChange}
                  className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  type="date"
                  name="dob"
                  defaultValue={new Date(user?.dob).toLocaleDateString("fr-CA")}
                />
              </div>
            </div>
            <div className="flex gap-10">
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                  data-nc-id="Label"
                >
                  City
                </label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                    <CityIcon />
                  </span>
                  <input
                    onChange={handleChangeAddress}
                    className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                    type="text"
                    name="city"
                    placeholder="Assiut"
                    defaultValue={user?.address?.city}
                  />
                </div>
              </div>
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                  data-nc-id="Label"
                >
                  State
                </label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-2.5 rounded-l-2xl  border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                    <StateIcon />
                  </span>
                  <input
                    onChange={handleChangeAddress}
                    className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                    type="text"
                    name="state"
                    placeholder="Manflout"
                    defaultValue={user?.address?.state}
                  />
                </div>
              </div>
              <div>
                <label
                  className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                  data-nc-id="Label"
                >
                  Street
                </label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-2.5 rounded-l-2xl  border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                    <AddressIcon />
                  </span>
                  <input
                    onChange={handleChangeAddress}
                    className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                    type="text"
                    name="street"
                    placeholder="Galal Street"
                    defaultValue={user?.address?.street}
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Gender
              </label>
              <select
                name="gender"
                defaultValue={user?.gender}
                onChange={handleChange}
                className="px-3 h-11 mt-1.5 block w-full text-sm rounded-2xl border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                Phone number
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 border dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                  <PhoneIcon />
                </span>
                <input
                  onChange={handleChange}
                  className="block w-full border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  type="text"
                  name="phone"
                  placeholder="+2011*******"
                  defaultValue={user?.phone}
                />
              </div>
            </div>
            <div>
              <label
                className="nc-Label text-base font-medium text-neutral-900 dark:text-neutral-200"
                data-nc-id="Label"
              >
                About you
              </label>
              <textarea
                className="block w-full p-3 text-sm rounded-2xl border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1.5"
                rows={4}
                onChange={handleChange}
                name="bio"
                placeholder="..."
                defaultValue={user?.bio}
              />
            </div>
            <div className="pt-2">
              <button
                onClick={handleUpdate}
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 ttnc-Buttonsky disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 dark:focus:ring-offset-0"
              >
                Update account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformationForm;
