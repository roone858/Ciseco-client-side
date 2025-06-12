import { useDispatch, useSelector } from "react-redux";
import { PlusIcon } from "../../icons";
import RatingInput from "../../Inputs/Rating";
import { State } from "../../../interfaces";
import { useRef, useState } from "react";
import reviewsService from "../../../services/reviews.service";
import { addReview } from "../../../redux/slice/review-slice";

const WriteReviewButton = ({
  productId,
  update,
}: {
  productId: string;
  update?: boolean;
}) => {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState("");
  const [rate, setRate] = useState();
  const userId = useSelector((state: State) => state.user.data._id);
  const handleClickOpen = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const handleAdd = async () => {
    if (rate && text && userId) {
      const review = await reviewsService.addReview({
        userId: userId,
        productId: productId,
        text: text,
        rate: rate,
      });
      dispatch(addReview(review));
      if (review) setSuccess(true);
    }
  };
  return (
    <div>
      <button
        onClick={handleClickOpen}
        className=" relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6   disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-6000 "
      >
        {update ? (
          "Update Your Review"
        ) : (
          <>
            {" "}
            <PlusIcon /> Write a Review
          </>
        )}
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-5">
              <h2 className="inline font-semibold">Write Review</h2>

              <RatingInput setRate={setRate} />
            </div>

            <textarea
              className="block p-3 text-sm rounded-2xl border-neutral-200 border focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 focus:outline-none bg-white   mt-1.5"
              name="text"
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="Write your review here ..."
              // defaultValue={user?.bio}
            />
            {(!text || !rate) && (
              <span className="border rounded-2xl border-red-400 text-sm  bg-red-100 px-4 py-1 mt-3 text-red-700">
                {!text ? "This field is required" : "Rating is Required"}
              </span>
            )}
            {success && (
              <span className="border rounded-2xl border-green-400 text-sm  bg-green-100 px-4 py-1 mt-3 text-green-700">
                Added successfully
              </span>
            )}
          </div>
          <div className="modal-action">
            <button onClick={handleAdd} className="btn">
              Add
            </button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default WriteReviewButton;
