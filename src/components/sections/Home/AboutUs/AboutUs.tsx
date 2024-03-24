import { Button } from "antd";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="md:flex items-center justify-center w-full md:h-[60vh] h-full mb-16">
      <div className="w-full md:w-1/2 bg-[#ee945c] md:h-[60vh] h-full ">
        <div className="md:mx-20 mx-7 mt-8 md:mt-24 py-4 md:py-0">
          <h2 style={{ color: "#43121d" }} className="text-3xl font-semibold">
            What Do You Know About Us?
          </h2>
          <p className="mt-3 mb-4">
            SHR Car Rental: Your trusted travel companion. We provide
            top-quality vehicles and exceptional service to make your journey
            memorable. With a commitment to excellence and customer
            satisfaction, we ensure a seamless rent experience. Explore with
            confidence of SHR Car Rental.
          </p>
          <div className="mt-4 mb-3">
            <Button type="primary">Learn More</Button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          className="md:h-[60vh] h-full  w-full"
          src="https://i.ibb.co/jv13LMN/istockphoto-1208725993-612x612.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
