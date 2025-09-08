const Contact = () => (
  <section className="contact py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-cream" id="contacto">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="section-title text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contactame 📞
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          ¿Tenés alguna consulta sobre mis productos o necesitás una página web? ¡Escribime!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8">
        {/* Ubicación */}
        <div className="contact-item bg-white p-6 md:p-8 rounded-xl text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="icon text-2xl sm:text-3xl text-red-600">📍</div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Ubicación</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Trelew, Chubut<br/>
            <span className="text-blue-600">Patagonia Argentina 🇦🇷</span>
          </p>
        </div>

        {/* WhatsApp */}
        <div className="contact-item bg-white p-6 md:p-8 rounded-xl text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="icon text-2xl sm:text-3xl text-green-600">�</div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">WhatsApp</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-2">+54 9 280 438-9134</p>
          <a 
            href="https://wa.me/5492804389134" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-medium hover:underline"
          >
            <span>💬</span>
            <span>Enviar mensaje</span>
          </a>
        </div>

        {/* Email */}
        <div className="contact-item bg-white p-6 md:p-8 rounded-xl text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="icon text-2xl sm:text-3xl text-blue-600">📧</div>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-2 break-all">Pabloproboste64@gmail.com</p>
          <a 
            href="mailto:Pabloproboste64@gmail.com" 
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium hover:underline"
          >
            <span>✉️</span>
            <span>Escribir email</span>
          </a>
        </div>
      </div>

      {/* Sección adicional */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Horarios */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
              <span className="text-xl text-amber-600">⏰</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Horarios de Atención</h3>
              <p className="text-sm text-gray-600">Para pedidos y consultas</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between items-center py-1">
              <span className="font-medium">Lunes - Sábado:</span>
              <span className="text-gray-800">9:00 - 19:00</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="font-medium">Domingo:</span>
              <span className="text-red-600 font-medium">Cerrado</span>
            </div>
            <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-xs text-amber-800">
                💡 <strong>Tip:</strong> Los pedidos se toman hasta las 17:00 para entrega al día siguiente
              </p>
            </div>
          </div>
        </div>

        {/* Servicios Web */}
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 md:p-8 rounded-xl shadow-lg border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center">
              <span className="text-xl text-indigo-600">💻</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Desarrollo Web</h3>
              <p className="text-sm text-blue-700">También creo páginas web profesionales</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-blue-600">✨</span>
              <span>Sitios web responsivos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-blue-600">🚀</span>
              <span>Landing pages para emprendimientos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-blue-600">🎨</span>
              <span>Diseño moderno y atractivo</span>
            </div>
            
            <div className="mt-4 pt-4 border-t border-blue-200">
              <a 
                href="https://devcraftpablo.online/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-md"
              >
                <span>🌐</span>
                <span>Ver mi Portfolio</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer de desarrollador */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-50 to-white px-6 py-3 rounded-2xl shadow-md border border-gray-100">
            <span className="text-gray-600 text-sm">Desarrollado con</span>
            <span className="text-red-500 text-lg animate-pulse">❤️</span>
            <span className="text-gray-600 text-sm">por</span>
            <a 
              href="https://devcraftpablo.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-300 hover:underline flex items-center gap-1"
            >
              <span>Pablo Proboste</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            💻 Desarrollo web profesional • 🍕 Productos artesanales de calidad
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
