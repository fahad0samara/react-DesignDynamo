import React from "react";
import PricingCard from "./PricingCard";

const PricePlan = () => {
  return (
    <div className="py-20">
      <div className="md:w-1/3 m-auto text-center space-y-2">
        <h1 className="text-5xl font-semibold">
          Find the Perfect Plan for Your Needs
        </h1>
        <p className="text-sm text-gray-400">
          Whether you're just starting out or you need advanced features, we have
          a plan that's right for you.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-32 justify-items-center p-10">
        <PricingCard
          bg="white dark:bg-green-900"
          title="Basic"
          text="black"
          img="/check_green.svg"
          price="19"
          button="bg-green-500 text-white"
        />
        <PricingCard
          bg="green-500"
          title="Standard"
          text="white"
          img="/check_white.svg"
          price="29"
          button="bg-white text-green-500"
        />
        <PricingCard
          bg="white dark:bg-green-900"
          title="Advanced"
          text="black"
          img="/check_green.svg"
          price="39"
          button="bg-green-500 text-white"
        />
      </div>
    </div>
  );
};

export default PricePlan;
