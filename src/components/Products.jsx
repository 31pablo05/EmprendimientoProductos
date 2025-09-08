import { useState } from "react";

const productsData = [
  { category: "prepizzas", name: "Prepizza Clásica", desc: "Masa artesanal de 30cm, perfecta para 2-3 personas", price: 1200, icon: "🍕" },
  { category: "prepizzas", name: "Prepizza Grande", desc: "Masa artesanal de 40cm, ideal para 4-5 personas", price: 1800, icon: "🍕" },
  { category: "panes", name: "Pan Casero", desc: "Pan integral recién horneado, 500g", price: 800, icon: "🥖" },
  { category: "panes", name: "Baguettes (x2)", desc: "Pack de 2 baguettes francesas crujientes", price: 900, icon: "🥖" },
  { category: "ensaladas", name: "Ensalada Mixta", desc: "Bandeja de vegetales frescos cortados (lechuga, tomate, zanahoria)", price: 1500, icon: "🥗" },
  { category: "ensaladas", name: "Ensalada Completa", desc: "Bandeja premium con variedad de vegetales y aderezo incluido", price: 2200, icon: "🥗" },
];

const categories = [
  { key: "todos", label: "Todos" },
  { key: "prepizzas", label: "Prepizzas" },
  { key: "panes", label: "Panes" },
  { key: "ensaladas", label: "Ensaladas" },
];

const Products = ({ onAddToCart }) => {
  const [filter, setFilter] = useState("todos");

  const filteredProducts =
    filter === "todos"
      ? productsData
      : productsData.filter((p) => p.category === filter);

  return (
    <section className="products py-20 bg-gradient-to-b from-white to-cream" id="productos">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="section-title text-center text-4xl font-bold text-green-900 mb-12">Nuestros Productos</h2>
        <div className="products-intro text-center mb-8">
          <p className="text-gray-600 text-lg">Selecciona tus favoritos y agrégalos al carrito</p>
        </div>
        <div className="filter-tabs flex justify-center mb-8">
          <div className="tabs-container bg-white p-2 rounded-full shadow flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-btn px-6 py-2 rounded-full font-medium transition ${filter === cat.key ? "bg-green-900 text-white" : "text-gray-600 hover:bg-green-900 hover:text-white"}`}
                onClick={() => setFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <div className="products-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.name} className={`product-card ${product.category} bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition`}>
              <div className="product-image w-full h-48 bg-cream flex flex-col items-center justify-center border-b-2 border-gray-100">
                <div className="icon text-4xl mb-2">{product.icon}</div>
                <div className="name text-lg font-bold text-green-900">{product.name}</div>
              </div>
              <div className="product-info p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.desc}</p>
                <div className="product-footer flex justify-between items-center">
                  <span className="price text-xl font-bold text-orange-800">${product.price}</span>
                  <button className="add-btn bg-green-900 text-white px-4 py-2 rounded-full font-bold hover:bg-green-950 transition" onClick={() => onAddToCart(product)}>
                    Agregar +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
