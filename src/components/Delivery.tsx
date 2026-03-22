import { useState, useEffect } from 'react';
import { Truck, Clock, MapPin, CheckCircle } from 'lucide-react';

export default function Delivery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const truckImages = [
    'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=600&q=75&auto=format',
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=75&auto=format',
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=75&auto=format',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=75&auto=format'
  ];

  useEffect(() => {
    truckImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % truckImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="fletes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-700 px-4 py-2 rounded-full mb-6">
              <Truck className="w-5 h-5" />
              <span className="font-semibold">Servicio de Fletes</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contamos con Fletes Propios
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Llevamos tus materiales de construcción directamente a tu obra con nuestro servicio de entrega propio. Rápido, seguro y confiable.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Entrega Rápida</h3>
                  <p className="text-gray-600">Entregas el mismo día o al día siguiente según disponibilidad</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Servicio Confiable</h3>
                  <p className="text-gray-600">Conductores profesionales y materiales bien asegurados</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Cobertura Local</h3>
                  <p className="text-gray-600">Servicio en Valparaíso y alrededores</p>
                </div>
              </div>
            </div>

            <a
              href="tel:+56971371271"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Consultar Flete
            </a>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              {truckImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Camioneta de fletes ${index + 1}`}
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {truckImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-8 py-6 rounded-xl shadow-2xl z-10">
              <div className="flex items-center gap-3 mb-2">
                <Truck className="w-8 h-8" />
                <span className="text-3xl font-bold">100%</span>
              </div>
              <p className="text-sm font-semibold">Flota Propia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
