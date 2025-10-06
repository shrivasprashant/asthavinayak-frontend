// src/pages/SubCategoryProductsPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SubCategoryProductsPage = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const { subCategory, parentCategory, icon } = location.state || {};

  const handleProductClick = (product) => {
    navigate("/product", { state: product });
  };

  const handleInquiryClick = (product) => {
    navigate("/inquiry", { state: product });
  };

  if (!subCategory)
    return <p className="p-8 text-center">No subcategory selected.</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-4">
        {parentCategory} {icon} / <span className="text-blue-600">{subCategory.name}</span>
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {subCategory.products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
              onClick={() => handleProductClick(product)}
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-bold">{product.name}</h2>
                {product.model && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {product.model}
                  </span>
                )}
              </div>

              <ul className="space-y-1 text-sm text-gray-600 mb-4">
                {product.specs.map((spec, specIdx) => (
                  <li key={specIdx} className="flex">
                    <span className="font-medium w-24">{spec.label}</span>
                    <span>: {spec.value}</span>
                  </li>
                ))}
              </ul>

              <button onClick={() => handleInquiryClick(product)} className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Enquiry Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryProductsPage;
