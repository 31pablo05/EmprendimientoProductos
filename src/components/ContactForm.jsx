import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envío (aquí conectarías con tu backend o servicio de email)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Crear mensaje para WhatsApp
      const message = `*CONSULTA WEB*%0A%0A👤 Nombre: ${formData.name}%0A📧 Email: ${formData.email}%0A📞 Teléfono: ${formData.phone}%0A%0A💬 Mensaje:%0A${formData.message}`;
      
      window.open(`https://wa.me/5492804389134?text=${message}`, "_blank");
      
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">¡Mensaje enviado!</h3>
        <p className="text-green-600 mb-4">Te redirigimos a WhatsApp para completar tu consulta.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-green-600 hover:text-green-800 font-medium"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold text-green-900 mb-4">Envianos tu consulta</h3>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            placeholder="Tu nombre completo"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          placeholder="+54 9 280 438-9134"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          placeholder="Contanos qué necesitás o cualquier consulta que tengas..."
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium transition ${
          isSubmitting 
            ? 'opacity-70 cursor-not-allowed' 
            : 'hover:bg-green-600'
        }`}
      >
        {isSubmitting ? (
          <>
            <span className="inline-block animate-spin mr-2">⏳</span>
            Enviando...
          </>
        ) : (
          '📱 Enviar por WhatsApp'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
