import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola! Mi nombre es ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/56971371271?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarte con tu proyecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>

              <div className="space-y-4">
                <a
                  href="tel:+56971371271"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Teléfono</p>
                    <p className="text-blue-900 font-medium">+56 9 7137 1271</p>
                  </div>
                </a>

                <a
                  href="mailto:ferreteria.playaancha01@gmail.com"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-blue-900 font-medium break-all">ferreteria.playaancha01@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Luis+Guevara+Ortúzar+1421,+Valparaíso,+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dirección</p>
                    <p className="text-blue-900 font-medium">Luis Guevara Ortúzar 1421</p>
                    <p className="text-gray-600">Valparaíso, Chile</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Horario</p>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 - 17:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ferreteriaplayaancha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-900 hover:bg-blue-800 rounded-lg transition-all transform hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-yellow-400" />
                </a>
                <a
                  href="https://www.facebook.com/ferreteriaplayaancha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-blue-900 hover:bg-blue-800 rounded-lg transition-all transform hover:scale-110"
                >
                  <Facebook className="w-6 h-6 text-yellow-400" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all"
                  placeholder="+56 9 XXXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/20 outline-none transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Enviar Mensaje por WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.8!2d-71.6167!3d-33.0333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0d4c6b5e5e5%3A0x0!2sLuis%20Guevara%20Ort%C3%BAzar%201421%2C%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Ferretería Playa Ancha"
          />
        </div>
      </div>
    </section>
  );
}
