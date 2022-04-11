import React from "react";
import {Link} from 'react-router-dom';
const SideNav = () => {
  return (
    <div>
      <div className="w-1/6 h-full shadow-md bg-white px-1">
        <ul>
          <li>
            <Link
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              to="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Aim
            </Link>
          </li>
          <li  >
            <Link
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              to="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Theory
            </Link>
          </li>
          <li  >
            <Link
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              to="/pretest1"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Pre-Test
            </Link>
          </li>
          <li  >
            <Link
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              to="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Procedure
            </Link>
          </li>
          <li  >
            <Link
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              to="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Simulation
            </Link>
          </li>
          <li  >
            <Link
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              to="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              Post Test
            </Link>
          </li>
          <li  >
            <Link
              className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              to="/"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              References
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
