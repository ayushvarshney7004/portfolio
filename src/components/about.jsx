import React from "react";

const about = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-cyan-600 via-black-400 to-cyan-600 text-white"
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
          I solve problems in ways that are understandable. At Amity University,
          where I am completing my junior year in the College of Engineering. I
          learned how to solve modern-day problems with basic strategies.
          *concentrate on web development and software development, databases.
          *currently learning React and hope will complete in next few months.
          *Also interested in business prospects and modern-day solutions. I
          hope to complete my skills and get real-life experience and important
          technical skills. I am not at my finest quality but strive for one
          someday.
        </p>
        <br />
        {/* <p className="text-xl">
        </p> */}
      </div>
    </div>
  );
};

export default about;
