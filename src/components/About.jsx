const About = () => (
  <section className="about py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white" id="nosotros">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="about-content text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
            Mi Historia 👋
          </h2>
          
          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              ¡Hola! Soy <span className="font-semibold text-gray-800">desarrollador frontend</span> y esta página web la diseñé y desarrollé yo mismo. 
            </p>
            
            <p>
              Comencé este pequeño emprendimiento este año como una forma de generar ingresos extra para poder estudiar y cubrir los gastos del día a día.
            </p>
            
            <p>
              Preparo <span className="font-medium text-amber-700">prepizzas caseras, panes integrales y ensaladas frescas</span> con mucho cariño desde mi casa. 
              Es mi manera de combinar mi amor por la cocina con la necesidad de generar recursos para seguir creciendo.
            </p>
            
            <p className="text-sm italic text-gray-500 bg-amber-50 p-3 rounded-lg border-l-4 border-amber-300">
              "Cada producto que hago es una pequeña contribución para alcanzar mis metas de estudio y crecimiento personal."
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200 mt-4 relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100/50 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-indigo-100/50 rounded-full blur-lg"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-600 text-white p-2 rounded-lg text-lg">💼</div>
                  <div>
                    <p className="text-sm font-semibold text-blue-800 mb-1">
                      ¿Necesitas una página web como esta?
                    </p>
                    <p className="text-xs text-blue-700">
                      Como desarrollador frontend, también creo sitios web profesionales para emprendimientos y negocios.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <a 
                    href="https://devcraftpablo.online/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span>🌐</span>
                    <span>Ver mi Portfolio</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  <div className="flex items-center gap-2 text-xs text-blue-600">
                    <span className="flex items-center gap-1">
                      <span>⚡</span>
                      <span>React</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span>🎨</span>
                      <span>Tailwind</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span>📱</span>
                      <span>Responsive</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full border border-blue-200">
              <span className="text-lg">💻</span>
              <span className="text-sm font-medium text-blue-800">Frontend Developer</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-full border border-green-200">
              <span className="text-lg">🌱</span>
              <span className="text-sm font-medium text-green-800">Emprendedor 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-50 px-3 py-2 rounded-full border border-amber-200">
              <span className="text-lg">🍕</span>
              <span className="text-sm font-medium text-amber-800">Productos Caseros</span>
            </div>
          </div>
        </div>
        
        <div className="about-image text-center order-first md:order-last">
          <div className="about-visual w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            {/* Card principal */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 relative overflow-hidden">
              {/* Decoración de fondo */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-100 to-transparent rounded-tr-3xl"></div>
              
              <div className="relative z-10">
                {/* Foto personal o ícono */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 relative">
                  <img 
                    src="/images/pablo-proboste2.png" 
                    alt="Pablo - Desarrollador Frontend" 
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-4xl sm:text-5xl" style={{display: 'none'}}>
                    👨‍💻
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Pablo - Desarrollador & Emprendedor</h3>
                <p className="text-sm text-gray-600 mb-4">Creando soluciones web y productos caseros</p>
                
                <div className="flex justify-center gap-3 text-2xl mb-4">
                  <span title="Código">💻</span>
                  <span title="Más">+</span>
                  <span title="Cocina">🍳</span>
                  <span title="Igual">→</span>
                  <span title="Emprendimiento">🚀</span>
                </div>
                
                <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
                  <p className="font-medium mb-1">💡 ¿Sabías que...?</p>
                  <p>Esta web fue diseñada y programada completamente por mí usando React y Tailwind CSS</p>
                </div>
              </div>
            </div>
            
            {/* Stats simples */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 text-center border border-blue-200">
                <div className="text-lg font-bold text-blue-800">2025</div>
                <div className="text-xs text-blue-600">Año de inicio</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 text-center border border-green-200">
                <div className="text-lg font-bold text-green-800">100%</div>
                <div className="text-xs text-green-600">Hecho en casa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
