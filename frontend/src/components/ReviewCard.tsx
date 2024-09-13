import React from "react";

const ReviewCard = () => {
  return (
    <div className="bg-gray-100 min-h-96 min-w-60 max-w-96 my-5 mx-8 p-6 rounded shadow-xl hover:shadow-2xl hover:scale-95 hover:transition-all backdrop-blur-3xl flex flex-col text-center justify-center cursor-default">
      <div className="flex flex-col justify-center items-center">
        <img
          className="rounded-full h-20 w-20 mt-16 mb-1"
          src="https://via.placeholder.com/150"
          alt="Student Image"
        ></img>
        <h1 className="text-gray-600 font-medium">Chirag Chavda</h1>
        <p className="text-gray-500 mt-1">- California, USA</p>
      </div>
      <div className="mt-16">
        <p className="p-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          inventore maxime totam beatae hic laborum impedit odio aut accusamus
          doloribus.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
