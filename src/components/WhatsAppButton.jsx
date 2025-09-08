const WhatsAppButton = ({ onClick }) => (
  <button
    className="whatsapp-btn fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full text-2xl shadow-lg z-50 animate-bounce hover:scale-110 transition"
    onClick={onClick}
    title="Contactar por WhatsApp"
  >
    📱
  </button>
);

export default WhatsAppButton;
