import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'María González',
    rating: 5,
    text: 'Excelente atención y buenos precios. Siempre encuentro lo que necesito para mis proyectos.',
    date: 'Hace 2 semanas'
  },
  {
    name: 'Carlos Muñoz',
    rating: 5,
    text: 'Muy buena ferretería, tienen de todo y el servicio de flete es súper rápido y confiable.',
    date: 'Hace 1 mes'
  },
  {
    name: 'Andrea Silva',
    rating: 5,
    text: 'Atención personalizada y profesional. Me ayudaron a encontrar exactamente lo que necesitaba.',
    date: 'Hace 3 semanas'
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-yellow-400/10 px-6 py-3 rounded-full mb-6">
            <Star className="w-6 h-6 text-yellow-600 fill-current" />
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">en Google</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600">
            La confianza de la comunidad nos respalda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="mb-6">
                <Quote className="w-10 h-10 text-yellow-400" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                "{review.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ferretería+Playa+Ancha+Valparaíso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 font-semibold text-lg transition-colors"
          >
            Ver todas las reseñas en Google
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
