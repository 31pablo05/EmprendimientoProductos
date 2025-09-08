
import EmptyState from './EmptyState';

const CartModal = ({ cartItems, cartOpen, onClose, onOpen, onQtyChange, onRemoveItem, onCheckout, total, isLoading }) => {
  // Cierra el modal si se hace click fuera del contenido
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("cart-modal")) {
      onClose();
    }
  };

  // Confirmar antes de eliminar
  const handleRemoveItem = (item) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${item.name}" del carrito?`)) {
      onRemoveItem(item);
    }
  };

  return (
    <>
      {/* Indicador flotante del carrito cuando está cerrado */}
      {!cartOpen && cartItems.length > 0 && (
        <div 
          className="cart-indicator fixed bottom-20 sm:bottom-6 right-4 sm:right-6 cursor-pointer group"
          onClick={() => {
            // Abrir el carrito al hacer clic en el indicador flotante
            if (onOpen) {
              onOpen();
            }
          }}
        >
          <div className="bg-gradient-to-r from-green-900 to-green-800 text-white rounded-2xl p-3 sm:p-4 shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none border-2 border-white">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <span className="text-xl sm:text-2xl">🛒</span>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold animate-bounce">
                  {cartItems.reduce((sum, item) => sum + item.qty, 0)}
                </div>
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-medium text-green-100">Tu pedido</div>
                <div className="text-sm font-bold">${total.toLocaleString()}</div>
                <div className="text-xs text-green-200">👆 Toca para ver</div>
              </div>
              <div className="sm:hidden text-center">
                <div className="text-xs font-bold">${total.toLocaleString()}</div>
                <div className="text-xs text-green-200">Ver</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal del carrito */}
      <div
        className="cart-modal fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        style={{ display: cartOpen ? "flex" : "none" }}
        onClick={handleBackdropClick}
      >
        <div className="cart-content bg-white rounded-2xl max-w-lg w-full max-h-[90vh] sm:max-h-[80vh] overflow-hidden shadow-2xl">
          {/* Header mejorado */}
          <div className="cart-header bg-gradient-to-r from-green-900 to-green-800 text-white p-4 sm:p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1">Tu Carrito</h3>
                <p className="text-green-100 text-sm">
                  {cartItems.length > 0 
                    ? `${cartItems.reduce((sum, item) => sum + item.qty, 0)} productos seleccionados`
                    : "No hay productos seleccionados"
                  }
                </p>
              </div>
              <button 
                className="text-white hover:text-green-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition"
                onClick={onClose}
              >
                ×
              </button>
            </div>
          </div>

          {/* Contenido del carrito */}
          <div className="overflow-y-auto flex-1" style={{ maxHeight: 'calc(90vh - 200px)' }}>
            <div className="p-4 sm:p-6">
              {cartItems.length === 0 ? (
                <EmptyState 
                  title="Carrito vacío"
                  message="¡Aún no agregaste ningún producto! Descubrí nuestras deliciosas opciones artesanales."
                  actionText="Ver Productos"
                  onAction={() => {
                    onClose();
                    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  icon="🛒"
                />
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.name} className="cart-item bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-4 border border-green-100">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div className="item-info flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{item.icon}</span>
                            <span className="item-name font-bold text-green-900 text-sm sm:text-base">{item.name}</span>
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 line-clamp-1">{item.desc}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="item-price text-orange-800 font-bold text-sm">${item.price.toLocaleString()}</span>
                            <span className="text-xs text-gray-500">c/u</span>
                          </div>
                        </div>
                        
                        <div className="quantity-controls flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                          <div className="flex items-center gap-2 bg-white rounded-full p-1 shadow-sm border">
                            <button 
                              className="qty-btn bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full font-bold text-sm transition flex items-center justify-center" 
                              onClick={() => onQtyChange(item, -1)}
                            >
                              −
                            </button>
                            <span className="mx-3 font-bold text-green-900 min-w-[20px] text-center">{item.qty}</span>
                            <button 
                              className="qty-btn bg-green-500 hover:bg-green-600 text-white w-8 h-8 rounded-full font-bold text-sm transition flex items-center justify-center" 
                              onClick={() => onQtyChange(item, 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <div className="font-bold text-green-900 text-sm sm:text-base">
                              ${(item.price * item.qty).toLocaleString()}
                            </div>
                            <button 
                              className="text-gray-400 hover:text-red-600 text-xs underline transition" 
                              title="Eliminar"
                              onClick={() => handleRemoveItem(item)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer con total y botón de checkout */}
          {cartItems.length > 0 && (
            <div className="border-t bg-gray-50 p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-medium">Total del pedido:</span>
                <span className="text-2xl font-bold text-green-900">${total.toLocaleString()}</span>
              </div>
              
              <button 
                className={`checkout-btn w-full bg-gradient-to-r from-green-900 to-green-800 text-white py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl hover:from-green-800 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={onCheckout}
                disabled={isLoading || cartItems.length === 0}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="hidden sm:inline">Procesando...</span>
                    <span className="sm:hidden">...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>📱</span>
                    <span className="hidden sm:inline">Continuar con el pedido</span>
                    <span className="sm:hidden">Continuar</span>
                  </div>
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                Completa tus datos y método de pago en el siguiente paso
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};


export default CartModal;
