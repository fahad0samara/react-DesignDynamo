import React from "react";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="p-5 grid grid-cols-2 md:grid-cols-7 gap-8">
        <div className="col-span-2 space-y-5">
          <h1>DesignDynamo</h1>
          <p className="text-sm text-gray-400">
            We are passionate about creating digital experiences that inspire
            and engage. Let us help you bring your ideas to life!
          </p>
        </div>
        <div>
          <h2 className="font-bold py-2">About Us</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="/">Our Story</a>
            <a href="/">Mission</a>
            <a href="/">Team</a>
            <a href="/">Careers</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold py-2">Services</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="/">Website Design</a>
            <a href="/">Development</a>
            <a href="/">App Design</a>
            <a href="/">Digital Marketing</a>
          </div>
        </div>
        <div>
          <h2 className="font-bold py-2">Resources</h2>
          <div className="flex flex-col space-y-4 text-sm text-gray-400">
            <a href="/">Blog</a>
            <a href="/">FAQs</a>
            <a href="/">Support</a>
            <a href="/">Contact</a>
          </div>
        </div>

        <div className="col-span-2 space-y-5">
          <h2 className="font-bold">Get In Touch</h2>
          <p className="text-sm text-gray-400">
            Have a question or want to discuss a project? Feel free to contact
            us.
          </p>
          <p>
            <a
              href="/contact"
              className="px-5 py-2 rounded-full text-white bg-green-500 font-semibold"
            >
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
