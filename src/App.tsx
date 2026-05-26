import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Dining } from './components/Dining';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Rooms />
        <Dining />
        <Amenities />
        <Gallery />
        <Reviews />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}

export default App;
