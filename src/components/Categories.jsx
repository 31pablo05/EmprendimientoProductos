const Categories = () => (
  <section className="categories py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="section-title text-center text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-8 md:mb-12">Nuestras Especialidades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <div className="category-card bg-cream p-6 md:p-8 rounded-xl text-center border-2 border-transparent hover:border-orange-300 shadow-md transition">
          <div className="icon text-4xl sm:text-5xl mb-2">🍕</div>
          <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2">Prepizzas</h3>
          <p className="text-sm sm:text-base text-gray-600">Masa artesanal, lista para que agregues tus ingredientes favoritos</p>
        </div>
        <div className="category-card bg-cream p-6 md:p-8 rounded-xl text-center border-2 border-transparent hover:border-orange-300 shadow-md transition">
          <div className="icon text-4xl sm:text-5xl mb-2">🥖</div>
          <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2">Panes</h3>
          <p className="text-sm sm:text-base text-gray-600">Panes caseros recién horneados, perfectos para cualquier ocasión</p>
        </div>
        <div className="category-card bg-cream p-6 md:p-8 rounded-xl text-center border-2 border-transparent hover:border-orange-300 shadow-md transition sm:col-span-2 md:col-span-1">
          <div className="icon text-4xl sm:text-5xl mb-2">🥗</div>
          <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2">Ensaladas</h3>
          <p className="text-sm sm:text-base text-gray-600">Bandejas de vegetales frescos, cortados y listos para preparar</p>
        </div>
      </div>
    </div>
  </section>
);

export default Categories;
