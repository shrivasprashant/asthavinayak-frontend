import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const InquiryFormPage = () => {
  const { state: product } = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    productName: product.name,
    productModel: product.model || "N/A"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted:", formData);
    alert("Thank you for your inquiry! We'll contact you soon.");
    navigate("/");
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
        <button 
          onClick={() => navigate(-1)}
          className="mb-4 text-blue-500 hover:underline text-sm"
        >
          ← Back
        </button>

        <h1 className="text-xl md:text-2xl font-semibold text-blue-700 mb-1">
          Enquiry for {product.name}
        </h1>
        {product.model && (
          <p className="text-sm text-slate-600 mb-5">Model: {product.model}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
                Your Inquiry *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
              ></textarea>
            </div>
          </div>

          <input type="hidden" name="productName" value={formData.productName} />
          <input type="hidden" name="productModel" value={formData.productModel} />

          <div className="mt-5">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded-md transition"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InquiryFormPage;
