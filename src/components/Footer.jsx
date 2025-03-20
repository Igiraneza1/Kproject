import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = ({ addMessage }) => {
  const [formData, setFormData] = useState({ 
    email: "", 
    name: "", 
    message: "" });
  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(formData);
    if (!formData.email || !formData.name || !formData.message) return;

    const newMessage = {
      email: formData.email,
      name: formData.name,
      message: formData.message,
      date: new Date().toISOString().split("T")[0], // Current date
    };
    addMessage(newMessage);
    setFormData({ 
      email: "", 
      name: "", 
      message: ""
     });

   
    history.push("/messages");
  };

  return (
    <footer className="bg-black text-white py-8 px-6 md:px-16 pt-20">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p className="text-lg">
            Blood donation is a simple act that saves lives.
          </p>
          <p className="mt-2 text-sm">
            By donating, you help patients in need and make a difference in your community.
            We are committed to reminding people about blood donation locations and times,
            ensuring no one misses the chance to help. Together, we can create a healthier
            world where safe blood is always available.
          </p>
          <p className="mt-4 font-semibold">Donate blood, save lives!</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Leave a message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Leave your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <button type="submit" className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800">
              Send
            </button>
          </form>
        </div>

        <div className="text-right">
          <div className="flex flex-row items-end mt-2 gap-5">
            <a href="#" className="text-white font-bold">Quick link</a>
            <a href="/" className="hover:underline">HOME</a>
            <a href="About" className="hover:underline">ABOUT</a>
            <a href="Services" className="hover:underline">SERVICES</a>
            <a href="Contacts" className="hover:underline">CONTACTS</a>
          </div>
          <div className="flex flex-row gap-8 pt-20 items-end mt-4 space-y-3">
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <FaEnvelope className="text-white text-2xl cursor-pointer" />
            <FaInstagram className="text-white text-2xl cursor-pointer hover:bg-red-500" />
            <FaLinkedin className="text-white text-2xl cursor-pointer hover:bg-blue-600" />
            <FaWhatsapp className="text-white text-2xl cursor-pointer mb-3 hover:bg-green-600" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6">
        &copy; 2025 All rights reserved by Blood Donation
      </div>
    </footer>
  );
};

export default Footer;