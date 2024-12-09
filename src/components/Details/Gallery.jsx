import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline  } from "react-icons/ti";

function Gallery({ hotel }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === hotel?.images?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? hotel?.images?.length - 1 : prevIndex - 1
    );
  };

  const currentImage = hotel?.images ? hotel?.images[currentImageIndex] : "";

  return (
    <div className="relative aspect-square rounded-lg">
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full">
      <img
        src={currentImage?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-full"
      />
      <img
        src={hotel?.images && hotel?.images[(currentImageIndex + 1) % hotel.images.length]?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-2 row-start-2"
      />
      <img
        src={hotel?.images && hotel?.images[(currentImageIndex + 2) % hotel.images.length]?.url}
        alt={hotel?.name}
        className="w-full h-full object-cover rounded-lg col-span-2 row-start-2"
      />
    </div>

    <button
      onClick={handlePrev}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition"
    >
      <span className="font-bold text-2xl"><TiChevronLeftOutline /></span>
    </button>

    <button
      onClick={handleNext}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-3 hover:bg-opacity-75 transition"
    >
      <span className="font-bold text-2xl"><TiChevronRightOutline /></span>
    </button>
  </div>
  );
}

export default Gallery;
