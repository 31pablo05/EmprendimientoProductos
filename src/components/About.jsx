const About = () => (
  <section className="about py-20 bg-white" id="nosotros">
    <div className="max-w-6xl mx-auto px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="about-content">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">Nuestra Historia</h2>
          <p className="text-gray-600 text-lg mb-4">Somos una familia apasionada por la cocina artesanal. Desde hace más de 10 años elaboramos productos frescos y naturales para tu mesa.</p>
          <p className="text-gray-600 text-lg mb-6">Nuestras prepizzas, panes y ensaladas están hechas con ingredientes seleccionados y mucho amor. Creemos que la comida casera es la que mejor alimenta el alma.</p>
          <div className="stats flex gap-8 mt-8">
            <div className="stat text-center">
              <div className="stat-number text-2xl font-bold text-green-900">10+</div>
              <div className="stat-label text-gray-600 text-sm">Años de experiencia</div>
            </div>
            <div className="stat text-center">
              <div className="stat-number text-2xl font-bold text-green-900">1000+</div>
              <div className="stat-label text-gray-600 text-sm">Clientes satisfechos</div>
            </div>
            <div className="stat text-center">
              <div className="stat-number text-2xl font-bold text-green-900">100%</div>
              <div className="stat-label text-gray-600 text-sm">Artesanal</div>
            </div>
          </div>
        </div>
        <div className="about-image text-center">
          <div className="about-visual w-full max-w-md h-72 bg-cream rounded-xl flex flex-col items-center justify-center mx-auto">
            <div className="icon text-6xl text-orange-800 mb-4">👨‍🍳</div>
            <div className="text-2xl font-bold text-green-900">Familia Artesanal</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
