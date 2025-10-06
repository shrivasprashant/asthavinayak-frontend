import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import logo from "../assets/icons/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#dcd7c9] py-12 px-6">
      {/* Logo + Navbar */}
      <div className="flex flex-col items-center justify-center space-y-4 rounded-full">
        <img src={logo} alt="Logo" className="h-16 rounded-full" />

        <nav className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-800 font-medium">
          <a href="#" className="hover:text-[#8b5c3e] transition">Home</a>
          <a href="#" className="hover:text-[#8b5c3e] transition">Meet the Team</a>
          <a href="#" className="hover:text-[#8b5c3e] transition">Our Services</a>
          <a href="#" className="hover:text-[#8b5c3e] transition">Portfolio</a>
          <a href="#" className="hover:text-[#8b5c3e] transition">Blog</a>
          <a href="#" className="hover:text-[#8b5c3e] transition">Let's Chat</a>
        </nav>
      </div>

      {/* Contact & Hours */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Shared Card Styles */}
        {[{
          title: "Contact Us",
          content: [
            { icon: <FaEnvelope />, text: "youremail@gmail.com" },
            { icon: <FaPhone />, text: "(505) 393-3634" },
            { icon: <FaMapMarkerAlt />, text: "Albuquerque, NM 87108" },
            { icon: <FaCalendarAlt />, text: "By appointment only" },
          ]
        }, {
          title: "Working Hours",
          content: [
            { text: "Monday - Friday: 08:00 – 05:00" },
            { text: "Saturday - Sunday: 08:00 – 05:00" }
          ]
        }].map((section, index) => (
          <div
            key={index}
            className="bg-[#8b5c3e] text-white p-6 w-full md:w-[380px] h-[220px] rounded-md shadow-md flex flex-col justify-between"
          >
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2 text-sm">
              {section.content.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  {item.icon && item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Optional Footer Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Ashtavinayak Events. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
