import { useEffect } from "react";
import WriteReviewButton from "../../Buttons/WriteReviewButton";
import ReviewCard from "../../Cards/ReviewCard";
import { BlackStar } from "../../icons";
import { Review, State } from "../../../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, selectReviews } from "../../../redux/slice/review-slice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

const ReviewSection = ({ productId }: { productId: string }) => {
  // const [reviews, setReviews] = useState<Review[]>();
  const reviews = useSelector(selectReviews);
  const userId = useSelector((state: State) => state.user.data._id);
  const dispatch = useDispatch();
  useEffect(() => {
    (dispatch as ThunkDispatch<State, string, AnyAction>)(
      fetchReviews(productId)
    );

    // dispatch(fetchReviews(productId));
  }, [dispatch, productId]);

  return (
    <div className="">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl font-semibold flex items-center">
          <BlackStar />
          <span className="ml-1.5"> 4,87 · {reviews.length} Reviews</span>
        </h2>
        <WriteReviewButton
          update={!!reviews.find((review) => review.userId._id == userId)}
          productId={productId}
        />
      </div>
      {reviews?.length ? (
        <>
          {" "}
          <div className=" mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
              {reviews?.length &&
                reviews?.map((review: Review, key) => (
                  <ReviewCard key={key} review={review} />
                ))}
            </div>

            {reviews?.length > 4 && (
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 mt-10 border border-slate-300 dark:border-slate-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                Show me all 142 reviews
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center">There is no reviews</div>
      )}
    </div>
  );
};

export default ReviewSection;
