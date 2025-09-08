const Hero = ({ onCTAClick }) => (
  <section className="hero bg-gradient-to-br from-green-900 to-orange-800 min-h-screen flex items-center pt-20 text-white">
    <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
      <div className="hero-content">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Sabores <span className="text-orange-300">Artesanales</span>
        </h1>
        <p className="text-lg mb-8 opacity-90">
          Prepizzas caseras, panes recién horneados y ensaladas frescas. Todo preparado con amor y los mejores ingredientes.
        </p>
        <button className="cta-btn bg-orange-300 text-green-900 px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:-translate-y-1 transition" onClick={onCTAClick}>
          Ver Productos ✨
        </button>
      </div>
      <div className="hero-image text-center animate-float">
        <div className="hero-visual w-full max-w-md h-96 bg-cream rounded-2xl flex flex-col items-center justify-center shadow-xl mx-auto">
          <div className="icon text-7xl mb-4">🍕</div>
          <div className="text-3xl font-bold text-green-900">Artesanal</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
