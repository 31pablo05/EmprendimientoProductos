import { useState, useEffect } from "react";

const Hero = ({ onCTAClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: "/images/prepizza1.webp", alt: "Prepizza Artesanal 1", label: "Prepizza Casera" },
    { src: "/images/prepizza2.webp", alt: "Prepizza Artesanal 2", label: "Masa Artesanal" },
    { src: "/images/panIntegral.webp", alt: "Pan Integral", label: "Pan Integral" }
  ];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero relative bg-gradient-to-br from-slate-900 via-green-900 to-amber-900 min-h-screen flex items-center pt-20 text-white overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="hero-content text-center md:text-left">
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-amber-200 to-orange-300 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
              🌾 Productos Artesanales
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sabores que <br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Despiertan
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-amber-100">
              tu paladar
            </span>
          </h1>
          
          <p className="text-base sm:text-lg mb-8 opacity-90 max-w-lg mx-auto md:mx-0 leading-relaxed text-gray-200">
            Prepizzas caseras, panes recién horneados y ensaladas frescas. 
            <span className="text-amber-200 font-medium"> Todo preparado con amor y los mejores ingredientes naturales.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <button 
              className="group bg-gradient-to-r from-amber-400 to-orange-500 text-slate-800 px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-amber-500/25 hover:-translate-y-2 transition-all duration-300 w-full sm:w-auto relative overflow-hidden" 
              onClick={onCTAClick}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Ver Productos</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">✨</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="flex items-center gap-2 text-amber-200 text-sm">
              <div className="flex">
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
                <span className="text-yellow-400">⭐</span>
              </div>
              <span className="font-medium">Calidad artesanal</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image text-center animate-float order-first md:order-last">
          <div className="hero-visual relative w-full max-w-xs sm:max-w-sm md:max-w-md h-72 sm:h-80 md:h-96 bg-gradient-to-br from-white to-amber-50 rounded-3xl overflow-hidden shadow-2xl mx-auto border-4 border-white/20 backdrop-blur-sm">
            {/* Efectos decorativos en el contenedor */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            {/* Carousel de imágenes */}
            <div className="relative w-full h-full z-10">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentImageIndex 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-3xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      console.warn(`Failed to load image: ${image.src}`);
                    }}
                  />
                  {/* Overlay con label mejorado */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-transparent p-6">
                    <div className="text-white font-bold text-lg sm:text-xl text-center tracking-wide">
                      {image.label}
                    </div>
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-2"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Botones de navegación mejorados */}
            <button
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 z-20 border border-white/20 hover:border-white/40 hover:scale-110"
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 z-20 border border-white/20 hover:border-white/40 hover:scale-110"
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Decoración adicional */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-xl"></div>
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
