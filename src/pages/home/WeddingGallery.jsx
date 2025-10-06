import React from "react";

const galleryData = [
  {
    img: "https://images.unsplash.com/photo-1562859135-3c009b776595?w=500",
    title: "Timeless wedding at Castle Hill Inn in Newport RI",
    couple: "HELSE & TOYA",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1711301937395-27939b42ba01?w=500",
    title: "Timeless wedding at Castle Hill Inn in Newport RI",
    couple: "SAM & SUNNY",
  },
  {
    img: "https://images.unsplash.com/photo-1563808599816-a9e266f941b6?w=500",
    title: "Timeless wedding at Castle Hill Inn in Newport RI",
    couple: "ALEX & SAM",
    highlight: true,
  },
  {
    img: "https://images.unsplash.com/photo-1563808599481-34a342e44508?w=500",
    title: "Timeless wedding at Castle Hill Inn in Newport RI",
    couple: "STRACK & SATHI",
  },
  {
    img: "https://images.unsplash.com/photo-1563808599816-a9e266f941b6?w=500",
    title: "Timeless wedding at Castle Hill Inn in Newport RI",
    couple: "MITCHAL & LEONE",
  },
];

const WeddingGallery = () => {
  return (
    <div className="bg-white py-16 px-4 overflow-x-auto">
      <div className="max-w-full flex gap-6 px-4 md:px-12 w-max">
        {galleryData.map((item, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 flex flex-col items-center text-center justify-center transition-all duration-300 ${
              item.highlight
                ? "w-72 md:w-80 scale-105"
                : "w-52 md:w-60"
            }`}
          >
            <img
              src={item.img}
              alt={item.couple}
              className="w-full h-auto rounded-md shadow-md"
            />
            <p className="mt-4 text-sm md:text-base text-gray-700">
              {item.title}
            </p>
            <p
              className={`mt-1 text-xs md:text-sm tracking-wide font-semibold ${
                item.highlight ? "text-[#c07a5e]" : "text-[#b36d48]"
              }`}
            >
              {item.couple}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingGallery;
