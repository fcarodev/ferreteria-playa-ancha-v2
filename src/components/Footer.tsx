import { Wrench, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-400 p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold">Ferretería Playa Ancha</h3>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Tu ferretería de confianza en Valparaíso. Materiales de construcción y más.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ferreteriaplayaancha/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-blue-900" />
              </a>
              <a
                href="https://www.facebook.com/ferreteriaplayaancha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-yellow-400 rounded-lg flex items-center justify-center transition-all group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-blue-900" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('productos')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Productos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fletes')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Fletes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('nosotros')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Productos</h4>
            <ul className="space-y-3 text-blue-100">
              <li>Materiales de Construcción</li>
              <li>Electricidad</li>
              <li>Sanitarios</li>
              <li>PVC</li>
              <li>Herramientas</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+56971371271" className="flex items-center gap-2 text-blue-100 hover:text-yellow-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  +56 9 7137 1271
                </a>
              </li>
              <li>
                <a href="mailto:ferreteria.playaancha01@gmail.com" className="flex items-start gap-2 text-blue-100 hover:text-yellow-400 transition-colors">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span className="break-all">ferreteria.playaancha01@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Luis+Guevara+Ortúzar+1421,+Valparaíso,+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  Luis Guevara Ortúzar 1421, Valparaíso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-center md:text-left">
              © 2026 Ferretería Playa Ancha. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold">4.9 en Google</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
