# Ferretería Playa Ancha

Sitio web moderno y responsivo para Ferretería Playa Ancha, ubicada en Valparaíso, Chile.

## 🌐 Entornos

- **Producción:** [https://ferreteriaplayaancha.cl](https://ferreteriaplayaancha.cl) (Rama `main`)
- **Staging:** [https://staging.ferreteriaplayaancha.cl](https://staging.ferreteriaplayaancha.cl) (Rama `develop`)

## 📋 Descripción

Sitio web corporativo para una ferretería especializada en materiales de construcción, electricidad y sanitarios. El sitio incluye información completa sobre productos, servicios de fletes, reseñas de clientes y formulario de contacto integrado con WhatsApp.

## ✨ Características

### Secciones del Sitio

1. **Hero Section**
   - Slider automático con 5 imágenes de materiales de construcción
   - Botones de acción rápida (Llamar, Productos, Ubicación)
   - Calificación de Google (4.9 estrellas)
   - Información de años de experiencia

2. **Productos**
   - Catálogo visual de productos organizados por categorías
   - Materiales de construcción
   - Electricidad
   - Sanitarios
   - Herramientas
   - Pinturas
   - Ferretería general

3. **Servicio de Fletes**
   - Slider con 4 imágenes de camionetas
   - Información sobre entrega rápida
   - Servicio confiable con flota propia
   - Cobertura en Valparaíso y alrededores

4. **Nosotros**
   - Historia de la empresa
   - Valores y compromiso
   - Experiencia desde 2018

5. **Reseñas de Clientes**
   - Testimonios reales de clientes satisfechos
   - Sistema de calificación con estrellas

6. **Contacto**
   - Formulario de contacto integrado con WhatsApp
   - Información de contacto (teléfono, email, dirección)
   - Mapa interactivo de Google Maps
   - Horarios de atención
   - Enlaces a redes sociales (Instagram, Facebook)

7. **Footer**
   - Enlaces rápidos a todas las secciones
   - Información de contacto
   - Redes sociales
   - Copyright

### Características Técnicas

- ✅ Diseño responsivo (mobile-first)
- ✅ Sliders automáticos con controles manuales
- ✅ Animaciones y transiciones suaves
- ✅ Integración con WhatsApp
- ✅ Mapa de Google Maps embebido
- ✅ Optimización de imágenes
- ✅ Navegación suave entre secciones
- ✅ Botón flotante de WhatsApp
- ✅ Logo personalizado en el header

## 🛠️ Tecnologías

- **React 18.3.1** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite 5.4.2** - Build tool y dev server
- **Tailwind CSS 3.4.1** - Framework de CSS
- **Lucide React** - Iconos
- **Vercel** - Hosting y CI/CD

## 🚀 Despliegue Configurado (CI/CD)

El proyecto utiliza la **Integración de GitHub con Vercel** para automatizar los despliegues:

1. **Producción (`main`)**: Cualquier push o merge hacia la rama `main` lanza un despliegue automático hacia `ferreteriaplayaancha.cl`.
2. **Staging (`develop`)**: Cualquier push hacia la rama `develop` lanza un despliegue de pruebas hacia `staging.ferreteriaplayaancha.cl`. 

### Indicador de Staging
El entorno de Staging muestra una pequeña **"S" amarilla** en el Footer. Esto se controla mediante variables de entorno configuradas directamente en el panel de Vercel.

**Variables de Entorno en Vercel:**
- `VITE_IS_STAGING`: Debe ser definida como `true` **solo** para los entornos *Preview* y *Development*. (Desmarcada en *Production*).

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 📞 Información de Contacto

- **Teléfono:** +56 9 7137 1271
- **Email:** ferreteria.playaancha01@gmail.com
- **Dirección:** Luis Guevara Ortuzar 1421, Valparaíso, Chile
- **Horario:** 
  - Lunes a Viernes: 8:00 - 17:00
  - Sábados: 9:00 - 14:00

## 🔗 Redes Sociales

- Instagram: [@ferreteriaplayaancha](https://www.instagram.com/ferreteriaplayaancha/)
- Facebook: [ferreteriaplayaancha](https://www.facebook.com/ferreteriaplayaancha)

## 📄 Licencia

Proyecto corporativo - Todos los derechos reservados © 2026 Ferretería Playa Ancha
