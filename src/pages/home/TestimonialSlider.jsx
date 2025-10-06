// src/components/TestimonialSlider.jsx
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Wow! We had the exact wedding we wanted to have, all because of your thoughtful guidance.",
    names: "MATT AND MARGARET",
    avatars: ["/images/matt.jpg", "/images/margaret.jpg"], // replace with your image paths
  },
  {
    text: "You made our big day stress-free and beautiful. Truly unforgettable experience!",
    names: "EMILY AND JOHN",
    avatars: ["/images/emily.jpg", "/images/john.jpg"],
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setIndex((prev) => (prev + 1) % total);

  const testimonial = testimonials[index];

  return (
    <div className="bg-white py-16 px-4 flex justify-center items-center">
      <div className="max-w-3xl w-full text-center space-y-6 relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[#c46b47] hover:text-[#9f5434] transition"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Quote */}
        <p className="text-xl md:text-2xl font-light text-gray-800 italic">
          “{testimonial.text}”
        </p>

        {/* Avatars */}
        <div className="flex justify-center items-center gap-2">
          {testimonial.avatars.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
            />
          ))}
        </div>

        {/* Names */}
        <p className="text-sm font-semibold text-gray-700 tracking-wide">
          {testimonial.names}
        </p>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#c46b47] hover:text-[#9f5434] transition"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
