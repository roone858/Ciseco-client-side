import SwiperWithHeader from "../../Sliders/SwiperWithHeader";
import DepartmentCard from "../../Cards/DepartmentCard";
import departmentImage from "../../../assets/department1.webp"
const DepartmentSection = () => {
  return (
    <div>
      <SwiperWithHeader
        title="Shop by department"
        subTitle=""

        cards={[
          <DepartmentCard image={departmentImage} title="Travel Kits" count={20} bgColor="bg-indigo-100" />,
          <DepartmentCard bgColor="bg-slate-100" image={"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdepartment2.b25c00b6.png&w=640&q=75"} title="Beauty Kits" count={10} />,
          <DepartmentCard bgColor="bg-sky-100" image={"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdepartment3.27cf17aa.png&w=640&q=75"} title="Sport Kits" count={34} />,
          <DepartmentCard bgColor="bg-orange-100" image={departmentImage} title="Travel Kit" count={20} />,
          <MoreCollection />

        ]}
        slidesPerView={4}
      />
    </div>
  );
};

export default DepartmentSection;

const MoreCollection = () => {
  return (
    <div className="flex-1 relative w-full h-80 rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1 bg-slate-100">
      <div>
        <div className="absolute inset-y-6 inset-x-10 flex flex-col sm:items-center justify-center">
          <div className="flex relative text-slate-900">
            <span className="text-lg font-semibold ">More collections</span>
            <svg
              className="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 20.4999V3.66992"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <span className="text-sm mt-1 text-slate-800">Show me more</span>
        </div>
      </div>
      <a
        className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"
        href="/collection"
      ></a>
    </div>
  );
};