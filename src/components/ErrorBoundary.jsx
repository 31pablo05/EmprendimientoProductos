import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream flex items-center justify-center p-8">
          <div className="bg-white rounded-xl p-8 max-w-md text-center shadow-lg">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">¡Oops! Algo salió mal</h2>
            <p className="text-gray-600 mb-6">
              Hubo un error inesperado. Por favor, recargá la página o contactanos si el problema persiste.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Recargar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
