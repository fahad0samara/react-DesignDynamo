import React from "react";

const PricingCard = ({ bg, text, img, price, button, title }) => {
  return (
    <div
      className={`p-10 space-y-5 rounded-md bg-${bg} shadow-2xl text-${text}`}
    >
      <h1 className="text-xl font-semibold">{title}</h1>
      <h1 className="text-4xl font-bold">
        ${price} <span className="font-thin">/month</span>
      </h1>
      <p>
        Choose the {title.toLowerCase()} plan and enjoy the following benefits:
      </p>
      <ul className="space-y-5">
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>Access to premium features</span>
        </li>
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>24/7 customer support</span>
        </li>
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>Regular updates and improvements</span>
        </li>
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>Access to our knowledge base</span>
        </li>
        <li className="flex space-x-2">
          <img src={img} alt="" className="w-8 h-8" />
          <span>And much more...</span>
        </li>
      </ul>
      <button className={`px-5 py-2 ${button} font-semibold rounded-full`}>
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
