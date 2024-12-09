import React from "react";
import RatingStars from "../RatingStars";
import { FaLocationDot } from "react-icons/fa6";

function Description({ rating, address, description }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <RatingStars rating={rating} />
        <span className="font-semibold">{rating}</span>
      </div>

      <p className="flex items-center gap-1 mb-4">
      <FaLocationDot  className="font-bolder text-red-500"/> <span className="text-xs">{address}</span>
      </p>
      <p className="leading-relaxed mb-6">{description}</p>
    </div>
  );
}

export default Description;
