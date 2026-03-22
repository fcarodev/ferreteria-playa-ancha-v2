import { useState, useEffect } from 'react';
import { Wrench, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src="/logo.jpg" alt="Ferretería Playa Ancha" className="h-12 w-12 rounded-lg object-cover" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Ferretería Playa Ancha</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('productos')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Productos
            </button>
            <button onClick={() => scrollToSection('fletes')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Fletes
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-blue-900 font-medium transition-colors">
              Contacto
            </button>
            <a
              href="tel:+56971371271"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Llamar Ahora
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900 hover:text-blue-900 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('productos')}
              className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2 transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('fletes')}
              className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2 transition-colors"
            >
              Fletes
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left text-gray-700 hover:text-blue-900 font-medium py-2 transition-colors"
            >
              Contacto
            </button>
            <a
              href="tel:+56971371271"
              className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Llamar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
