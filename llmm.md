# LLM Context - Ferretería Playa Ancha

Documentación técnica para asistentes de código AI (Vibe Coding, Cursor, etc.)

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico
- **Framework:** React 18.3.1 + TypeScript
- **Build Tool:** Vite 5.4.2
- **Styling:** Tailwind CSS 3.4.1
- **Icons:** Lucide React 0.344.0
- **Deployment:** Vercel

### Estructura de Carpetas

```
ferreteria-playa-ancha_v2/
├── public/
│   └── logo.jpg                 # Logo de la empresa
├── src/
│   ├── components/
│   │   ├── Navigation.tsx       # Header con logo y menú
│   │   ├── Hero.tsx            # Sección principal con slider
│   │   ├── Products.tsx        # Catálogo de productos
│   │   ├── Delivery.tsx        # Servicio de fletes con slider
│   │   ├── About.tsx           # Información de la empresa
│   │   ├── Reviews.tsx         # Testimonios de clientes
│   │   ├── Contact.tsx         # Formulario y mapa
│   │   ├── Footer.tsx          # Pie de página
│   │   └── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Entry point
│   └── index.css               # Estilos globales + Tailwind
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 📐 Componentes Principales

### Navigation.tsx
- **Propósito:** Header fijo con navegación
- **Estado:** `isScrolled`, `isMobileMenuOpen`
- **Características:**
  - Logo personalizado (48x48px)
  - Menú responsive con hamburger
  - Scroll suave a secciones
  - Botón de llamada destacado

### Hero.tsx
- **Propósito:** Sección principal con slider de imágenes
- **Estado:** `currentSlide` (0-4)
- **Características:**
  - Slider automático cada 3 segundos
  - 5 imágenes de materiales de construcción
  - Precarga de imágenes para performance
  - Indicadores interactivos (dots)
  - 3 botones de acción (Llamar, Productos, Ubicación)
  - Gradiente de fondo azul
  - Responsive (slider solo en desktop)

**URLs de imágenes:**
```typescript
const images = [
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=75&auto=format',
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=75&auto=format',
  'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=75&auto=format',
  'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=75&auto=format',
  'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=75&auto=format'
];
```

### Delivery.tsx
- **Propósito:** Información de servicio de fletes
- **Estado:** `currentSlide` (0-3)
- **Características:**
  - Slider con 4 imágenes de camionetas
  - Cambio automático cada 3 segundos
  - Indicadores interactivos
  - Información de servicios (Entrega Rápida, Confiable, Cobertura Local)

**URLs de imágenes:**
```typescript
const truckImages = [
  'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=600&q=75&auto=format',
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=75&auto=format',
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=75&auto=format',
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=75&auto=format'
];
```

### Products.tsx
- **Propósito:** Catálogo de productos
- **Características:**
  - Grid responsive de productos
  - 6 categorías principales
  - Iconos de Lucide React
  - Hover effects

### Contact.tsx
- **Propósito:** Formulario de contacto y ubicación
- **Estado:** `formData` (name, phone, message)
- **Características:**
  - Formulario integrado con WhatsApp
  - Mapa de Google Maps embebido
  - Información de contacto clickeable
  - Enlaces a redes sociales

**Datos de contacto:**
- Teléfono: +56 9 7137 1271
- Email: ferreteria.playaancha01@gmail.com
- Dirección: Luis Guevara Ortuzar 1421, Valparaíso, Chile

### WhatsAppButton.tsx
- **Propósito:** Botón flotante de WhatsApp
- **Características:**
  - Posición fija bottom-right
  - Animación de pulso
  - Link directo a WhatsApp

## 🎨 Sistema de Diseño

### Colores Principales
```css
- Azul primario: blue-900 (#1e3a8a)
- Azul secundario: blue-800 (#1e40af)
- Amarillo acento: yellow-400 (#facc15)
- Gris texto: gray-900, gray-600
- Fondo: white, gray-50
```

### Tipografía
- Font family: Sistema (sans-serif)
- Títulos: 4xl-6xl, font-bold
- Subtítulos: xl-2xl
- Texto: base-lg

### Espaciado
- Secciones: py-20
- Contenedor: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Gaps: gap-4, gap-8, gap-12

## 🔧 Patrones de Código

### Slider Pattern
```typescript
const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  images.forEach(src => {
    const img = new Image();
    img.src = src; // Precarga
  });
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, 3000);
  return () => clearInterval(timer);
}, []);
```

### Scroll Suave
```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### WhatsApp Integration
```typescript
const whatsappMessage = `Hola! Mi nombre es ${name}. ${message}`;
const whatsappUrl = `https://wa.me/56971371271?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappUrl, '_blank');
```

## 📱 Responsive Design

### Breakpoints (Tailwind)
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px

### Estrategia Mobile-First
- Sliders solo visibles en `lg:` (desktop)
- Menú hamburger en mobile
- Grid adaptativo: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Botones stack vertical en mobile, horizontal en desktop

## 🚀 Comandos de Desarrollo

```bash
# Desarrollo
npm run dev          # Puerto 5173

# Build
npm run build        # Output: dist/

# Deploy
npx vercel --prod --yes

# Linting
npm run lint

# Type checking
npm run typecheck
```

## 🔄 Flujo de Modificaciones

### Para agregar una nueva sección:
1. Crear componente en `src/components/NombreSeccion.tsx`
2. Importar en `App.tsx`
3. Agregar al render en orden deseado
4. Agregar link en `Navigation.tsx`
5. Agregar link en `Footer.tsx`
6. Asignar ID único: `<section id="nombre-seccion">`

### Para modificar imágenes:
- Usar Unsplash con parámetros: `?w=600&q=75&auto=format`
- Precargar en useEffect para mejor performance
- Mantener aspect ratio consistente

### Para cambiar colores:
- Modificar clases de Tailwind
- Colores principales: `blue-900`, `yellow-400`
- Mantener contraste para accesibilidad

## 🐛 Debugging Tips

### Slider no se ve:
- Verificar altura fija en contenedor: `h-[500px]`
- Verificar z-index en elementos absolutos
- Verificar URLs de imágenes válidas

### Navegación no funciona:
- Verificar IDs de secciones coincidan con scrollToSection
- Verificar que secciones tengan `id="nombre"`

### Performance lento:
- Reducir tamaño de imágenes (w=600 es óptimo)
- Verificar precarga de imágenes
- Usar `auto=format` en URLs de Unsplash

## 📦 Dependencias Clave

```json
{
  "react": "^18.3.1",
  "lucide-react": "^0.344.0",
  "tailwindcss": "^3.4.1",
  "vite": "^5.4.2",
  "typescript": "^5.5.3"
}
```

## 🌐 URLs Importantes

- **Producción:** https://ferreteria-playa-anchav2.vercel.app
- **Vercel Dashboard:** https://vercel.com/felipe-caros-projects/ferreteria-playa-ancha_v2
- **WhatsApp:** https://wa.me/56971371271

## 📝 Notas Importantes

1. **Logo:** Ubicado en `public/logo.jpg`, tamaño 48x48px en header
2. **Imágenes optimizadas:** Todas las imágenes usan parámetros de optimización
3. **WhatsApp:** Número +56 9 7137 1271 hardcoded en múltiples lugares
4. **Mapa:** Dirección Luis Guevara Ortuzar 1421, Valparaíso
5. **Horarios:** Lun-Vie 9-19, Sáb 9-14
6. **Año fundación:** 2020 (mostrado en Hero)
