import React, { useState } from "react";
import image1 from "../assets/image_5.jpg";
import image2 from "../assets/image_6.jpg";
import image3 from "../assets/image_7.jpg";
import intro from "../assets/image_2.jpg"; 
import image0  from "../assets/image_1.jpg";
import welcome from "../assets/image_13.webp";

const Home = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isNeverDonateOpen, setIsNeverDonateOpen] = useState(false);
  const [isWait, setIsWait] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
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


    <div className="flex items-center min-h-screen">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center p-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <img src="src/assets/logo.jpg" alt="" className="w-50 h-50 mr-2" />
          </div>
          <h2 className="text-black text-2xl font-bold mb-10">Give Blood, Give Hope!</h2>
          <h1 className="text-black text-2xl  mb-6">
          Thank you for visiting our site. By donating blood, you're helping save lives and make a real difference in your community. 
          Join us today and become a lifesaver!
          </h1>
        </div>
        <div className="lg:w-1/2 relative overflow-hidden rounded-xl ml-4">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-200 opacity-20 rounded-xl" /> 
          <img
            src="src/assets/image_13.webp" 
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>





      
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
              onClick={() => setIsContentVisible(!isContentVisible)}>
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

      <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${image0})`}}>

      <div className="max-w-xl mx-auto mt-6 p-4 bg-white shadow-md rounded-lg backdrop-opacity-100">
      <h2 className="text-2xl font-semibold">Criteria for blood donation</h2>
      <p className="text-gray-700 mt-2">
        Donating blood is voluntary and unpaid. Below are summarized eligibility criteria:
      </p>

      
      <div className="mt-4 border rounded-lg">
        <button
          onClick={() => setIsBasicOpen(!isBasicOpen)}
          className="w-full flex justify-between items-center p-3 bg-blue-300 text-white font-semibold rounded-t-lg"
        >
          <span>Basic</span>
          <span>{isBasicOpen ? "➖" : "➕"}</span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isBasicOpen ? "max-h-40 p-3" : "max-h-0 p-0"} bg-gray-100 rounded-b-lg`}>
          {isBasicOpen && (
            <ul className="list-disc pl-5 text-gray-800">
              <li>To be in good health at the time of donating blood</li>
              <li>Age: 18-60 years</li>
              <li>Weight: 50 kgs and above</li>
            </ul>
          )}
        </div>
      </div>

      
      <div className="mt-3 border rounded-lg">
        <button
          onClick={() => setIsNeverDonateOpen(!isNeverDonateOpen)}
          className="w-full flex justify-between items-center p-3 bg-blue-300 text-white font-semibold rounded-t-lg"
        >
          <span>Never donate blood if</span>
          <span>{isNeverDonateOpen ? "➖" : "➕"}</span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isNeverDonateOpen ? "max-h-40 p-3" : "max-h-0 p-0"} bg-gray-100 rounded-b-lg`}>
          {isNeverDonateOpen && (
            <ul className="list-disc  pl-5 text-gray-800">
              <li>Have ever had a positive test for HIV (AIDS virus),</li>
              <li>Have ever had a positive test for Hepatitis B orC,</li>
              <li>Have ever injected recreational drugs,</li>
              <li>You are homosexual persons.</li>
            </ul>
          )}
        </div>
      </div>

      <div className="mt-3 border rounded-lg">
        <button
          onClick={() => setIsWait(!isWait)}
          className="w-full flex justify-between items-center p-3 bg-blue-300 text-white font-semibold rounded-t-lg"
        >
          <span>Wait for 6 months if</span>
          <span>{isWait ? "➖" : "➕"}</span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isWait ? "max-h-40 p-3" : "max-h-0 p-0"} bg-gray-100 rounded-b-lg`}>
          {isWait && (
            <p className="text-gray-700">
              <li>If you have recently had a tattoo or body piercing you cannot donate for 6 months from the date of the procedure,</li>
              <li>If you have visited the dentist for a minor or major procedure or any other surgical interventions,</li>
              <li>you must wait 6 months to donate blood,</li> 
              <li>You must not give blood If you engaged in “atrisk” sexual activity in the past 6 months.</li> 
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 border rounded-lg">
        <button
          onClick={() => setIsFemale(!isFemale)}
          className="w-full flex justify-between items-center p-3 bg-blue-300 text-white font-semibold rounded-t-lg"
        >
          <span>For female</span>
          <span>{isFemale ? "➖" : "➕"}</span>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isFemale ? "max-h-40 p-3" : "max-h-0 p-0"} bg-gray-100 rounded-b-lg`}>
          {isFemale && (
            <ul className="list-disc  pl-5 text-gray-800">
              <li>Do not donate while you are in menstrual periods until 7 days after the last day of your periods,</li>
              <li>Do not donate during the pregnancy,</li>
              <li>While breast-feeding wait at least 9 months from the day of giving birth.</li>
            </ul>
          )}
        </div>
      </div>
    </div>
    </div>

    
      

      
      <div className="flex flex-1/3 justify-center gap-3 p-6 pt-20">
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
