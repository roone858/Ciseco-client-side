import { useState } from "react";

const RatingInput = ({ setRate }: any) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingChange = (index: number) => {
    setSelectedRating(index + 1);
    setRate(index )
  };

  return (
    <div className="rating rating-sm">
      {[1, 2, 3, 4, 5].map((index) => (
        <input
          key={index}
          type="radio"
          name="rating-6"
          className={`mask mask-star-2 bg-orange-400 ${
            selectedRating >= index ? "checked" : ""
          }`}
          onChange={() => handleRatingChange(index)}
        />
      ))}
    </div>
  );
};

export default RatingInput;
