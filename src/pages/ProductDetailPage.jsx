import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProductDetailPage = () => {
  const { state: product } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("specifications");

  const handleInquiryClick = () => {
    navigate("/inquiry", { state: product });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Products
        </button>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              {product.model && (
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Model: {product.model}
                </span>
              )}
              
              {/* Tab Buttons */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab("specifications")}
                  className={`py-2 px-4 font-medium ${activeTab === "specifications" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                >
                  Specifications
                </button>
                {product.description && (
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`py-2 px-4 font-medium ${activeTab === "description" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                  >
                    Description
                  </button>
                )}
              </div>
              
              {/* Tab Content */}
              <div className="mb-6">
                {activeTab === "specifications" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-3">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="flex">
                          <span className="font-medium w-40 text-gray-700">{spec.label}</span>
                          <span className="text-gray-600">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                {activeTab === "description" && product.description && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
                  </motion.div>
                )}
              </div>
              
              <button
                onClick={handleInquiryClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Make an Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;