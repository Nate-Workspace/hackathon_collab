import React from "react";
import PropTypes from "prop-types";
import { Star } from "phosphor-react";

function ReviewsCard({ userName, rating, review }) {
  return (
    <div className="flex-none w-96 p-4 m-2 bg-[#F3F3F3] rounded-xl">
      <h3 className="text-[#000000] text-sm font-light mb-4">{userName}</h3>
      <div className="flex mb-2">

        {[1, 2, 3, 4, 5].map((star) => (
          star <= rating ? <Star key={star} size={24} className="text-[#11875C]" /> : <Star key={star} size={24} className="text-[#2B9770]" />
        ))}
      </div>  

      <p className="text-sm text-[#828282]">{review}</p>
    </div>
  );
}

ReviewsCard.propTypes = {
  userName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
};

export default ReviewsCard;
