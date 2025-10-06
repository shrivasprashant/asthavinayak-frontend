// src/components/CardLinks.jsx
import React from "react";

const CardLinks = () => {
  return (
    <div className="flex justify-center items-center gap-4  py-20 px-4">
      {/* Podcast */}
      <div className="bg-[#d6d6cc] w-60 h-40 flex flex-col justify-center items-center rounded-tl-full">
        <p className="text-sm">Listen to the</p>
        <p className="text-lg font-semibold">PODCAST</p>
      </div>

      {/* Services */}
      <div className="bg-[#cfc3b1] w-60 h-40 flex flex-col justify-center items-center">
        <p className="text-sm">View The</p>
        <p className="text-lg font-semibold">Services</p>
      </div>

      {/* Journal */}
      <div className="bg-[#eacfc0] w-60 h-40 flex flex-col justify-center items-center rounded-br-full">
        <p className="text-sm">Read The</p>
        <p className="text-lg font-semibold">Journal</p>
      </div>
    </div>
  );
};

export default CardLinks;
