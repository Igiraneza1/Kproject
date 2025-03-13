import React from "react";

const About = () => {
  const about = [
    { title: "BE THE BEST", description: "Strive to provide the highest quality and safety in blood donation, ensuring a reliable and life-saving supply.", icon: "🌟" },
    { title: "GREAT SUPPORT", description: "Offer strong support to donors and healthcare teams, making sure everyone involved feels valued and appreciated.", icon: "📞" },
    { title: "BE DESIGNER", description: "Focus on creating innovative and user-friendly designs that make a positive impact.", icon: "✏️" },
    { title: "DELIVERY", description: "Ensure timely and efficient delivery of services or products, meeting expectations and needs.", icon: "📦" },
  ];

  return (
    <div className="w-full">
      
      <div className="relative">
        <img src="/path-to-background.jpg" alt="Background" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-red-200 bg-opacity-80 flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-black">
            {about.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white text-red-500 w-16 h-16 flex items-center justify-center rounded-full text-2xl">
                  {feature.icon}
                </div>
                <h3 className="font-bold mt-3">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="text-black">OUR VISION</span> 
          </h2>
          <p className="text-gray-600 mt-3">
          To provide a safe and consistent blood supply that saves lives by ensuring voluntary, regular blood donations. 
          We are committed to educating the community about the importance of blood donation, enhancing donor awareness, 
          and ensuring the highest standards of safety and care throughout the donation process.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            <span className="text-black">OUR MISSION</span> 
          </h2>
          <p className="text-gray-600 mt-3">
          To create a world where blood donation is a routine and widespread practice, contributing to improved healthcare outcomes. 
          We aim to build a sustainable blood donation system that meets the needs of all patients, supports medical 
          advancements, and empowers individuals to make a difference in the lives of others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;