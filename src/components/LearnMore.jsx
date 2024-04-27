import React from "react";

const LearnMore = () => {
  return (
    <div className="py-20 px-5 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/3">
        <img src="/hero_img.png" alt="Learn More Image" />
      </div>
      <div className="md:w-1/2 space-y-5">
        <p className="text-green-400">Welcome to our Knowledge Base!</p>
        <h1 className="text-6xl font-semibold">
          Explore the world of digital design with us.
        </h1>
        <p className="text-gray-300">
          Whether you are a beginner or an expert, we have resources to help you
          grow your skills and stay updated with the latest trends.
        </p>
        <p className="text-gray-300">
          Join us on our journey to discover, learn, and create amazing digital
          experiences together!
        </p>
        <button className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
