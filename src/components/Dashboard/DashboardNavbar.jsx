import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const DashboardNavbar = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-red-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link to="/" className="text-xl font-bold text-white">Blood Donation</Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-red-500">Home</Link>
            <Link to="/About" className="text-white hover:text-red-500">About</Link>
            <Link to="/Services" className="text-white hover:text-red-500">Services</Link>
            <Link to="/Blogs" className="text-white hover:text-red-500">Blogs</Link>
            <Link to="/Contacts" className="text-white hover:text-red-500">Contacts</Link>
          </div>

          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden bg-red-300 shadow-md">
          <Link to="/" className="block px-4 py-2 text-black hover:bg-gray-100">Home</Link>
          <Link to="/About" className="block px-4 py-2 text-black hover:bg-gray-100">About</Link>
          <Link to="/Services" className="block px-4 py-2 text-black hover:bg-gray-100">Services</Link>
          <Link to="/Contact" className="block px-4 py-2 text-black hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
