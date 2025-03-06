import React from "react";

const Contacts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-300">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg">
        {/* Black Contact Card */}
        <div className="bg-black text-white p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

          {/* Contact Details */}
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

        {/* Decorative Chat Bubbles */}
        <div className="absolute bottom-0 right-0 transform translate-x-6 translate-y-6">
          <div className="bg-white-400 p-3 rounded-full text-black shadow-md">💬</div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;