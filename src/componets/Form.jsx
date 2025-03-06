import React, { useState } from "react";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  
  const openModal = (e) => {
    e.preventDefault(); 
    setIsModalOpen(true);
  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen">
  
      <div
        className="absolute inset-0 bg-cover bg-center  pt-10"
        style={{
          backgroundImage: 'url("logo.jpg")', 
        }}
      >
     
        <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
          <h1>Your donation can be a lifeline for someone in need!</h1>
        </div>

       
        <div className="min-h-screen bg-gradient-to-r from-pink-500 to-red-500 text-white">
          <div className="container mx-auto px-6 py-12">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Save Lives - Become a Blood Donor Today!</h1>
              <p className="text-lg mb-6">Your donation can save up to three lives. Register now to receive notifications about blood donation drives.</p>
              <p className="text-sm">Just a few minutes of your time can make a huge difference. Let’s work together to make the world a healthier place!</p>
            </div>
          </div>
        </div>

      
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button
            onClick={openModal} 
            className="bg-red-900 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-red-500"
          >
            Register (Iyandikishe)
          </button>
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-lg"
            >
              ✕
            </button>

            
            <h2 className="text-3xl font-bold text-black">
              Register (Iyandikishe)<span className="text-blue-500"></span>
            </h2>

            
            <div className="mt-4">
              <label className="text-black-600 text-sm">EMAIL</label>
              <input
                type="email"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="hello@example.com"
              />
            </div>
            <div className="mt-4">
              <label className="text-black-600 text-sm">PASSWORD</label>
              <input
                type="password"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="IJAMBOBANGA RYAWE"
              />
            </div>

            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <input
                type="text"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="USERNAME (IZINA RYO GUKORESHA)"
              />
              <input
                type="text"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="FIRST NAMERY(IZINA RYAWE)"
              />
              <input
                type="text"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="LAST NAME (IZINA RY'UMURYANGO)"
              />
              <input
                type="text"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="DISTRICT (AKARERE UVUKAMO)"
              />
              <input
                type="text"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="RESIDENCE (AKARERE UTUYEMO)"
              />
              <input
                type="text"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="PHONE (NOMERO YA TELEPHONE)"
              />
            </div>

            
            <div className="mt-6 flex items-start">
              <input type="checkbox" className="mt-1" />
              <p className="text-gray-600 text-sm ml-2">
                By clicking you agree to accept our{" "}
                <span className="font-bold">terms & conditions</span>, that you are over 18 and aware of our{" "}
                <span className="font-bold">responsible gaming policy</span>.
              </p>
            </div>

            
            <div className="mt-6 flex justify-between items-center">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <span className="font-bold cursor-pointer text-black">Sign In (Injira)</span>
              </p>
              <button className="bg-white-500 text-black px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-red-500">
                OPEN ACCOUNT (FUNGURA)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
