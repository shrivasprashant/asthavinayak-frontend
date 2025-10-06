// src/components/InteriorDesignStats.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const InteriorDesignStats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className=" py-24 px-4 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('/images/floral-pattern.png')] bg-repeat bg-[length:300px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20" data-aos="fade-down">
          <p className="text-[#c46b47] font-medium tracking-widest mb-4">OUR EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
            Crafting Unforgettable <br className="hidden md:block" /> Decor Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c46b47] to-[#e3a17a] mx-auto mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1676642799091-3d56c4d9fe9e?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D"
                  alt="Event decoration"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <span className="text-white font-medium">Birthday Decor</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                <img
                  src="https://plus.unsplash.com/premium_photo-1677654206561-d54394eba5c7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRlY29yYXRpb258ZW58MHx8MHx8fDA%3D"
                  alt="Event decoration"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <span className="text-white font-medium">Stage Designs</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFsbG9vbiUyMGRlY29yfGVufDB8fDB8fHww"
                  alt="Balloon decoration"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <span className="text-white font-medium">Balloon Art</span>
                </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-xl shadow-lg h-64">
                <img
                  src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zmxvd2VyJTIwZGVjb3J8ZW58MHx8MHx8fDA%3D"
                  alt="Flower decoration"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <span className="text-white font-medium">Floral Arrangements</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
                Our <span className="text-[#c46b47]">Decor Services</span>
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                We transform ordinary spaces into extraordinary experiences with our comprehensive event decoration services:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  "Birthday Parties",
                  "Wedding Decorations",
                  "Anniversary Celebrations",
                  "Corporate Events",
                  "Stage Designs",
                  "Balloon Decorations",
                  "Flower Arrangements",
                  "Theme Parties"
                ].map((service, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#c46b47] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition duration-300">
                  <p className="text-[#c46b47] font-bold text-3xl md:text-4xl mb-2">1000+</p>
                  <p className="text-gray-600 text-sm uppercase tracking-wider">Events</p>
                </div>
                <div className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition duration-300">
                  <p className="text-[#c46b47] font-bold text-3xl md:text-4xl mb-2">50+</p>
                  <p className="text-gray-600 text-sm uppercase tracking-wider">Themes</p>
                </div>
                <div className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-md transition duration-300">
                  <p className="text-[#c46b47] font-bold text-3xl md:text-4xl mb-2">5+</p>
                  <p className="text-gray-600 text-sm uppercase tracking-wider">Years</p>
                </div>
              </div>
              
              <button className="mt-10 w-full md:w-auto px-8 py-3 bg-[#c46b47] text-white rounded-lg hover:bg-[#a85839] transition duration-300 shadow-md hover:shadow-lg font-medium flex items-center justify-center mx-auto">
                View Our Portfolio
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignStats;