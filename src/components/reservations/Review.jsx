import { useState } from "react";
import ReviewRating from "./ReviewRating";
import { toast } from "react-toastify";

const initialState = {
  hotelId: null,
  rating: 0,
  comment: "",
};

function Review({ hotelId, closeModal }) {
  const [review, setReview] = useState(initialState);

  const successMessage = () => {
    toast.success("Succes at rating the hotel!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  const handleSubmit = () => {
    review.hotelId = hotelId;
    setReview(initialState);
    closeModal();
    successMessage()
  };
  return (
    <div className="w-80">
      <h2 className="text-2xl font-semibold mb-4">Review</h2>
      <div className="mb-4">
        <ReviewRating setReview={setReview} />
      </div>
      <textarea
        className="input-form resize-none mb-4"
        placeholder="Write your review here..."
        value={review?.comment}
        onChange={(e) => setReview({ ...review, comment: e.target.value })}
      ></textarea>

      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Review;
