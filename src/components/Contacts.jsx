import React from "react";
import image1 from "../assets/image_15.jpg";  

const Contacts = () => {

  return (
    <div
      className="flex justify-center items-center min-h-screen pt-20"
      style={{
        backgroundImage: `url(${image1})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', 
      }}
    >
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-4xl">
        
        <div className="p-6">
          <div className="bg-black text-white p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-yellow-400 text-xl">📍</span>
                <p>123 Everywhere, Every City</p>
              </div>
              <hr className="border-gray-500" />

              <div className="flex items-center space-x-4">
                <span className="text-red-400 text-xl">📞</span>
                <p>0780000000</p>
              </div>
              <hr className="border-gray-500" />

              <div className="flex items-center space-x-4">
                <span className="text-red-400 text-xl">✉️</span>
                <p>life@blooddonation.com</p>
              </div>
              <hr className="border-gray-500" />

              <div className="flex items-center space-x-4">
                <span className="text-yellow-400 text-xl">🌍</span>
                <p>www.blooddonation.rw</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
