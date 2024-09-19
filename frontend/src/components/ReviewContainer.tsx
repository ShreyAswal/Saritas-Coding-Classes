import React from "react";
import ReviewCard from "./ReviewCard";
const Review = () => {
  const content = [
    {
      name: "Lyndsay",
      image:"https://via.placeholder.com/150",
      // location: "California, USA",
      stars: 5,
      headline: "Good communication, easy to understand",
      review:
        "Very pleased, She listened to my needs well and made it easy to understand. Good communicator. Would recommend service!",
      },
      {
        name: "Rajesh Kumar Saha",
        image:"https://drive.google.com/file/d/1492UG5jzp6YYtMJgAd1JwAqHEXZl2nKp/view",
        // location: "California, USA",
        stars: 5,
        headline:
          "Professional and dedicated",
        review:
          "It was a great experience. Her professionalism and dedication is unmatched."
  
      },
      {
        name: "Pooja",
        image:"https://via.placeholder.com/150",
        // location: "California, USA",
        stars: 5,
        headline:
        "Dedicated, understands student's needs well & ensures students progress",
        review:
        "She is a patient, caring, and disciplined teacher. She understands student's needs and abilities and tailors her approach to meet them. I have found almost all her sessions engaging. She is well prepared for all her sessions to handle all types of queries and that speaks volumes about her.",
      },
      // {
      //   name: "Anurag Bengani ",
      //   // location: "California, USA",
      //   stars: 5,
      //   headline: "Amazing concept",
      //   review: "Classes are great , easy to understand",
      // }
  ];

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
          {content.map((review, index) => {
            return (
              <ReviewCard
                key={index}
                name={review.name}
                image={review.image}
                stars={review.stars}
                headline={review.headline}
                review={review.review}
              />
            );
          })}
          
          {/* <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />   
            <ReviewCard />
            <ReviewCard />  */}
        </div>
      </div>
    </div>
  );
};

export default Review;
