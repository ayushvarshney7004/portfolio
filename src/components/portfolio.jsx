import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import useState from "../assets/portfolio/usestate.jpg";

const portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-600 to-black w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Experience
          </p>
          <p className="py-6">Check out Some of My Work..</p>
        </div>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 
        px-12 sm:px-0"
        >
          <div>
            <img src={reactWeather} alt="project about weather" />
            <div>
              <button>Demo</button>
              <button>code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
