import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white p-2 m-2">
      <span className="text-black text-2xl font-semibold" >Coding Academy</span>
      <nav className="flex space-x-8 mx-2">
        <Link to="/" className="text-black hover:text-gray-700">
          Home
        </Link>
        <Link to="/About" className="text-black hover:text-gray-700">
          About
        </Link>
        <Link to="/Testimonies" className="text-black hover:text-gray-700">
          Testimonies
        </Link>
        <Link to="/Contact" className="text-black hover:text-gray-700">
          Contact
        </Link>
      </nav>
      <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
        Book Demo
      </button>
    </header>
  );
};

export default Header;

/* <li><Link to="/about">About</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/book-demo">Book Demo</Link></li> */
