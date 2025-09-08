import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import CheckoutModal from "./components/CheckoutModal";
import Toast from "./components/Toast";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import "./App.css";

function App() {
  // Cargar carrito desde localStorage al iniciar
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para mostrar notificaciones
  const showToast = (message) => {
    setToast({ show: true, message });
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.name === product.name);
      if (found) {
        showToast(`Se agregó otro ${product.name} al carrito`);
        return prev.map((item) =>
          item.name === product.name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      showToast(`${product.name} agregado al carrito`);
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

  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);
  
  const handleCheckoutOpen = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  
  const handleCheckoutClose = () => {
    setIsCheckoutOpen(false);
  };

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      showToast("Tu carrito está vacío. Agrega algunos productos antes de hacer el pedido.");
      return;
    }
    
    // Abrir modal de checkout en lugar de enviar directamente
    handleCheckoutOpen();
  };

  const handleCheckoutConfirm = async (formData) => {
    setIsLoading(true);
    showToast("Preparando tu pedido...");
    
    try {
      // Simular un pequeño delay para mostrar el loading
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Formatear fecha de entrega
      const deliveryDate = new Date(formData.deliveryDate).toLocaleDateString('es-AR');
      const timeSlots = {
        mañana: "9:00 - 12:00",
        tarde: "14:00 - 18:00", 
        noche: "18:00 - 21:00"
      };
      
      // WhatsApp order logic con formato mejorado y datos completos
      const itemsList = cartItems
        .map((item) => `• ${item.qty} x ${item.name} - $${(item.price * item.qty).toLocaleString()}`)
        .join("%0A");
      
      const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
      const currentDate = new Date().toLocaleDateString('es-AR');
      
      const msg = `🌾 *NUEVO PEDIDO ARTESANAL* 🌾%0A%0A` +
        `📅 *Fecha del pedido:* ${currentDate}%0A%0A` +
        `👤 *DATOS DEL CLIENTE:*%0A` +
        `• Nombre: ${formData.name}%0A` +
        `• Teléfono: ${formData.phone}%0A` +
        `• Dirección: ${formData.address}%0A%0A` +
        `� *ENTREGA:*%0A` +
        `• Fecha: ${deliveryDate}%0A` +
        `• Horario: ${timeSlots[formData.deliveryTime]}%0A%0A` +
        `�📦 *PRODUCTOS:*%0A${itemsList}%0A%0A` +
        `💳 *Método de pago:* ${formData.paymentMethod === 'efectivo' ? '� Efectivo' : '🏦 Transferencia'}%0A%0A` +
        `�💰 *TOTAL: $${total.toLocaleString()}*%0A%0A` +
        `${formData.notes ? `📝 *Notas adicionales:* ${formData.notes}%0A%0A` : ''}` +
        `¡Gracias por tu pedido! 😊%0A` +
        `Te contactaremos pronto para coordinar los detalles.`;
      
      window.open(
        `https://wa.me/5492804389134?text=${msg}`,
        "_blank"
      );
      
      showToast("¡Pedido enviado correctamente! 🎉");
      
      // Limpiar carrito y cerrar modales después de enviar
      setCartItems([]);
      setIsCheckoutOpen(false);
      setIsCartOpen(false);
    } catch (error) {
      console.error('Error en checkout:', error);
      showToast("Hubo un error al procesar tu pedido. Intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCTAClick = () => {
    window.location.hash = "#productos";
    const el = document.getElementById("productos");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ErrorBoundary>
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
            cartOpen={isCartOpen}
            onClose={handleCartClose}
            onOpen={handleCartOpen}
            onQtyChange={handleQtyChange}
            onRemoveItem={handleRemoveItem}
            onCheckout={handleCheckout}
            total={total}
            isLoading={isLoading}
          />
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={handleCheckoutClose}
            onConfirm={handleCheckoutConfirm}
            cartItems={cartItems}
            total={total}
            isLoading={isLoading}
          />
          <WhatsAppButton onClick={() => {
            if (cartItems.length > 0) {
              handleCheckout();
            } else {
              showToast("Primero agrega productos al carrito para hacer un pedido");
            }
          }} />
          <Toast 
            show={toast.show} 
            message={toast.message} 
            onClose={() => setToast({ show: false, message: '' })} 
          />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
