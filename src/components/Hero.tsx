import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80',
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImages[currentImage]})`,
              transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0003})`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold font-lato text-sm tracking-[0.3em] uppercase">
                KHATIPURA - JAIPUR - RAJASTHAN
              </span>
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Where Rajput Heritage<br />
            <span className="text-gold">Meets Royal Comfort</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-lato text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            A centuries-old experience, reimagined for the modern traveller
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto bg-gold text-charcoal px-10 py-4 rounded-lg font-lato font-semibold tracking-wide hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Book Your Stay
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-lg font-lato font-semibold tracking-wide hover:bg-white hover:text-charcoal transition-all duration-300"
            >
              Explore the Haveli
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.a
          href="#trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center text-white/70 hover:text-gold transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
