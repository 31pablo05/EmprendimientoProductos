import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.name === product.name);
      if (found) {
        return prev.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleQtyChange = (item, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.name === item.name ? { ...i, qty: Math.max(1, i.qty + delta) } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  // Eliminar producto completamente
  const handleRemoveItem = (item) => {
    setCartItems((prev) => prev.filter((i) => i.name !== item.name));
  };

  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

  const handleCheckout = () => {
    // WhatsApp order logic
    const order = cartItems
      .map((item) => `${item.qty} x ${item.name} ($${item.price})`)
      .join("%0A");
    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const msg = `Hola! Quiero pedir:%0A${order}%0ATotal: $${total}`;
    window.open(
      `https://wa.me/542801234567?text=${msg}`,
      "_blank"
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCTAClick = () => {
    window.location.hash = "#productos";
    const el = document.getElementById("productos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <div className="bg-cream min-h-screen">
        <Navbar cartCount={cartItems.reduce((a, b) => a + b.qty, 0)} onCartClick={handleCartOpen} />
        <div className="pt-24">
          <Routes>
            <Route
              path="/"
              element={<Home onAddToCart={handleAddToCart} onCTAClick={handleCTAClick} />}
            />
            <Route path="/productos" element={<Productos onAddToCart={handleAddToCart} />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <CartModal
          cartItems={cartItems}
          cartOpen={cartOpen}
          onClose={handleCartClose}
          onQtyChange={handleQtyChange}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
          total={total}
        />
        <WhatsAppButton onClick={handleCheckout} />
      </div>
    </Router>
  );
}

export default App;
