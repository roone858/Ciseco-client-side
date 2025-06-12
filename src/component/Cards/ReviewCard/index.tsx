import { StarIcon } from "../../icons";
import avatar from "../../../assets/user-avatar.png";
import { Review } from "../../../interfaces";

// import avatar from ""
const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className=" flex flex-col ">
      <div className=" flex space-x-4 ">
        <div className="flex-shrink-0 pt-0.5">
          <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-10 w-10 text-lg ring-1 ring-white dark:ring-neutral-900">
            <img
              alt="Cody Fisher"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
              src={
                review.userId?.image
                  ? "http://localhost:3000/users/profile-picture/" +
                    review.userId.image
                  : avatar
              }
            />
            <span className="wil-avatar__name">C</span>
          </div>
        </div>
        <div className="flex-1 flex justify-between">
          <div className="text-sm sm:text-base">
            <span className="block font-semibold">{review.userId.name}</span>
            <span className="block mt-0.5 text-slate-500 dark:text-slate-400 text-sm">
              May 20, 2021
            </span>
          </div>
          <div className="mt-0.5 flex text-yellow-500">
            {Array.from({ length: review.rate }, (_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 prose prose-sm sm:prose dark:prose-invert sm:max-w-2xl">
        <p className="text-slate-600 dark:text-slate-300">{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
