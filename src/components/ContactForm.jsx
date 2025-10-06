// src/components/ContactForm.jsx
import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          Get in touch
        </p>
        <h2 className="text-4xl font-serif font-semibold text-gray-900 mb-10">
          Feel Free To Contact Us
        </h2>

        <form className="grid md:grid-cols-2 gap-6 text-left">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border-b border-gray-300 py-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border-b border-gray-300 py-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Address - full width */}
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Your Address"
              className="w-full border-b border-gray-300 py-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
            />
          </div>

          {/* Message - full width */}
          <div className="md:col-span-2">
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border-b border-gray-300 py-2 placeholder:text-gray-400 focus:outline-none focus:border-gray-500 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#e9c4aa] text-white font-semibold px-8 py-2 rounded-full hover:bg-[#d6ab91] transition duration-300 uppercase text-sm"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
