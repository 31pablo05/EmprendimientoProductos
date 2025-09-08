import { useEffect } from "react";

const Toast = ({ show, message, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-16 sm:top-20 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto z-50 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg transform transition-all duration-300 animate-slide-in">
      <div className="flex items-center gap-2">
        <span className="text-base sm:text-lg">✅</span>
        <span className="font-medium text-sm sm:text-base">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
