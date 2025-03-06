import React from "react";

const Services = () => {
  const services = [
    { title: "Education", icon: "🛡️", description: "Educates people about the importance of blood donation.Explains the challenges and solutions related to blood donation.Provides guidelines on eligibility criteria for donors." },
    { title: "Health & Safety", icon: "✅", description: "Ensures the safety of blood donors and recipients by maintaining medical guidelines. Includes a Blood Correction Announcement to inform donors about any discrepancies in their blood" },
    { title: "Medical Support ", icon: "⚡", description: "Supports individuals with blood disorders and emergency medical cases. Helps ensure a stable blood supply for hospitals and medical institutions." },
    { title: "Donation Process", icon: "🚶‍♂️", description: "Provides step-by-step guidance on how to donate blood, from registration to post-donation care. Advises donors on what to do after donating to stay healthy." },
    { title: "Encouraging", icon: "📣", description: "Addresses common concerns and misconceptions about blood donation. Encourages more people to donate by raising awareness about its benefits." },
    { title: "Community Engagement", icon: "🤝", description: "Fosters community involvement by organizing blood donation drives and events. Partners with local organizations, schools, and businesses to increase participation. " },
  ];

  return (
    <div className="container mx-auto px-6 py-12 text-center pt-20">
      
      <h2 className="text-3xl font-bold text-gray-800 uppercase">
        our Services
      </h2>
      <div className="w-20 h-1 bg-red-500 mx-auto my-2"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow border-b-4 border-red-500"
          >
            <div className="text-red-500 text-4xl mb-4">{service.icon}</div>
            <h3 className="font-semibold text-xl text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;