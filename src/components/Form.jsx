import React, { useState } from "react";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false); // State for account creation status

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAccountCreated(false); 
  };

  const handleAccountCreation = () => {
    setIsAccountCreated(true); 
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center pt-10">
        <div className="flex flex-col absolute inset-0 text-center justify-center items-center text-black text-4xl font-bold mt-10">
          <h1>Your donation can be a lifeline for someone in need!</h1>
          <h1 className="text-4xl pt-10 font-bold mb-4">
            Save Lives - Become a Blood Donor Today!
          </h1>
          <p className="text-lg pt-10 mb-6">
            Your donation can save up to three lives. Register now to receive notifications about blood donation drives.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <button
            onClick={openModal}
            className="bg-red-900 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-red-500">
            Register (Iyandikishe)
          </button>
        </div>
      </div>

      {isModalOpen && !isAccountCreated && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-lg">
              ✕
            </button>

            <h2 className="text-3xl font-bold text-black text-center">
              Register (Iyandikishe)
            </h2>

            <div className="mt-4">
              <label className="text-black text-sm">EMAIL</label>
              <input
                type="email"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="hello@gmail.com(Valid email)"
              />
            </div>
            <div className="mt-4">
              <label className="text-black text-sm">PASSWORD</label>
              <input
                type="password"
                className="w-full border-b border-black py-2 outline-none"
                placeholder="IJAMBOBANGA RYAWE"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <input type="text" className="w-full border-b border-black py-2 outline-none" placeholder="USERNAME (IZINA RYO GUKORESHA)" />
              <input type="text" className="w-full border-b border-black py-2 outline-none" placeholder="FIRST NAME (IZINA RYAWE)" />
              <input type="text" className="w-full border-b border-black py-2 outline-none" placeholder="LAST NAME (IZINA RY'UMURYANGO)" />
              <input type="text" className="w-full border-b border-black py-2 outline-none" placeholder="DISTRICT (AKARERE UVUKAMO)" />
              <input type="text" className="w-full border-b border-black py-2 outline-none" placeholder="RESIDENCE (AKARERE UTUYEMO)" />
              <input type="text" className="w-full border-b border-black py-2 outline-none" placeholder="PHONE (NOMERO YA TELEPHONE)" />
            </div>

            <div className="mt-6 flex items-start">
              <input type="checkbox" className="mt-1" />
              <p className="text-gray-600 text-sm ml-2">
                By clicking, you agree to accept our <span className="font-bold">terms & conditions</span>, that
                you are over 18 and aware of our <span className="font-bold">responsible gaming policy</span>.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleAccountCreation}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-red-700">
                Open Account (Fungura)
              </button>
            </div>
          </div>
        </div>
      )}

      {isAccountCreated && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-3xl font-bold text-center text-red-500">
              Account Creation Successful!
            </h2>
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-600">Thank you for registering. You will receive updates about upcoming donation drives.</p>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-green-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
