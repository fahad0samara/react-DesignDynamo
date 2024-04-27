import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-20 px-5 space-y-10 md:space-y-0">
      <ServicesCard
        src="webs_dev.svg"
        title="Website Design"
        description="Create stunning and responsive websites that leave a lasting impression."
      />
      <ServicesCard
        src="dev.svg"
        title="Development"
        description="Turn your ideas into reality with our expert development services."
      />
      <ServicesCard
        src="mobile_dev.svg"
        title="App Design"
        description="Design and develop engaging mobile applications for iOS and Android."
      />
    </div>
  );
};

export default Services;
