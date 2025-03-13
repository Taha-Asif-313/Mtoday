import React from "react";

const HeroContent = () => {
  return (
    <div className="my-36 lg:gap-0 gap-5 lg:min-h-screen lg:my-0 lg:px-24 px-5 flex lg:flex-row flex-col-reverse justify-center items-center">
      {/* Content of hero section */}
      <div className="content w-full h-[50%] lg:h-[100%] lg:w-[50%]">
        <h1 className="text-3xl text-center lg:text-6xl font-bold lg:text-left">
          The <strong className="text-primary">Ultimate</strong> Categorized{" "}
          <strong className="text-primary">To-Do</strong> App.
        </h1>
      </div>

      {/* Image of hero section */}
      <div className="image flex justify-center lg:justify-end lg:w-[50%] w-full ">
        <img
          className="hue-rotate-[130deg] h-[90%] w-[90%] "
          src="./hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroContent;
