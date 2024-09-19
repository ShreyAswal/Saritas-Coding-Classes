// import React from "react";
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  image: string;
  stars: number;
  headline: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({name,image, stars, headline, review}) => {
  
  return (
    <div className="bg-gray-100 min-h-96 min-w-60 max-w-96 my-5 mx-8 p-6 rounded shadow-xl hover:shadow-2xl hover:scale-95 hover:transition-all backdrop-blur-3xl flex flex-col text-center justify-center cursor-default">
      <div className="flex flex-col justify-center items-center">
        <img
          className="rounded-full h-20 w-20 mt-12 mb-1"
          src={image}
          alt="Student Image"
        ></img>
        <h1 className="text-gray-600 font-medium">{name}</h1>
        {/* <p className="text-gray-500 mt-1">- California, USA</p> */}
      </div>
      <div className="mt-10">
        <div className="flex justify-center">
          {[...Array(stars)].map((_: undefined, i) => {
            return <FaStar key={i} className="text-blue-400 h-8 w-8" />;
          })}
          {/* <h1>Stars here!</h1> */}
        </div>
        <h2 className=" font-semibold text-xl mt-3">{headline}</h2>
        <p className="p-2 mt-3">
          {review}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
