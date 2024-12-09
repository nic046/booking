import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";

function RatingStars({ rating }) {
  const renderStars = (index) => {
    if (index < Math.floor(rating)) {
      return <FaStar />;
    } else if (index < rating) {
      return <FaRegStarHalfStroke />;
    } else {
      return <FaRegStar />;
    }
  };
  return (
    <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-lg">
      <span className="flex items-center">
        {[...Array(5)].map((_, index) => {
          return <span key={index} className="text-amber-500">{renderStars(index)}</span>;
        })}
      </span>
    </div>
  );
}

export default RatingStars;
