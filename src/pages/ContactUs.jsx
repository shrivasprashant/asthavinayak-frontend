import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header Section */}
      <motion.header 
        className="py-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <div className="flex justify-center mt-4">
          <nav className="flex items-center text-sm">
            <a href="/" className="text-blue-200 hover:text-white hover:underline transition">Home</a>
            <span className="mx-2">/</span>
            <span className="text-white">Contact Us</span>
          </nav>
        </div>
      </motion.header>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-8">
            <span className="text-blue-600 font-medium">CONTACT FORM</span>
            <h2 className="text-3xl font-bold mt-2">Send Us a Message</h2>
            <div className="w-20 h-1 bg-yellow-400 mt-3 rounded-full"></div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+91 1234567890" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Regarding..." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea 
                id="message" 
                placeholder="Type your message here..." 
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Send Message
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-8">
            <span className="text-yellow-400 font-medium">OUR INFO</span>
            <h2 className="text-3xl font-bold mt-2">Contact Details</h2>
            <div className="w-20 h-1 bg-yellow-400 mt-3 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-blue-700 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Our Location</h3>
                <p className="mt-1 text-blue-100">
                  40, Sheetal Apartment, Ward No. 17, Tehsil Goharganj,<br />
                  District Raisen, Mandideep, Bhopal-462046,<br />
                  Madhya Pradesh, India
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start">
              <div className="bg-blue-700 p-3 rounded-full mr-4">
                <FaPhoneAlt className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone Numbers</h3>
                <div className="mt-2 space-y-2">
                  <a href="tel:7869845629" className="block text-blue-100 hover:text-white transition">+91 78698 45629</a>
                  {/* <a href="tel:6222689343" className="block text-blue-100 hover:text-white transition">+91 62226 89343</a>
                  <a href="tel:9423789382" className="block text-blue-100 hover:text-white transition">+91 94237 89382</a> */}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="bg-blue-700 p-3 rounded-full mr-4">
                <FaEnvelope className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Address</h3>
                <a href="mailto:info@globalequipments.co.in" className="block mt-1 text-blue-100 hover:text-white transition">
                  info@globalequipments.co.in
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            {/* <div className="flex items-start">
              <div className="bg-blue-700 p-3 rounded-full mr-4">
                <FaWhatsapp className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <a 
                  href="https://wa.me/917869678485" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition flex items-center"
                >
                  <FaWhatsapp className="mr-2" />
                  Chat with Us
                </a>
              </div>
            </div> */}
          </div>

          {/* Social Icons */}
          <div className="mt-10 pt-6 border-t border-blue-700">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition"
                aria-label="Facebook"
              >
                <FiFacebook className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition"
                aria-label="Instagram"
              >
                <FiInstagram className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition"
                aria-label="Twitter"
              >
                <FiTwitter className="text-xl" />
              </a>
              <a 
                href="#" 
                className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.716757311959!2d77.4979543153743!3d23.18072231691638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43a8b8e7f0a1%3A0x9b9b9b9b9b9b9b9b!2sSheetal%20Apartment!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;