const EmptyState = ({ title, message, actionText, onAction, icon = "🛒" }) => {
  return (
    <div className="empty-state text-center py-8">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{message}</p>
      {actionText && onAction && (
        <button 
          onClick={onAction}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
