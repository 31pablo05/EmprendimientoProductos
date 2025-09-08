
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 shadow-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo mejorado */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white text-xl font-bold">🌾</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Pablo Proboste
            </h1>
            <p className="text-xs text-gray-500 -mt-1">Productos Artesanales</p>
          </div>
          <div className="sm:hidden">
            <h1 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Pablo
            </h1>
          </div>
        </div>

        {/* Desktop Navigation mejorada */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center bg-gray-50/80 rounded-2xl p-1 backdrop-blur-sm">
            <Link 
              to="/" 
              className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md rounded-xl transition-all duration-300 relative group"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🏠</span>
                <span>Inicio</span>
              </span>
            </Link>
            <Link 
              to="/productos" 
              className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md rounded-xl transition-all duration-300 relative group"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🍕</span>
                <span>Productos</span>
              </span>
            </Link>
            <Link 
              to="/nosotros" 
              className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md rounded-xl transition-all duration-300 relative group"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">👨‍🍳</span>
                <span>Nosotros</span>
              </span>
            </Link>
            <Link 
              to="/contacto" 
              className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md rounded-xl transition-all duration-300 relative group"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">📞</span>
                <span>Contacto</span>
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Portfolio Button */}
          <a 
            href="https://devcraftpablo.online/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-300 flex items-center gap-2"
          >
            <span className="text-base">💻</span>
            <span>Portfolio</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* Cart Button mejorado */}
          <button 
            className="relative bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
            onClick={onCartClick}
          >
            <span className="text-lg group-hover:animate-bounce">🛒</span>
            <span className="hidden lg:inline">Carrito</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold animate-pulse shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile hamburger mejorado */}
        <button
          className="md:hidden relative w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menú"
        >
          <div className="flex flex-col gap-1">
            <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu overlay mejorado */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-2xl">
            {/* Header del menú móvil mejorado */}
            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">🌾</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Pablo Proboste
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Productos Artesanales</p>
                </div>
              </div>
              <button
                className="w-10 h-10 bg-gray-100 hover:bg-red-100 rounded-xl flex items-center justify-center transition-all duration-300"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <span className="text-gray-700 hover:text-red-600 text-xl">✕</span>
              </button>
            </div>
            
            {/* Items del menú mejorados */}
            <div className="px-4 py-6 space-y-2">
              <Link 
                to="/" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 py-4 px-4 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">🏠</span>
                </div>
                <div>
                  <span className="font-medium text-lg">Inicio</span>
                  <p className="text-xs text-gray-500">Página principal</p>
                </div>
              </Link>
              
              <Link 
                to="/productos" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 py-4 px-4 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">🍕</span>
                </div>
                <div>
                  <span className="font-medium text-lg">Productos</span>
                  <p className="text-xs text-gray-500">Catálogo completo</p>
                </div>
              </Link>
              
              <Link 
                to="/nosotros" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 py-4 px-4 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">👨‍🍳</span>
                </div>
                <div>
                  <span className="font-medium text-lg">Nosotros</span>
                  <p className="text-xs text-gray-500">Nuestra historia</p>
                </div>
              </Link>
              
              <Link 
                to="/contacto" 
                onClick={() => setMenuOpen(false)} 
                className="flex items-center gap-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 py-4 px-4 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">📞</span>
                </div>
                <div>
                  <span className="font-medium text-lg">Contacto</span>
                  <p className="text-xs text-gray-500">Hablemos</p>
                </div>
              </Link>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Portfolio Link móvil */}
              <a 
                href="https://devcraftpablo.online/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-4 px-4 rounded-2xl transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">💻</span>
                </div>
                <div className="flex-1">
                  <span className="font-medium text-lg">Mi Portfolio</span>
                  <p className="text-xs text-gray-500">Desarrollo web</p>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              {/* Cart Button móvil */}
              <button 
                className="w-full flex items-center gap-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white py-4 px-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
                onClick={() => {
                  onCartClick();
                  setMenuOpen(false);
                }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-xl">🛒</span>
                </div>
                <div className="flex-1 text-left">
                  <span className="font-medium text-lg">Ver Carrito</span>
                  <p className="text-xs text-amber-100">
                    {cartCount > 0 ? `${cartCount} productos` : 'Carrito vacío'}
                  </p>
                </div>
                {cartCount > 0 && (
                  <div className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                    {cartCount}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;