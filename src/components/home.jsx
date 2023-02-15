import React from "react";
import profile from "../assets/heroimage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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
            I am Full Stack Developer!!
          </h2>
          <p className="text-white-600 py-4 max-w-md">
            react .js developer , studied from Amity University , Noida having
            skill in web , currently , i am working on application using the
            react.js , Tailwind , next.js and firebase. planning to build more
            stuff , which might help world to be a better place.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
            rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Experience
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </button>
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
