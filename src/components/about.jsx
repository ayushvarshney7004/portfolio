import React from "react";

const about = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-cyan-600 via-blue-400 to-purple-600 text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8 ">
          <p
            className="text-4xl font-bold inline border-b-4
          border-orange-300"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20 ">
          react .js developer , studied from Amity University , Noida having
          skill in web , currently , i am working on application using the
          react.js , Tailwind , next.js and firebase. planning to build more
          stuff , which might help world to be a better place.
        </p>
        <br />
        <p className="text-xl">
          react .js developer , studied from Amity University , Noida having
          skill in web , currently , i am working on application using the
          react.js , Tailwind , next.js and firebase. planning to build more
          stuff , which might help world to be a better place.
        </p>
      </div>
    </div>
  );
};

export default about;
