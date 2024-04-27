import React from "react";

const Watch = () => {
  return (
    <div className="py-20 px-5 flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2 space-y-5">
        <p className="text-green-400">Check out our latest video!</p>
        <h1 className="text-5xl font-semibold">
          Explore the World of Digital Design with Us
        </h1>
        <p className="text-gray-300">
          Join us on a journey through the exciting world of digital design and
          discover how we can help you bring your ideas to life.
        </p>
        <button className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold">
          Watch Now
        </button>
      </div>
      <div className="md:w-1/3">
        <img src="/00.jpg" alt="Watch Image" />
      </div>
    </div>
  );
};

export default Watch;
