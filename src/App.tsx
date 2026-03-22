import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import Delivery from './components/Delivery';
import Reviews from './components/Reviews';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Products />
      <Delivery />
      <Reviews />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
