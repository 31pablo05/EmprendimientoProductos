import { useState } from "react";

const productsData = [
  { category: "prepizzas", name: "Prepizza Casera", desc: "Masa artesanal de 35cm, perfecta para 3-4 personas", price: 1500, icon: "🍕", badge: "Popular", isNew: false, outOfStock: false },
  { category: "panes", name: "Pan Integral de Molde con Semillas", desc: "Pan integral recién horneado con mix de semillas, 500g", price: 5000, icon: "🥖", badge: "Premium", isNew: true, outOfStock: false },
  { category: "ensaladas", name: "Ensalada Cortada Lista para Preparar", desc: "Mix de repollo, rúcula y zanahoria, cortado y listo para consumir", price: 2000, icon: "🥗", badge: "Próximamente", isNew: false, outOfStock: true },
  { category: "ensaladas", name: "Ensalada Mixta", desc: "Mix de lechuga, pepino y zanahoria, cortado y listo para consumir", price: 2000, icon: "🥗", badge: "Próximamente", isNew: false, outOfStock: true },
  { category: "ensaladas", name: "Ensalada Completa", desc: "Mix de lechuga, zanahoria, cherrys, repollo, pepino y huevo duro, cortado y listo para consumir", price: 3000, icon: "🥗", badge: "Próximamente", isNew: false, outOfStock: true },
];

const categories = [
  { key: "todos", label: "Todos" },
  { key: "prepizzas", label: "Prepizzas" },
  { key: "panes", label: "Panes" },
  { key: "ensaladas", label: "Ensaladas" },
];

const Products = ({ onAddToCart }) => {
  const [filter, setFilter] = useState("todos");
  const [loadingProduct, setLoadingProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simular carga inicial
  useState(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = async (product) => {
    // Verificar si el producto está sin stock
    if (product.outOfStock) {
      // Mostrar notificación de producto sin stock (si tienes función showToast disponible)
      if (window.showToast) {
        window.showToast(`${product.name} estará disponible próximamente 🌱`);
      } else {
        alert(`${product.name} estará disponible próximamente 🌱`);
      }
      return;
    }

    setLoadingProduct(product.name);
    try {
      // Simular un pequeño delay para feedback visual
      await new Promise(resolve => setTimeout(resolve, 500));
      onAddToCart(product);
    } finally {
      setLoadingProduct(null);
    }
  };

  const filteredProducts =
    filter === "todos"
      ? productsData
      : productsData.filter((p) => p.category === filter);

  return (
    <section className="products py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-cream" id="productos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Principal */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-4">Nuestros Productos</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Productos frescos y artesanales para toda la familia. Selecciona tus favoritos y haz tu pedido fácilmente.
          </p>
        </div>

        {/* Instructivo de Pedido */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 border border-green-100 shadow-lg">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-2 flex items-center justify-center gap-2">
              <span className="text-2xl">📋</span>
              ¿Cómo hacer tu pedido?
            </h3>
            <p className="text-green-700 text-sm sm:text-base">Proceso simple en 4 pasos</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Paso 1 */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">1</div>
                <h4 className="font-bold text-green-900 mb-2 text-sm sm:text-base">Selecciona</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Agrega productos al carrito usando los botones "+"</p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">2</div>
                <h4 className="font-bold text-green-900 mb-2 text-sm sm:text-base">Revisa</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Verifica tu pedido en el carrito con cantidades y total</p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">3</div>
                <h4 className="font-bold text-green-900 mb-2 text-sm sm:text-base">Completa</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Ingresa tu nombre, dirección y teléfono en el formulario</p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">4</div>
                <h4 className="font-bold text-green-900 mb-2 text-sm sm:text-base">Envía</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Presiona "Enviar por WhatsApp" para coordinar entrega</p>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
            <div className="flex items-start gap-3">
              <span className="text-xl sm:text-2xl">💬</span>
              <div>
                <h4 className="font-bold text-amber-900 mb-1 text-sm sm:text-base">Mensaje automático</h4>
                <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">
                  Se generará automáticamente un mensaje con tu pedido completo, datos de contacto y total a pagar. 
                  Solo debes enviarlo y coordinaremos la entrega contigo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros de Categorías */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-4">Categorías de Productos</h3>
          <div className="filter-tabs flex justify-center px-2">
            <div className="tabs-container bg-white p-1 sm:p-2 rounded-full shadow-lg flex gap-1 sm:gap-2 flex-wrap border border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`filter-btn px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm md:text-base transform hover:scale-105 ${
                    filter === cat.key 
                      ? "bg-gradient-to-r from-green-900 to-green-800 text-white shadow-md" 
                      : "text-gray-600 hover:bg-gradient-to-r hover:from-green-900 hover:to-green-800 hover:text-white hover:shadow-md"
                  }`}
                  onClick={() => setFilter(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8" id="products-grid">
          {isLoading ? (
            // Skeleton loading
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="h-40 sm:h-44 md:h-48 bg-gray-200"></div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded mb-3"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-16 bg-gray-200 rounded"></div>
                      <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            filteredProducts.map((product) => (
              <div key={product.name} className={`product-card ${product.category} group relative bg-gradient-to-br from-white via-white to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100 hover:border-green-200 ${product.outOfStock ? 'opacity-75 grayscale' : ''}`}>
                {/* Overlay de sin stock */}
                {product.outOfStock && (
                  <div className="absolute inset-0 bg-black/20 z-30 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border">
                      <div className="text-gray-700 font-bold text-sm text-center">
                        🌱 Próximamente
                      </div>
                    </div>
                  </div>
                )}

                {/* Badge superior */}
                {(product.badge || product.isNew) && (
                  <div className="absolute top-3 left-3 z-10 flex gap-2">
                    {product.isNew && !product.outOfStock && (
                      <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md animate-pulse">
                        NUEVO
                      </span>
                    )}
                    {product.badge && (
                      <span className={`text-white px-2 py-1 rounded-full text-xs font-bold shadow-md ${
                        product.outOfStock 
                          ? 'bg-gradient-to-r from-gray-500 to-gray-600' 
                          : product.badge === 'Próximamente'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
                            : 'bg-gradient-to-r from-orange-500 to-amber-600'
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                )}
                
                <div className="product-image w-full h-40 sm:h-44 md:h-48 bg-gradient-to-br from-cream via-orange-50 to-green-50 flex flex-col items-center justify-center border-b border-gray-100 relative overflow-hidden">
                  {/* Efecto de fondo decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
                  
                  {/* Círculo decorativo para el icono */}
                  <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-white">
                    <div className="icon text-2xl sm:text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
                  </div>
                  
                  <div className="name text-sm sm:text-base md:text-lg font-bold text-green-900 text-center px-2 mt-2 relative z-10">{product.name}</div>
                </div>
                
                <div className="product-info p-4 sm:p-5 md:p-6 relative">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-xs sm:text-sm md:text-base line-clamp-2 leading-relaxed">{product.desc}</p>
                  
                  <div className="product-footer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-2">
                    {/* Precio mejorado */}
                    <div className="price-container">
                      <span className={`price text-xl sm:text-2xl font-black text-transparent bg-gradient-to-r bg-clip-text ${
                        product.outOfStock 
                          ? 'from-gray-400 to-gray-500' 
                          : 'from-orange-600 to-red-600'
                      }`}>
                        ${product.price.toLocaleString()}
                      </span>
                      <div className={`text-xs font-medium ${product.outOfStock ? 'text-gray-400' : 'text-gray-500'}`}>
                        {product.outOfStock ? 'Precio estimado' : 'Precio final'}
                      </div>
                    </div>
                    
                    {/* Botón mejorado */}
                    <button 
                      className={`add-btn relative overflow-hidden text-white px-4 sm:px-6 py-2.5 rounded-full font-bold transform transition-all duration-300 text-xs sm:text-sm w-full sm:w-auto shadow-lg group/btn ${
                        product.outOfStock
                          ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
                          : loadingProduct === product.name
                            ? 'bg-gradient-to-r from-green-900 to-green-800 btn-loading cursor-not-allowed'
                            : 'bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 hover:scale-105 hover:shadow-xl cursor-pointer'
                      }`}
                      onClick={() => handleAddToCart(product)}
                      disabled={loadingProduct === product.name || product.outOfStock}
                    >
                      {/* Efecto de brillo - solo si no está sin stock */}
                      {!product.outOfStock && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      )}
                      
                      <span className="relative z-10">
                        {product.outOfStock ? (
                          <>
                            <span className="hidden sm:inline">🌱 Próximamente</span>
                            <span className="sm:hidden">🌱 Pronto</span>
                          </>
                        ) : loadingProduct === product.name ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span className="hidden sm:inline">Agregando...</span>
                            <span className="sm:hidden">...</span>
                          </div>
                        ) : (
                          <>
                            <span className="hidden sm:inline">Agregar al carrito</span>
                            <span className="sm:hidden">Agregar +</span>
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
