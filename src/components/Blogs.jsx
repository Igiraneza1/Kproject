import { useState } from "react";
import image_12 from '../assets/image_12.png';
import { FaHeartbeat, FaHandHoldingHeart, FaDonate } from "react-icons/fa";

export default function BloodDonationBlog() {
  const [stories] = useState([
    {
      id: 1,
      name: "Mmmmm",
      story:
        "I was in a terrible motorcycle accident and lost a dangerous amount of blood. Without immediate transfusions, I wouldn’t have made it. Now, I encourage everyone to donate—it truly saves lives.",
      icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    },
    {
      id: 2,
      name: "Aaaaaaa",
      story:
        "When my daughter was born prematurely, she was too weak and needed multiple blood transfusions. The donated blood gave her a chance to grow and survive. She is now a healthy and happy child.",
      icon: <FaHandHoldingHeart className="text-red-500 text-3xl" />,
    },
    {
      id: 3,
      name: "Hhhhh",
      story:
        "Having sickle cell anemia means I need frequent blood transfusions to prevent severe pain and organ damage. Every donor is a hero in my eyes because they help me live a normal life.",
      icon: <FaDonate className="text-red-500 text-3xl" />,
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-red-900 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Blood Donation: A Lifesaving Gift</h1>
          <p className="mt-4 text-lg">
            One donation can save up to three lives.
            <img src={image_12 || 'image_12.png'} alt="Image" className="w-100 max-w-md h-80 rounded-lg ml-70 mt-20"/>

          </p>
        </div>
        <img
          src="https://source.unsplash.com/1600x900/?blood-donation"
          alt="Blood Donation"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      </section>

      {/* Importance of Blood Donation */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-red-500">Why Blood Donation Matters</h2>
        <ul className="mt-4 space-y-3">
          <li>✅ Emergencies happen every day, requiring urgent transfusions.</li>
          <li>✅ Patients with chronic illnesses depend on regular blood donations.</li>
          <li>✅ Blood has a short shelf life and needs constant replenishment.</li>
          <li>✅ One donation can help multiple patients.</li>
        </ul>
      </section>

      {/* Recipient Stories */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-red-500">Real Stories of Lives Saved</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {stories.map((story) => (
            <div key={story.id} className="bg-white p-6 shadow-lg rounded-lg">
              <div className="flex items-center space-x-3">
                {story.icon}
                <h3 className="text-xl font-bold">{story.name} Story</h3>
              </div>
              <p className="mt-4 text-gray-700">{story.story}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of Blood Donation */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-red-800">Benefits for Donors & Recipients</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-red-800">For Recipients</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>🩸 Life-saving treatment for critical patients.</li>
              <li>🩸 Faster recovery from surgeries and accidents.</li>
              <li>🩸 Improves quality of life for those with chronic illnesses.</li>
            </ul>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-red-800">For Donors</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>💉 Free health checkup during donation.</li>
              <li>💉 Helps regulate iron levels, promoting heart health.</li>
              <li>💉 Mental satisfaction of saving lives.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-900 text-white text-center py-12">
        <h2 className="text-3xl font-semibold">Be a Hero Today!</h2>
        <p className="mt-4 text-lg">Your donation can give someone a second chance at life.</p>
        
      </section>
    </div>
  );
}
