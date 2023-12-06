import React from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Review = ({ review }) => {
  return (
    <div>
      <div className="card text-center h-96 w-full bg-pink-50 border p-5 ">
        <img
          className="w-16 mx-auto rounded-full"
          src={review.reviewerPicture}
          alt=""
        />
        <p className="flex justify-center items-center font-bold my-5">
          <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly />
        </p>
        <div className="">
          <h1 className="text-xl font-bold">{review.name}</h1>
          <p className="">{review.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
