import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    title: "Exquisite Wedding Decor",
    subtitle: "Transform your venue into a fairytale setting",
    offer: "Custom packages available",
    buttonText: "View Gallery",
    link: "/wedding-decor",
    textPosition: "text-left items-start",
    textColor: "text-white",
    overlay: "bg-gradient-to-r from-black/70 via-black/40 to-transparent",
    buttonStyle: "bg-white text-[#c46b47] hover:bg-[#f8f8f8]"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&auto=format&fit=crop&q=80",
    title: "Birthday Celebrations",
    subtitle: "Themed decorations for unforgettable parties",
    offer: "Starting from ₹15,000",
    buttonText: "Explore Themes",
    link: "/birthday-decor",
    textPosition: "text-center items-center",
    textColor: "text-white",
    overlay: "bg-gradient-to-b from-black/70 via-black/30 to-transparent",
    buttonStyle: "bg-[#c46b47] text-white hover:bg-[#a85839]"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=1200&auto=format&fit=crop&q=80",
    title: "Corporate Events",
    subtitle: "Elegant decor for professional gatherings",
    offer: "Special rates for corporate clients",
    buttonText: "Get Quote",
    link: "/corporate-events",
    textPosition: "text-right items-end",
    textColor: "text-white",
    overlay: "bg-gradient-to-l from-black/70 via-black/40 to-transparent",
    buttonStyle: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  },
];

const HeroSlider = () => {
  return (
    <div className="relative group h-screen max-h-[800px]">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        autoplay={{ 
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1200}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`relative flex ${slide.textPosition} justify-center h-full w-full`}>
              {/* Background Image with Parallax Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
                data-swiper-parallax="-30%"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 ${slide.overlay}`} />
              
              {/* Content with Animation */}
              <div 
                className={`relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl w-full h-full ${slide.textPosition} ${slide.textColor} space-y-6`}
                data-swiper-parallax-opacity="0"
                data-swiper-parallax-y="100"
              >
                <div className="max-w-2xl space-y-4">
                  {/* Offer Tag */}
                  <span 
                    className="inline-block px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-[#c46b47] text-white rounded-full"
                    data-swiper-parallax-y="50"
                  >
                    {slide.offer}
                  </span>
                  
                  {/* Main Title */}
                  <h2 
                    className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight"
                    data-swiper-parallax-y="80"
                  >
                    {slide.title}
                  </h2>
                  
                  {/* Subtitle */}
                  <p 
                    className="text-lg sm:text-xl md:text-2xl opacity-90 font-light"
                    data-swiper-parallax-y="60"
                  >
                    {slide.subtitle}
                  </p>
                  
                  {/* CTA Button */}
                  <div 
                    className="pt-4"
                    data-swiper-parallax-y="40"
                  >
                    <Link
                      to={slide.link}
                      className={`inline-block px-8 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-300 rounded-lg hover:shadow-lg ${slide.buttonStyle}`}
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 z-20 flex items-center justify-center w-16 h-16 my-auto ml-4 transition-all duration-300 opacity-0 group-hover:opacity-100 swiper-button-prev">
        <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-full shadow-lg cursor-pointer hover:bg-white hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </div>
      
      <div className="absolute inset-y-0 right-0 z-20 flex items-center justify-center w-16 h-16 my-auto mr-4 transition-all duration-300 opacity-0 group-hover:opacity-100 swiper-button-next">
        <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-full shadow-lg cursor-pointer hover:bg-white hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      {/* Custom Pagination */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2 swiper-pagination">
        {slides.map((slide) => (
          <div 
            key={slide.id}
            className="custom-bullet w-3 h-3 rounded-full bg-white/50 transition-all duration-300 hover:bg-white hover:w-6"
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* CSS for custom bullets */}
      <style jsx>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255,255,255,0.5);
          transition: all 0.3s ease;
        }
        .custom-bullet:hover, .swiper-pagination-bullet-active {
          width: 24px;
          background: white;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;