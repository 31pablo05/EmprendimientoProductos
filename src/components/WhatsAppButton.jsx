const WhatsAppButton = ({ onClick }) => (
  <button
    className="whatsapp-btn fixed bottom-4 sm:bottom-6 left-4 sm:left-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full text-lg sm:text-2xl shadow-lg z-40 animate-bounce hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white"
    onClick={onClick}
    title="Contactar por WhatsApp"
  >
    📱
  </button>
);

export default WhatsAppButton;
