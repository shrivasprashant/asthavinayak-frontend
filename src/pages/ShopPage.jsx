import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EventDecorPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const eventDecorData  = [
  {
    category: "Birthday Decorations",
    icon: "🎉",
    subCategories: [
      {
        name: "Balloon Decoration",
        products: [
          {
            name: "Colorful Balloon Arch",
            image: "https://media.istockphoto.com/id/1405876768/photo/decoration-for-a-childrens-party.webp?a=1&b=1&s=612x612&w=0&k=20&c=afM0kL3H822BO6gRD2zF0O7fMx7lT7cPkQ2UCxCjHGg=",
            specs: [
              { label: "Balloon Type", value: "Latex & Foil" },
              { label: "Colors", value: "Multicolor" },
              { label: "Setup Time", value: "1 hour" }
            ],
            description: "Perfect for kids and adult birthday parties with vibrant balloon arches."
          }
        ]
      },
      {
        name: "Theme Setup",
        products: [
          {
            name: "Jungle Theme Decoration",
            image: "https://media.istockphoto.com/id/875974226/photo/christmas-theme-decorated-apartment-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=iR190FaU7ko0Yq6Jn1esEptk-vy3fMlfuGZ8bB_NnWw=",
            specs: [
              { label: "Includes", value: "Backdrop, Balloons, Props" },
              { label: "Best For", value: "Kids Birthday" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Anniversary Decorations",
    icon: "💍",
    subCategories: [
      {
        name: "Romantic Setup",
        products: [
          {
            name: "Red Heart Balloon Decor",
            image: "https://images.unsplash.com/photo-1640348307652-b40d610ac355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERlY29yYXRpb25zfGVufDB8fDB8fHww",
            specs: [
              { label: "Color Scheme", value: "Red & White" },
              { label: "Duration", value: "3 hours" }
            ]
          }
        ]
      },
      {
        name: "Candle Light Dinner Setup",
        products: [
          {
            name: "Luxury Romantic Setup",
            image: "https://plus.unsplash.com/premium_photo-1701157942249-fb086aa9c7b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2FuZGxlJTIwTGlnaHQlMjBEaW5uZXIlMjBTZXR1cHxlbnwwfHwwfHx8MA%3D%3D",
            specs: [
              { label: "Table Setup", value: "2 Seater" },
              { label: "Decor Type", value: "Indoor/Outdoor" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Haldi Ceremonies",
    icon: "🌼",
    subCategories: [
      {
        name: "Floral Haldi Setup",
        products: [
          {
            name: "Marigold Backdrop",
            image: "https://plus.unsplash.com/premium_photo-1729038870113-96b77abd8f34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFsZGklMjBDZXJlbW9uaWVzfGVufDB8fDB8fHww",
            specs: [
              { label: "Flower Type", value: "Fresh/Artificial" },
              { label: "Stage Size", value: "10x8 ft" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Mehndi Ceremonies",
    icon: "🌿",
    subCategories: [
      {
        name: "Traditional Mehndi Setup",
        products: [
          {
            name: "Colorful Umbrella Decor",
            image: "https://images.unsplash.com/photo-1682456140894-55d0b8cf1fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sb3JmdWwlMjBVbWJyZWxsYSUyMERlY29yfGVufDB8fDB8fHww",
            specs: [
              { label: "Props", value: "Umbrella, Cushion, Backdrop" },
              { label: "Color Theme", value: "Bright & Festive" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Room Decorations",
    icon: "🛏️",
    subCategories: [
      {
        name: "Surprise Setup",
        products: [
          {
            name: "Birthday Room Surprise",
            image: "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJvb20lMjBEZWNvcmF0aW9ufGVufDB8fDB8fHww",
            specs: [
              { label: "Decor Elements", value: "Balloons, Streamers, Lights" },
              { label: "Customizable", value: "Yes" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Stage Decorations",
    icon: "🎭",
    subCategories: [
      {
        name: "Wedding Stage",
        products: [
          {
            name: "Floral Wedding Stage",
            image: "https://images.unsplash.com/photo-1673701286223-d8ef9bc3792e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RhZ2UlMjBEZWNvcmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
            specs: [
              { label: "Floral Type", value: "Fresh/Artificial" },
              { label: "Backdrop", value: "Fabric & Lights" }
            ]
          }
        ]
      },
      {
        name: "Engagement Stage",
        products: [
          {
            name: "LED Engagement Stage",
            image: "https://plus.unsplash.com/premium_photo-1683219367985-b59ec6e32e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RW5nYWdlbWVudCUyMFN0YWdlfGVufDB8fDB8fHww",
            specs: [
              { label: "Lighting", value: "Warm LED" },
              { label: "Seating", value: "2-seater sofa" }
            ]
          }
        ]
      }
    ]
  }
];


  const handleCategorySelect = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
  };

  const handleProductClick = (product) => {
    navigate("/product", { state: product });
  };

  const filteredCategories = eventDecorData.filter(category => 
    selectedCategory ? category.category === selectedCategory : true
  ).filter(category => 
    category.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.subCategories.some(subCat => 
      subCat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subCat.products.some(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )
);

  return (
    <div className="min-h-screen bg-[#faf7f5]">
      {/* Hero Section */}
      <div className="relative bg-primary py-20 text-center text-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Event Decor Services</h1>
          <p className="text-xl md:text-2xl font-light">
            Transform your events with our exquisite decoration solutions
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search Input */}
          <div className="flex-1">
            <label className="block mb-2 font-medium text-gray-700">Search Decorations</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by category, theme or product..."
                className="w-full p-4 pl-12 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#c46b47] focus:border-[#c46b47]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-4 top-4 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="w-full md:w-64">
            <label className="block mb-2 font-medium text-gray-700">Filter by Category</label>
            <select
              value={selectedCategory}
              onChange={handleCategorySelect}
              className="w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#c46b47] focus:border-[#c46b47]"
            >
              <option value="">All Categories</option>
              {eventDecorData.map((cat, idx) => (
                <option key={idx} value={cat.category}>
                  {cat.category} {cat.icon}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Decorations Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20 ">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-gray-800">
                  {category.category} {category.icon}
                </h2>
                <div className="ml-auto">
                  <button 
                    onClick={() => navigate("/services/category", { state: category })}
                    className="flex items-center text-[#c46b47] hover:text-[#a85839] font-medium"
                  >
                    View all {category.category.toLowerCase()}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              {category.subCategories.map((subCategory, subIndex) => (
                <div key={subIndex} className="mb-12">
                  <h3 className="text-xl font-semibold mb-6 text-gray-700 border-b pb-2 border-gray-200">
                    {subCategory.name}
                  </h3>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                    {subCategory.products.map((product, productIndex) => (
                      <motion.div
                        key={productIndex}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100 hover:shadow-lg transition-shadow"
                        onClick={() => handleProductClick(product)}
                      >
                        {/* Product Image */}
                        <div className="h-64 bg-gray-50 flex items-center justify-center p-4 relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <h3 className="text-white font-medium text-lg">{product.name}</h3>
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-medium text-gray-800">Starting from</h4>
                              <p className="text-2xl font-bold text-[#c46b47]">₹{Math.floor(Math.random() * 5000) + 5000}</p>
                            </div>
                            <button className="px-4 py-2 bg-[#c46b47] text-white rounded-lg hover:bg-[#a85839] transition-colors text-sm">
                              View Details
                            </button>
                          </div>

                          <ul className="space-y-2 text-sm text-gray-600">
                            {product.specs.slice(0, 2).map((spec, i) => (
                              <li key={i} className="flex">
                                <span className="text-[#c46b47] mr-2">•</span>
                                <span>
                                  <span className="font-medium">{spec.label}:</span> {spec.value}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center py-20">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No decorations found</h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDecorPage;