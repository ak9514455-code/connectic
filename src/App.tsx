import { useReveal } from './hooks/useReveal';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { MotionShowcase } from './components/MotionShowcase';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="relative min-h-screen bg-canvas text-navy antialiased">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <MotionShowcase />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
