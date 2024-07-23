import React from "react";

const HeroContent = () => {
  return (
    <div className="px-5 my-16 lg:my-5 lg:px-20 flex lg:flex-row flex-col items-center">

      {/* Content of hero section */}
      <div className="content pl-6 lg:w-[50%]">
        <h1 className="text-3xl text-center lg:text-6xl font-bold lg:text-left">
          The <strong className="text-blue-600">Ultimate</strong> Categorized{" "}
          <strong className="text-blue-600">To-Do</strong> App.
        </h1>
      </div>

      {/* Image of hero section */}
      <div className="image flex justify-end lg:w-[50%] ">
        <img className="hue-rotate-60 h-[90%] w-[90%] " src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default HeroContent;
