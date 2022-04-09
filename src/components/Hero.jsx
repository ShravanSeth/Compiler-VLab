import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="px-2 py-32 bg-white md:px-0">
      <div className="container items-center px-8 mx-8">
        <h1 className="text-4xl">System Software</h1>
      </div>
      <div className="container items-center mt-10 mx-10 pl-20 pr-20">
        <h2 className="text-lg text-mono">Programs</h2>
        <div className="flex justify-left mt-10">
          <div className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
            <Link
              to="/prog1"
              className=" block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer ">
              Program 1
            </Link>
            <Link
              to="/"
              className=" block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer ">
              A second link item
            </Link>
            <Link
              to="/"
              className=" block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer ">
              A second link item
            </Link>
            <Link
              to="/"
              className=" block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer ">
              A second link item
            </Link>
            <Link
              to="/"
              className=" block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer ">
              A second link item
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <table className="table-auto mx-8 mt-10 text-base text-xl">
          <thead>
            <tr>
              <th className="mt-5">Programs</th>
            </tr>
          </thead>
          <tbody className="rounded-full border-4 ">
            <tr>
              <td><Link to="/">Is Comment or no</Link></td>
            </tr>
            <tr>
              <td><Link to="/">Is Comment or no</Link></td>
            </tr>
            <tr>
              <td><Link to="/">Is Comment or no</Link></td>
            </tr>
          </tbody>
        </table> */
}
