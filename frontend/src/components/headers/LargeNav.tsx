import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SiGooglemeet } from "react-icons/si";
import aboutuspic from "../../../public/aboutuspicwithbg.png";
import testimoniespic from "../../../public/testimonialpic.svg";

const LargeNav = () => {
  const sidebarItems = [
    { name: "Home", link: "/", icon: <FaHome className="w-10 h-10"/> },
    {
      name: "About",
      link: "/About",
      icon: <img src={aboutuspic} className="w-10 h-10"/>,
    },
    {
      name: "Testimonies",
      link: "/Testimonies",
      icon: <img src={testimoniespic} className="w-10 h-10" />,
    },
    {
      name: "Contact",
      link: "/Contact",
      icon: <SiGooglemeet className="w-10 h-10"/>,
    },
  ];

  return (
    // <header className="w-full flex justify-between items-center bg-white p-2 m-2">
    //   <span className="text-black text-2xl font-semibold">Coding Academy</span>
    //   <nav className="flex space-x-8 mx-2">
    //     <Link to="/" className="text-black hover:text-gray-700">
    //       Home
    //     </Link>
    //     <Link to="/About" className="text-black hover:text-gray-700">
    //       About
    //     </Link>
    //     <Link to="/Testimonies" className="text-black hover:text-gray-700">
    //       Testimonies
    //     </Link>
    //     <Link to="/Contact" className="text-black hover:text-gray-700">
    //       Contact
    //     </Link>
    //   </nav>
    //   <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
    //     Book Demo
    //   </button>
    // </header>
    <div className="w-full h-auto flex items-center flex-col gap-y-2">
      {/* <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group"
          >
            <FaHome className="text-2xl" />
            <p className="text-lg lg:block md:hidden sm:hidden hidden">Home</p>
          </Link>

          <div
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group cursor-pointer"
            onClick={openModal}
          >
            <FaPlusSquare className="text-2xl" />
            <p className="text-lg lg:block md:hidden sm:hidden hidden">
              Create Post
            </p>
          </div> */}
          <Link to="/" className="mb-10 px-4 py-10 lg:block sm:hidden md:hidden hidden">
          <h2
            className="w-28 h-auto text-2xl font-bold text-center"
          >Sarita's<br/></h2><h2 className="w-30 h-auto font-bold">Coding Classes!</h2>
        </Link>
      {sidebarItems.map((item) => (
        <Link
          to={item.link}
          key={item.name}
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-300 rounded-md ease-out duration-500 group"
        >
          {item.icon}

          <p className="text-lg lg:block md:hidden sm:hidden hidden">
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default LargeNav;
