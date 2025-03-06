import React, { useState } from "react";
import image1 from "../assets/image_5.jpg";
import image2 from "../assets/image_6.jpg";
import image3 from "../assets/image_7.jpg";
import intro from "../assets/image_2.jpg"; 

const Home = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const cards = [
    {
      title: "Start Your RapidPass",
      description:
        "Donating blood today? Complete your pre-reading and health history questions online using any device, before visiting your blood drive location.",
      
      imageUrl: image1,
    },
    {
      title: "Am I Eligible to Donate Blood?",
      description:
        "Are you eligible for blood donation? Find out about the eligibility requirements to donate blood today. Learn about general health, travel, medications, tattoos, and more.",
      
      imageUrl: image2,
    },
    {
      title: "Help Sickle Cell Patients",
      description:
        "Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need.",
      imageUrl: image3,
    },
  ];

  return (
    <div>
      
      <div className="flex items-center justify-between h-142 px-6 sm:px-10 pt-15">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold mb-2">
            Ensuring a Steady and Life-Saving Supply
          </h1>
          <p className="text-lg">
            Many people are unaware of where to donate blood, which can limit their willingness to participate.
          </p>
          
          <div className="mt-4 flex space-x-2">
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg"
              onClick={() => setIsContentVisible(!isContentVisible)}
            >
              READ MORE
            </button>
          </div>
          
          {isContentVisible && (
            <div className="mt-4 text-lg text-gray-800">
              <p>
                By donating blood, you're giving life-saving help to patients in need. This act can help save lives
                and improve health outcomes. Blood donations can assist in various emergencies, surgeries, and even
                support for chronic conditions.
              </p>
            </div>
          )}
        </div>

      
        <div className="w-1/2">
          <img
            src={intro}
            alt="Blood Donation"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      
      <div className="flex flex-wrap justify-center gap-3 p-6 pt-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md w-1/3 sm:w-1/3 bg-white p-4 text-center"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
