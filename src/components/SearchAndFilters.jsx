import { useState } from "react";

const SearchAndFilters = ({ onSearch, onFilterChange, currentFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handlePriceFilter = () => {
    onFilterChange({ 
      category: currentFilter,
      priceRange: priceRange
    });
  };

  return (
    <div className="search-filters bg-white p-6 rounded-xl shadow-md mb-8">
      <div className="grid md:grid-cols-3 gap-4">
        {/* Búsqueda por texto */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Buscar productos
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Buscar prepizzas, panes..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Filtro por precio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rango de precio
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Botón aplicar filtros */}
        <div className="flex items-end">
          <button
            onClick={handlePriceFilter}
            className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;
