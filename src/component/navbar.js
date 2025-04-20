import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="bg-transparent backdrop-blur-sm"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(26, 53, 36, 0.9) 2%, rgba(109, 140, 84, 0.9) 60%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/skinovation.png"
              alt="Skinovation Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <ul className="flex space-x-12 text-xl font-bold text-gray-800">
          <li className="hover:text-white cursor-pointer">
            <Link to="/">About</Link>
          </li>
          <li className="hover:text-white cursor-pointer">
            <Link to="/ingredients-checker">Ingredients Checker</Link>
          </li>
          <li className="hover:text-white cursor-pointer">
            <Link to="/forum">Forum Community</Link>
          </li>
          <li className="hover:text-white cursor-pointer">
            <Link to="/signin">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
