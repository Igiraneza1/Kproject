import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  const cards = [
    {
      image: "/images/image1.jpg", // Replace with actual image URL or local path
      title: "What we do",
      description:
        "Lifeblood has always been one of the most trusted not-for-profit health organizations.",
    },
    {
      image: "/images/image2.jpg", // Replace with actual image URL or local path
      title: "Our strategy",
      description:
        "Strategy is about choices. It’s building on past achievements, setting the direction forward.",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default About;
