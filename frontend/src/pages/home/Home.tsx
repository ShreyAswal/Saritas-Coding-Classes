// import React from 'react'

import LargeNav from "../../components/headers/LargeNav";
import LandingPage from "../../components/LandingPage";
import Stats from "../../components/Stats";

const Home = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex items-start justify-between md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
        <div className="lg:w-[20%] md:w-none sm:w-none h-[100vh] pt-2 px-2 border-r border-r-gray-500 top-0 left-0 sticky lg:block md:block sm:hidden">
          <LargeNav />
        </div>
        <div>
          <LandingPage />
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Home;
