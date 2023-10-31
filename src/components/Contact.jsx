
import React, { useState } from "react";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    email:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:hipowerbatteries@gmail.com?subject=Message from ${
      formData.name
    }&body=${encodeURIComponent(
      formData.message +
        "\nName: " +
        formData.name +
        "\nContact no: " +
        formData.phone +
        "\nEmail address: " +
        formData.email +
        "\nMessage: " +
        formData.message
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
    <Navbar/>
      <div
        className={` flex justify-center max-md:flex-col mx-auto `}
      >
        <form
          onSubmit={handleSubmit}
          className="w-1/2 max-md:w-full bg-white flex flex-col mt-8 md:mt-0 px-5 sm:px-10 sm:py-10"
        >
          <h1 className="text-gray-900 text-3xl font-medium title-font ">
            Contact Us
          </h1>
          <p className="leading-relaxed mb-2 text-gray-600">
            Connect with Us - Your Feedback Matters!
          </p>
          <div className="relative mb-2">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2 ">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">
              Mobile No
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2 ">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-2">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
            type="Submit"
            className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
        <div className="w-1/2 px-5 sm:px-10 max-md:w-full py-10 bg-white text-black">
          <h1 className="text-3xl">Hi-Power Metal Industries</h1>
          <h1 className="text-xl ">
            Adhartal Industrial Estate, Kanchapur, Adhartal, Jabalpur - 482004
          </h1>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3667.2428783458986!2d79.9611152!3d23.1978177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981afa425fd2c53%3A0x31d64e99016e57de!2sIndustrial%20product%20corporation!5e0!3m2!1sen!2sin!4v1693906430835!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[28rem] rounded-xl overflow  shadow-md  shadow-gray-400"
            ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;