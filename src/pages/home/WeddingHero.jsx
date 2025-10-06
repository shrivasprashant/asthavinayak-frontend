// src/components/WeddingHero.jsx
import React from "react";
import bouqet from "../../assets/images/bouqet.png";

const WeddingHero = () => {
  return (
    <div className="relative bg-white  min-h-screen flex flex-col justify-center items-center px-4 py-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('/images/floral-pattern.png')] bg-repeat bg-[length:300px]"></div>
      
      {/* Subtle animated elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#b55b36] opacity-10 animate-float"></div>
      <div className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-[#b55b36] opacity-10 animate-float animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        {/* Left Image with elegant frame */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-[#b55b36] rounded-lg blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
          <div className="relative overflow-hidden rounded-lg shadow-xl border-4 border-white transform group-hover:scale-[1.02] transition-all duration-500">
            <img
              src="https://images.unsplash.com/photo-1523264114838-feca761983c4?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJyaWRlfGVufDB8fDB8fHww"
              alt="Bride"
              className="w-64 md:w-80 h-auto object-cover transition-all duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-0 -left-4 w-32 md:w-40 transform rotate-[-8deg] transition-all duration-500 group-hover:rotate-[-5deg]">
            <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-white">
              <img
                src={bouqet}
                alt="Bouquet"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Center Text with elegant typography */}
        <div className="text-center md:text-left max-w-xl mx-4 my-8 md:my-0">
          <p className="text-[#b55b36] font-medium tracking-widest mb-2 text-sm md:text-base">
            WEDDING PLANNING & DESIGN
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-gray-800 leading-tight mb-6">
            <span className="block text-3xl md:text-4xl font-light mb-2">Creating</span>
            Timeless Memories
          </h1>
          <p className="mt-4 text-gray-600 font-light text-lg max-w-md mx-auto md:mx-0">
            Beautiful weddings in Austin & San Antonio, Texas
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-[#b55b36] text-white rounded-full hover:bg-[#9f4e2e] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium">
              Our Services
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-[#b55b36] text-[#b55b36] rounded-full hover:bg-[#b55b36] hover:text-white transition-all duration-300 font-medium">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Right Image with hover effect */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-[#b55b36] rounded-lg blur opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
          <div className="relative overflow-hidden rounded-lg shadow-xl border-4 border-white transform group-hover:scale-[1.02] transition-all duration-500">
            <img
              src="https://plus.unsplash.com/premium_photo-1711132425055-1c289c69b950?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnJpZGV8ZW58MHx8MHx8fDA%3D"
              alt="Couple"
              className="w-64 md:w-80 h-auto object-cover transition-all duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#b55b36]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default WeddingHero;