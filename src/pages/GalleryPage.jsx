import React from "react";
import { motion } from "framer-motion";

const galleryItems = [
  {
    img: "https://images.unsplash.com/photo-1616387094047-8e3ae15a3b48?w=800",
    title: "Emily & Brad Wedding",
  },
  {
    img: "https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?w=800",
    title: "Flexible Service",
  },
  {
    img: "https://images.unsplash.com/photo-1660078857902-00b4b5e2c3d3?w=800",
    title: "Beachside Ceremony",
  },
  {
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=800",
    title: "Royal Indoor Setup",
  },
  {
    img: "https://images.unsplash.com/photo-1604335399105-46f3f2b26cf4?w=800",
    title: "Vintage Theme",
  },
  {
    img: "https://images.unsplash.com/photo-1617092726484-c040f6a71b1a?w=800",
    title: "Sunset Reception",
  },
];

const GalleryPage = () => {
  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-serif text-gray-900 mb-2"
        >
          Our Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-500 uppercase tracking-widest"
        >
          Explore all our special moments
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
              <p className="text-white text-xl font-serif p-6">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
