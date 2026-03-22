import { Hammer, Zap, Droplet, Box, Wrench, Truck } from 'lucide-react';

const products = [
  {
    icon: Hammer,
    title: 'Materiales de Construcción',
    description: 'Madera, cemento, arena, gravilla y más para todos tus proyectos',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Zap,
    title: 'Electricidad',
    description: 'Cables, enchufes, interruptores y todo tipo de material eléctrico',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Droplet,
    title: 'Sanitarios',
    description: 'Grifería, lavamanos, inodoros y accesorios de baño',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Box,
    title: 'PVC',
    description: 'Tuberías, codos, uniones y accesorios para instalaciones',
    color: 'from-gray-600 to-gray-700'
  },
  {
    icon: Wrench,
    title: 'Herramientas',
    description: 'Herramientas manuales y eléctricas de las mejores marcas',
    color: 'from-blue-700 to-blue-800'
  },
  {
    icon: Truck,
    title: 'Fletes Propios',
    description: 'Servicio de entrega rápido y seguro en toda la zona',
    color: 'from-yellow-600 to-yellow-700'
  }
];

export default function Products() {
  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Productos y Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para tu proyecto de construcción o remodelación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${product.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contáctanos y te ayudaremos a encontrar exactamente lo que necesitas para tu proyecto
          </p>
          <a
            href="tel:+56971371271"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Contactar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
