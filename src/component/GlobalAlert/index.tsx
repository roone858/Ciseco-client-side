import { useSelector, useDispatch } from "react-redux";
import { hideAlert, selectAlert } from "../../redux/slice/alert-slice";

const GlobalAlert = () => {
  const dispatch = useDispatch();
  const { show, type, message } = useSelector(selectAlert);

  const handleClose = () => {
    dispatch(hideAlert());
  };

  return (
    <div className="fixed ml-12 mt-24 z-50">
      {show && (
        <div
          role="alert"
          className={`alert ${
            type === "error"
              ? "alert-danger"
              : type === "warning"
              ? "alert-warning"
              : "alert-success"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={`${
                type === "error"
                  ? "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  : type === "warning"
                  ? "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  : "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              }`}
            />
          </svg>
          <span>{message}</span>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default GlobalAlert;
