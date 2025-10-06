// src/components/LoveQuoteBanner.jsx
import React from "react";

const LoveQuoteBanner = () => {
  return (
    <div className="relative bg-cover bg-center min-h-[400px] md:min-h-[500px] flex justify-center items-center px-4 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[url('/images/love-bg.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      {/* Decorative floral elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" fill="#ffffff">
          <path d="M50,10 C60,20 70,20 80,10 C90,20 90,30 80,40 C90,50 90,60 80,70 C70,60 60,60 50,70 C40,60 30,60 20,70 C10,60 10,50 20,40 C10,30 10,20 20,10 C30,20 40,20 50,10 Z"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl w-full px-6">
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border border-white/20 transform transition-all duration-500 hover:shadow-2xl">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto text-[#ca6e4c] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            
            <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed">
              "To say <span className="text-[#ca6e4c] font-medium">I love you</span> from this day forward<br />
              means I will love you,"
            </p>
            
            <p className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mt-4">
              <span className="text-[#ca6e4c]">no matter what.</span>
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-[#ca6e4c] text-white rounded-full hover:bg-[#b85f3f] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium flex items-center justify-center gap-2">
                <span>Our Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button className="px-8 py-3 bg-transparent border-2 border-[#ca6e4c] text-[#ca6e4c] rounded-full hover:bg-[#ca6e4c] hover:text-white transition-all duration-300 font-medium">
                <span>Get in Touch</span>
                
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative element */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
        <svg viewBox="0 0 100 100" fill="#ffffff">
          <path d="M50,10 C60,20 70,20 80,10 C90,20 90,30 80,40 C90,50 90,60 80,70 C70,60 60,60 50,70 C40,60 30,60 20,70 C10,60 10,50 20,40 C10,30 10,20 20,10 C30,20 40,20 50,10 Z"/>
        </svg>
      </div>
    </div>
  );
};

export default LoveQuoteBanner;