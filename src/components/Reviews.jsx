import React from "react";

function Reviews({ userImage = "assets/user (1).svg", userName, userReview }) {
  return (
    <div className="review_wrapper p-8 bg-white rounded-lg">
      <div className="flex gap-4 mb-5">
        <div className="w-[50px] h-[50px] rounded-full">
          <img
            className="object-cover object-center"
            src={userImage}
            alt={userName}
          />
        </div>
        <div className="ml-4">
          <div className="flex items-center gap-1 mb-1">
            <i className="bi bi-star-fill text-yellow-300"></i>
            <i className="bi bi-star-fill text-yellow-300"></i>
            <i className="bi bi-star-fill text-yellow-300"></i>
            <i className="bi bi-star-fill text-yellow-300"></i>
            <i className="bi bi-star-fill text-yellow-300"></i>
          </div>
          <h2 className="text-xl capitalize">{userName}</h2>
        </div>
      </div>
      <p>{userReview}</p>
    </div>
  );
}

export default Reviews;
