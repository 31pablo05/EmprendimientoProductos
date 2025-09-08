const Contact = () => (
  <section className="contact py-20 bg-cream" id="contacto">
    <div className="max-w-6xl mx-auto px-8">
      <h2 className="section-title text-center text-4xl font-bold text-green-900 mb-12">Contactanos</h2>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="contact-item bg-white p-8 rounded-xl text-center shadow-md">
          <div className="icon text-4xl text-green-900 mb-2">📍</div>
          <h3 className="text-lg font-bold text-green-900 mb-1">Ubicación</h3>
          <p className="text-gray-600">Dolavón, Chubut<br/>Patagonia Argentina</p>
        </div>
        <div className="contact-item bg-white p-8 rounded-xl text-center shadow-md">
          <div className="icon text-4xl text-green-900 mb-2">📞</div>
          <h3 className="text-lg font-bold text-green-900 mb-1">Teléfono</h3>
          <p className="text-gray-600">+54 9 280 123-4567</p>
        </div>
        <div className="contact-item bg-white p-8 rounded-xl text-center shadow-md">
          <div className="icon text-4xl text-green-900 mb-2">📧</div>
          <h3 className="text-lg font-bold text-green-900 mb-1">Email</h3>
          <p className="text-gray-600">contacto@artesanal.com</p>
        </div>
        <div className="contact-item bg-white p-8 rounded-xl text-center shadow-md">
          <div className="icon text-4xl text-green-900 mb-2">⏰</div>
          <h3 className="text-lg font-bold text-green-900 mb-1">Horarios</h3>
          <p className="text-gray-600">Lun - Sáb: 8:00 - 20:00<br/>Dom: 9:00 - 15:00</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
