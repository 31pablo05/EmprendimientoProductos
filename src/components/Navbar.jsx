
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg border-b border-green-100">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-900 hover:text-green-700 transition-colors">
          🌾 Artesanal
        </div>
        {/* Desktop Navigation + Cart */}
        <div className="flex items-center gap-8">
          {/* Navlinks solo en desktop */}
          <ul className="hidden md:flex flex-row gap-8 list-none">
            <li>
              <Link 
                to="/" 
                className="text-green-800 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/productos" 
                className="text-green-800 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              >
                Productos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/nosotros" 
                className="text-green-800 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              >
                Nosotros
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contacto" 
                className="text-green-800 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              >
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
          {/* Desktop Cart Button solo en desktop */}
          <button 
            className="hidden md:flex bg-green-900 text-white px-5 py-2.5 rounded-full items-center gap-2 font-semibold hover:bg-green-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg ml-4"
            onClick={onCartClick}
          >
            🛒 Carrito 
            <span className="bg-orange-400 text-green-900 px-2.5 py-0.5 rounded-full text-sm font-bold animate-pulse min-w-[24px] text-center">
              {cartCount}
            </span>
          </button>
        </div>
        {/* Mobile hamburger solo en mobile */}
        <button
          className="md:hidden text-3xl text-green-900 hover:text-green-700 focus:outline-none transition-colors p-1 ml-auto"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menú"
        >
          <span className={`transform transition-transform duration-200 ${menuOpen ? 'rotate-90' : ''}`}>
            {menuOpen ? "✖" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile menu overlay solo en mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl border-b border-green-100">
            {/* Header del menú móvil */}
            <div className="flex justify-between items-center px-4 py-4 border-b border-green-100">
              <div className="text-xl font-bold text-green-900">
                🌾 Artesanal
              </div>
              <button
                className="text-3xl text-green-900 hover:text-red-600 focus:outline-none transition-colors p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <span className="text-2xl">✖</span>
              </button>
            </div>
            
            {/* Items del menú */}
            <div className="px-4 py-6">
              <ul className="flex flex-col gap-2 list-none">
                <li>
                  <Link 
                    to="/" 
                    onClick={() => setMenuOpen(false)} 
                    className="block text-lg font-semibold text-green-800 hover:text-green-600 py-3 px-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                  >
                    🏠 Inicio
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/productos" 
                    onClick={() => setMenuOpen(false)} 
                    className="block text-lg font-semibold text-green-800 hover:text-green-600 py-3 px-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                  >
                    📦 Productos
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/nosotros" 
                    onClick={() => setMenuOpen(false)} 
                    className="block text-lg font-semibold text-green-800 hover:text-green-600 py-3 px-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                  >
                    👥 Nosotros
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contacto" 
                    onClick={() => setMenuOpen(false)} 
                    className="block text-lg font-semibold text-green-800 hover:text-green-600 py-3 px-3 rounded-lg hover:bg-green-50 transition-all duration-200"
                  >
                    📞 Contacto
                  </Link>
                </li>
                <li className="pt-4 mt-4 border-t border-green-100">
                  <button 
                    className="w-full bg-green-900 text-white px-5 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold hover:bg-green-800 transition-colors duration-200 shadow-md"
                    onClick={() => {
                      onCartClick();
                      setMenuOpen(false);
                    }}
                  >
                    🛒 Ver Carrito 
                    <span className="bg-orange-400 text-green-900 px-3 py-1 rounded-full text-sm font-bold">
                      {cartCount}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;