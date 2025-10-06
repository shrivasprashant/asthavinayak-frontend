// src/components/GallerySlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const galleryItems = [
  {
    img: "https://images.unsplash.com/photo-1616387094047-8e3ae15a3b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
    title: "Emily & Brad Wedding",
  },
  {
    img: "https://images.unsplash.com/photo-1517456215183-9a2c3a748d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    title: "Flexible Service",
  },
  {
    img: "https://images.unsplash.com/photo-1660078857902-00b4b5e2c3d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Beachside Ceremony",
  },
];

const GallerySlider = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-serif text-gray-900 mb-1">Gallrery</h2>
            <p className="text-sm tracking-[0.15em] text-gray-400 uppercase">
              Check our recent projects
            </p>
          </div>
          <button
            onClick={() => navigate("/gallery")}
            className="border border-gray-300 rounded-full px-6 py-2 text-sm hover:bg-gray-100 transition"
          >
            See Full Gallery
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          slidesPerView={1.5}
          spaceBetween={20}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="relative"
        >
          {galleryItems.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group overflow-hidden rounded-md shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 text-white text-xl font-serif font-medium z-10">
                  {item.title}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition" />
              </div>
            </SwiperSlide>
          ))}

          {/* Arrows */}
          <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow">
            <FaArrowLeft />
          </button>
          <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow">
            <FaArrowRight />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySlider;
