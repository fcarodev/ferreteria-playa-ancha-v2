import { Award, Users, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sobre nosotros"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Más de 9 años sirviendo a la comunidad
            </h2>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              En <span className="font-bold text-blue-900">Ferretería Playa Ancha</span> somos más que una ferretería. Somos tu socio confiable en cada proyecto de construcción y mejora del hogar.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ofrecemos atención personalizada, asesoría profesional y productos de calidad. Nuestra experiencia y compromiso con la comunidad nos han convertido en la ferretería de confianza en Playa Ancha.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Experiencia</p>
                  <p className="text-gray-600 text-sm">Años de trayectoria</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Atención</p>
                  <p className="text-gray-600 text-sm">Servicio personalizado</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Compromiso</p>
                  <p className="text-gray-600 text-sm">Con la comunidad</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Calidad</p>
                  <p className="text-gray-600 text-sm">Productos garantizados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
