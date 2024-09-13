import React from "react";
import ReviewCard from "./ReviewCard";
const Review = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-10 pt-5">
        <h1 className=" text-center font-semibold text-7xl">
          Reviews that speak <br />
          volumes.
        </h1>
        <p className="my-5 ">
          Don't believe us, hear what our students have to say for us!{" "}
        </p>
      </div>
      <div className="">
        <div className="w-[100%] flex flex-wrap justify-center">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Review;
