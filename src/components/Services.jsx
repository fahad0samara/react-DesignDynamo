import React from "react";

const ServicesCard = ({ src, title, description }) => {
  return (
    <div className="md:w-[300px] p-10 dark:bg-gray-600/30 space-y-5 flex flex-col items-center text-center rounded-xl">
      <img src={src} alt={title} />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;
