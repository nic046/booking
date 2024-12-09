import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { cn } from "../../utils";
import Review from "./Review";

function ReviewRating({ setReview }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0)

    const handleClick = (index) => {
        setRating(index);
        setReview((prevState) => ({
            ...prevState,
            rating: index
        }))
        setHover(0)
    }

    const handleHover = (index) => {
        setHover(index);
    }

  return (
    <div className="flex gap-1 py-1">
      {[...Array(5)].map((_, index) => (
        <button 
        key={index+1} 
        onClick={() => handleClick(index + 1)}
        onMouseEnter={() => handleHover(index + 1)}
        className="text-gray-300"
        >
          <FaStar className= {cn("text-2xl",
            (hover > index || rating > index) && "text-yellow-500"
          )} />
        </button>
      ))}

    </div>
  );
}

export default ReviewRating;
