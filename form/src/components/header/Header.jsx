import React from "react";
import photo from "../../assets/images/log-in.png";

const Header = () => {
  return (
    <div className="py-3 h-full">
      <div className="container bg-blue-500 mt-16 p-10 mx-auto w-3/4 flex justify-between items-center">
        <div className="w-1/2 flex justify-center">
          <img className="w-96 mt-20" src={photo} alt="sorry" />
        </div>
        <div className="max-w-md mx-auto bg-gray-200 p-8 rounded-lg shadow-lg">
          <form action="" className="space-y-6">
            <h3 className="text-3xl font-semibold text-center text-gray-800">
              Please Enter Your Home
            </h3>
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-md font-bold text-gray-700"
              >
                Enter Your Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-md font-bold text-gray-700"
              >
                Enter Your Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-md font-bold text-gray-700"
              >
                Enter Your Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="Your Password"
              />
            </div>
            <button
              type="submit"
              className="w-full font-bold px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
