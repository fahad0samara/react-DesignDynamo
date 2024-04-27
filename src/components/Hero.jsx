import React from "react";

const Hero = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row justify-between items-center px-5">
      <div className="md:w-1/2 space-y-5">
        <p className="text-lg">Welcome to our website!</p>
        <h1 className="text-7xl font-semibold">
          We are <span className="text-green-500 font-bold">Creative Minds</span> 
          Designing the Future
        </h1>
        <p>
          We are passionate about creating digital experiences that inspire and
          engage. Let us help you bring your ideas to life!
        </p>
        <button className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold">
          Get Started
        </button>
      </div>
      <div>
        <img src="/hero_img.svg" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
