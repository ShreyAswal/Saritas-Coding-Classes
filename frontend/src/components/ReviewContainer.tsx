import React from "react";
import ReviewCard from "./ReviewCard";
const Review = () => {
  const content = [
    {
      name: "Lyndsay",
      image: "https://avatar.iran.liara.run/public/75",
      // location: "California, USA",
      stars: 5,
      headline: "Good communication, easy to understand",
      review:
        "Very pleased, She listened to my needs well and made it easy to understand. Good communicator. Would recommend service!",
    },
    {
      name: "Rajesh Kumar Saha",
      image: "https://avatar.iran.liara.run/public/34",
      // location: "California, USA",
      stars: 5,
      headline: "Professional and dedicated",
      review:
        "It was a great experience. Her professionalism and dedication is unmatched.",
    },
    {
      name: "Pooja",
      image: "https://avatar.iran.liara.run/public/98",
      // location: "California, USA",
      stars: 5,
      headline:
        "Dedicated, understands student's needs well & ensures students progress",
      review:
        "She is a patient, caring, and disciplined teacher. She understands student's needs and abilities and tailors her approach to meet them. I have found almost all her sessions engaging. She is well prepared for all her sessions to handle all types of queries and that speaks volumes about her.",
    },
    {
      name: "Daksh Malhotra",
      image: "https://avatar.iran.liara.run/public/38",
      // location: "California, USA",
      stars: 5,
      headline:
        "From Failing Grades to 99/100 in Boards - Pursuing Btech in AI",
      review: `I had an amazing experience with mam, I thought of leaving computer science as I couldn't perform well in school then my mom told me about joining a tuition to see if I really can not pursue computers. After only a few months of classes my confidence was restored and even in boards I got 99 out of 100 all due credit to mam. Now I am pursuing btech in ai only from mahindra university.`,
    },
    {
      name: "Nehal Agrawal",
      image:"https://avatar.iran.liara.run/public/41",
      // location: "California, USA",
      stars: 5,
      headline: "Helped Me Overcome My Fear of Computer Science",
      review: "Sarita ma'am is an amazing teacher , the way she explained topics were very clear and concise . She helped me get over my fear of the subject.The credit of me taking computer science engineering as my degree goes to her",
    }
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
