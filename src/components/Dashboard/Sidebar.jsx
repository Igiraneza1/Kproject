import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FaCommentAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiLogoutCircleRFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="bg-red-900 text-white w-64 h-screen pt-18 gap-5">
      

      <ul className="space-y-4 flex-grow">
        <li>
          <Link to="/Dahome" className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded-md">
            <MdDashboard className="text-xl" />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/Registered" className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded-md">
            <IoIosPeople className="text-xl" />
            <span>Registered</span>
          </Link>
        </li>

        <li>
          <Link to="/Message" className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded-md">
            <FaCommentAlt className="text-xl" />
            <span>Message</span>
          </Link>
        </li>

        <li className="mt-auto"> 
          <Link to="/" className="flex items-center space-x-2 hover:bg-red-700 p-2 rounded-md">
            <RiLogoutCircleRFill className="text-xl" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
