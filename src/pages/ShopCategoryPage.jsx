import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ShopCategoryPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const category = location.state;

    const handleSubCategoryChange = (e) => {
        const selectedSubCatIndex = e.target.value;
        const selectedSubCat = category.subCategories[selectedSubCatIndex];

        navigate("/subcategory-products", {
            state: {
                subCategory: selectedSubCat,
                parentCategory: category.category,
                icon: category.icon,
            },
        });
    }

    const handleProductClick = (product) => {
        navigate("/product", { state: product });
      };
    
      const handleInquiryClick = (product) => {
        navigate("/inquiry", { state: product });
      };

    if (!category) return <p className="p-8 text-center">No category selected.</p>;

    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">
                    {category.category} {category.icon}
                </h2>

                <select
                    className="border rounded px-4 py-2 bg-white"
                    onChange={handleSubCategoryChange}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Select Subcategory
                    </option>
                    {category.subCategories.map((subCat, idx) => (
                        <option key={idx} value={idx}>
                            {subCat.name}
                        </option>
                    ))}
                </select>
            </div>
            {/* <h2 className="text-3xl font-bold mb-6">{category.category} {category.icon}</h2> */}

            {category.subCategories.map((subCat, idx) => (
                <div key={idx} className="mb-10">
                    <h3 className="text-xl font-semibold mb-4">{subCat.name}</h3>
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                        {subCat.products.map((product, index) => (
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
            ))}
        </div>
    );
};

export default ShopCategoryPage;
