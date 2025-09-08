const Categories = () => (
  <section className="categories py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header mejorado */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-amber-800 font-medium text-sm mb-4">
          <span>🌟</span>
          <span>Lo que hacemos mejor</span>
        </div>
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Nuestras Especialidades
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Cada producto está elaborado con ingredientes frescos y naturales, siguiendo recetas caseras tradicionales
        </p>
      </div>

      {/* Grid de categorías mejorado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Prepizzas */}
        <div className="category-card group relative bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-orange-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
          {/* Efecto de fondo animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Contenido */}
          <div className="relative z-10">
            {/* Icono mejorado */}
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <div className="text-4xl sm:text-5xl group-hover:animate-bounce">🍕</div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-700 transition-colors">
              Prepizzas Artesanales
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              Masa casera fermentada 24hs, lista para que agregues tus ingredientes favoritos y disfrutes en casa
            </p>
            
            {/* Features */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>Masa fermentada naturalmente</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                <span>Lista para hornear</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panes */}
        <div className="category-card group relative bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
          {/* Efecto de fondo animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Contenido */}
          <div className="relative z-10">
            {/* Icono mejorado */}
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <div className="text-4xl sm:text-5xl group-hover:animate-bounce">🥖</div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
              Panes Caseros
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              Panes recién horneados con harinas de calidad, perfectos para acompañar tus comidas o desayunos
            </p>
            
            {/* Features */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Horneado diariamente</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span>Ingredientes naturales</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ensaladas */}
        <div className="category-card group relative bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-green-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden sm:col-span-2 lg:col-span-1">
          {/* Efecto de fondo animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Contenido */}
          <div className="relative z-10">
            {/* Icono mejorado */}
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <div className="text-4xl sm:text-5xl group-hover:animate-bounce">🥗</div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
              Ensaladas Frescas
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              Bandejas de vegetales frescos, lavados y cortados, listos para preparar ensaladas nutritivas
            </p>
            
            {/* Features */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Verduras del día</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Listas para consumir</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección adicional de beneficios */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl text-blue-600">🏠</span>
          </div>
          <h4 className="font-bold text-gray-800 text-sm mb-1">Casero</h4>
          <p className="text-xs text-gray-600">100% artesanal</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl text-green-600">🌱</span>
          </div>
          <h4 className="font-bold text-gray-800 text-sm mb-1">Natural</h4>
          <p className="text-xs text-gray-600">Sin conservantes</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl text-purple-600">⚡</span>
          </div>
          <h4 className="font-bold text-gray-800 text-sm mb-1">Fresco</h4>
          <p className="text-xs text-gray-600">Elaborado diario</p>
        </div>
        
        <div className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-2xl text-red-600">❤️</span>
          </div>
          <h4 className="font-bold text-gray-800 text-sm mb-1">Con Amor</h4>
          <p className="text-xs text-gray-600">Recetas familiares</p>
        </div>
      </div>
    </div>
  </section>
);

export default Categories;
