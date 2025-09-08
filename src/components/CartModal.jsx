
const CartModal = ({ cartItems, cartOpen, onClose, onQtyChange, onRemoveItem, onCheckout, total }) => {
  // Cierra el modal si se hace click fuera del contenido
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("cart-modal")) {
      onClose();
    }
  };

  return (
    <div
      className="cart-modal fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      style={{ display: cartOpen ? "flex" : "none" }}
      onClick={handleBackdropClick}
    >
      <div className="cart-content bg-white p-8 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto relative">
        <div className="cart-header flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-green-900">Tu Pedido</h3>
          <button className="close-btn text-2xl text-gray-600" onClick={onClose}>&times;</button>
        </div>
        <div id="cart-items">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">El carrito está vacío.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.name} className="cart-item flex justify-between items-center py-4 border-b border-gray-100">
                <div className="item-info flex-1">
                  <span className="item-name font-bold text-green-900">{item.name}</span>
                  <span className="item-price text-orange-800 font-bold ml-2">${item.price}</span>
                </div>
                <div className="quantity-controls flex items-center gap-2">
                  <button className="qty-btn bg-green-900 text-white w-8 h-8 rounded-full font-bold" onClick={() => onQtyChange(item, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button className="qty-btn bg-green-900 text-white w-8 h-8 rounded-full font-bold" onClick={() => onQtyChange(item, 1)}>+</button>
                  <button className="ml-2 text-gray-400 hover:text-red-600 text-xl font-bold bg-transparent border-none cursor-pointer" title="Eliminar" onClick={() => onRemoveItem(item)}>
                    <span role="img" aria-label="Eliminar">🗑️</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div id="cart-total" className="cart-total text-center my-6 text-xl font-bold text-green-900">Total: ${total}</div>
        <button className="checkout-btn w-full bg-green-500 text-white py-3 text-lg font-bold rounded-lg hover:bg-green-700 transition" onClick={onCheckout}>
          📱 Hacer Pedido por WhatsApp
        </button>
      </div>
    </div>
  );
};


export default CartModal;
