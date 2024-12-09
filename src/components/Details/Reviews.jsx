import { useEffect } from "react"
import useApiFetch from "../../hooks/useApiFetch"
import Reviewslist from "./Reviewslist"

function Reviews({hotelId}) {
    const [reviews, setReviews] = useApiFetch()

    useEffect(() => {
      if(hotelId)
        setReviews({
            url:`/reviews?hotelId=${hotelId}`
        })
    }, [hotelId])
    
  return (
    <div>
        <h2 className="text-2xl font-semibold text-center mb-4">Reviews</h2>
        <div>
            <Reviewslist reviews={reviews.results}/>
        </div>
    </div>
  )
}

export default Reviews