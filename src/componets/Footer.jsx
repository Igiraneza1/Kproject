import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
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
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 p-2 bg-gray-300 text-black rounded-md"
          />
          <textarea
            placeholder="Your message"
            className="w-full mt-2 p-2 bg-gray-300 text-black rounded-md"
          ></textarea>
          <button className="bg-red-400 text-white px-4 py-2 rounded-md mt-3 w-full">
            Send
          </button>
        </div>

    
        <div className="text-right">
          
          <div className="flex flex-row items-end mt-2 gap-5">
            <a href="#" className="text-blue-400">Quick link</a>
            <a href="/" className="hover:underline">HOME</a>
            <a href="About" className="hover:underline">ABOUT</a>
            <a href="Services" className="hover:underline">SERVICES</a>
            <a href="Contacts" className="hover:underline">CONTACTS</a>
          </div>
          <div className="flex flex-row gap-8 pt-20 items-end mt-4 space-y-3">
          <h3 className="text-xl font-semibold">Get in touch</h3>
            <FaEnvelope className="text-white text-2xl cursor-pointer" />
            <FaInstagram className="text-white text-2xl cursor-pointer" />
            <FaLinkedin className="text-white text-2xl cursor-pointer" />
            <FaWhatsapp className="text-white text-2xl cursor-pointer pb-10" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6">
        © All rights reserved by Blood Donation
      </div>
    </footer>
  );
};

export default Footer;
