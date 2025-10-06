import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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


const CategoryMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    const categoryData = shopData.find((cat) => cat.category === categoryName);
    if (categoryData) {
      navigate("/services/category", { state: categoryData });
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 w-64 bg-white shadow-lg rounded-b-md border-t-2 border-secondary p-4">
        {eventDecorData .map((category, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* ✅ Clicking this will navigate with state */}
            <div
              onClick={() => handleCategoryClick(category.category)}
              className="flex items-center justify-between cursor-pointer py-2 px-3 font-medium text-gray-800 hover:text-secondary hover:bg-gray-50 rounded transition-colors duration-200"
            >
              <span>{category.category}</span>
              <FiChevronRight className="text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>

            {/* Subcategories shown on hover */}
            <AnimatePresence>
              {hoveredCategory === index && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-full top-0 w-[300px] bg-white shadow-lg border-l border-gray-100 p-4 grid grid-cols-1 gap-2 z-10"
                >
                  {category.subCategories.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      onClick={() =>
                        navigate("/subcategory-products", {
                          state: {
                            subCategory: sub,
                            parentCategory: category.category,
                            icon: category.icon,
                          },
                        })
                      }
                      className="block font-medium text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {sub.name}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
