import { useState, useEffect } from 'react';
import { Phone, Package, MapPin } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=75&auto=format',
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=75&auto=format',
    'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=75&auto=format',
    'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=75&auto=format',
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=75&auto=format'
  ];

  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Todo lo que necesitas para construir y mejorar
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Materiales de construcción, electricidad y sanitarios en Playa Ancha
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+56971371271"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                <Phone className="w-6 h-6" />
                Llamar
              </a>
              <button
                onClick={() => scrollToSection('productos')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/30 whitespace-nowrap"
              >
                <Package className="w-6 h-6" />
                Productos
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/30 whitespace-nowrap"
              >
                <MapPin className="w-6 h-6" />
                Ubicación
              </button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-semibold">4.9 Google</span>
              </div>
              <div className="h-8 w-px bg-white/30"></div>
              <div>
                <p className="text-blue-100 text-sm">Años de experiencia</p>
                <p className="text-2xl font-bold">Desde 2018</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Material de construcción ${index + 1}`}
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 px-6 py-4 rounded-xl shadow-xl z-10">
              <p className="text-sm font-semibold">Fletes Propios</p>
              <p className="text-2xl font-bold">Entrega Rápida</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
