import React from "react";
import profile from "../assets/heroimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b
    from-blue-400 via-black-300 to-cyan-600 text-white"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-7xl font-bold text-blue-800">
            Hi ! , I am Ayush Varshney (react.js developer)
          </h2>
          <p className="text-white-600 py-4 max-w-md">
            Building apps and web application form scratch here i am used to
            with certain web technolgies just like React.JS i am open to work
            for any role offered here on. Aiming for more oppertunities from
            across the world.
          </p>
          <div>
            <Link to="experience" smooth duration={500}>
              <button
                to="experience"
                className="group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Experience
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="my profile"
            className="rounded-2xl mx-auto
          w-2/3 md:w-full max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default home;
