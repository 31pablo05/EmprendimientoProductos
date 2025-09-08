import { useState } from "react";

const CheckoutModal = ({ isOpen, onClose, onConfirm, cartItems, total, isLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    deliveryDate: "",
    deliveryTime: "",
    paymentMethod: "efectivo",
    notes: ""
  });

  const [errors, setErrors] = useState({});

  // Obtener fecha mínima (hoy)
  const today = new Date();
  const minDate = today.toISOString().split('T')[0];
  
  // Obtener fecha máxima (7 días desde hoy)
  const maxDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error si el campo se completa
    if (errors[name] && value.trim()) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es obligatorio";
    if (!formData.address.trim()) newErrors.address = "La dirección es obligatoria";
    if (!formData.deliveryDate) newErrors.deliveryDate = "La fecha de entrega es obligatoria";
    if (!formData.deliveryTime) newErrors.deliveryTime = "El horario de entrega es obligatorio";
    
    // Validar formato de teléfono (básico)
    if (formData.phone && !/^\d{8,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Ingresa un teléfono válido (solo números)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onConfirm(formData);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("checkout-modal")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="checkout-modal fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="checkout-content bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-900 to-green-800 text-white p-4 sm:p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Finalizar Pedido</h3>
              <p className="text-green-100 text-sm">Completa tus datos para coordinar la entrega</p>
            </div>
            <button 
              className="text-white hover:text-green-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition"
              onClick={onClose}
            >
              ×
            </button>
          </div>
        </div>

        {/* Resumen del pedido */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-green-50 border-b">
          <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
            <span>🛒</span>
            Resumen de tu pedido
          </h4>
          <div className="space-y-2 mb-3">
            {cartItems.map((item) => (
              <div key={item.name} className="flex justify-between items-center text-sm">
                <span className="text-gray-700">{item.name} x{item.qty}</span>
                <span className="font-bold text-green-900">${(item.price * item.qty).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 flex justify-between items-center font-bold text-lg">
            <span className="text-gray-800">Total:</span>
            <span className="text-green-900">${total.toLocaleString()}</span>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Datos personales */}
          <div className="space-y-4">
            <h4 className="font-bold text-green-900 flex items-center gap-2">
              <span>👤</span>
              Datos de contacto
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Tu nombre completo"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="1234567890"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dirección de entrega *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Calle, número, barrio, referencias"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
          </div>

          {/* Fecha y hora de entrega */}
          <div className="space-y-4">
            <h4 className="font-bold text-green-900 flex items-center gap-2">
              <span>📅</span>
              Fecha y hora de entrega
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de entrega *</label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  min={minDate}
                  max={maxDate}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.deliveryDate && <p className="text-red-500 text-xs mt-1">{errors.deliveryDate}</p>}
                <p className="text-xs text-gray-500 mt-1">Entregamos hasta 7 días desde hoy</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Horario preferido *</label>
                <select
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleInputChange}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 ${errors.deliveryTime ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Selecciona un horario</option>
                  <option value="mañana">Mañana (9:00 - 12:00)</option>
                  <option value="tarde">Tarde (14:00 - 18:00)</option>
                  <option value="noche">Noche (18:00 - 21:00)</option>
                </select>
                {errors.deliveryTime && <p className="text-red-500 text-xs mt-1">{errors.deliveryTime}</p>}
              </div>
            </div>
          </div>

          {/* Método de pago */}
          <div className="space-y-4">
            <h4 className="font-bold text-green-900 flex items-center gap-2">
              <span>💳</span>
              Método de pago
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="efectivo"
                  checked={formData.paymentMethod === "efectivo"}
                  onChange={handleInputChange}
                  className="mr-3 text-green-600"
                />
                <div>
                  <div className="font-medium">💵 Efectivo</div>
                  <div className="text-sm text-gray-500">Pago al momento de la entrega</div>
                </div>
              </label>

              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="transferencia"
                  checked={formData.paymentMethod === "transferencia"}
                  onChange={handleInputChange}
                  className="mr-3 text-green-600"
                />
                <div>
                  <div className="font-medium">🏦 Transferencia</div>
                  <div className="text-sm text-gray-500">Te enviamos los datos bancarios</div>
                </div>
              </label>
            </div>
          </div>

          {/* Notas adicionales */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notas adicionales (opcional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows="3"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="Cualquier información adicional sobre tu pedido..."
            />
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Volver al carrito
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`flex-1 px-6 py-3 bg-gradient-to-r from-green-900 to-green-800 text-white rounded-lg hover:from-green-800 hover:to-green-700 transition font-medium flex items-center justify-center gap-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <span>📱</span>
                  <span>Enviar por WhatsApp</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
