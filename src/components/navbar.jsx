import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
// import classes from "./navbar.module.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "contact",
    },
    {
      id: 4,
      name: "experience",
    },
  ];
  return (
    <div
      className="flex justify-between items-center w-full h-20 
   px-4 text-white bg-gradient-to-r from-cyan-400 via-purple-300 to to-blue-500 relative "
    >
      <div>
        <h1 className="text-5xl font-signature ml-2">Ayush </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize
            font-medium text-white-500 hover:scale-105 duration-200"
          >
            <Link to={link.name} smooth duration={500}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 
      w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link.name}
                smooth
                duration={500}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
