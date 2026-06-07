import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Dining', href: '#dining' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollPosition } = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-lg py-3 border-b border-gold/20'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center space-x-2">
              <div className="text-center">
                <h1 className={`font-playfair font-bold transition-all duration-500 ${
                  isScrolled ? 'text-maroon text-xl' : 'text-white text-2xl'
                }`}>
                  Raj Rajeshwari Haveli
                </h1>
                <div className="flex items-center justify-center space-x-2 mt-1">
                  <div className="h-px w-8 bg-gold" />
                  <span className="text-[10px] font-lato tracking-[0.25em] text-gold font-semibold">
                    JAIPUR
                  </span>
                  <div className="h-px w-8 bg-gold" />
                </div>
              </div>
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-lato text-sm tracking-wide transition-colors duration-300 py-1 group ${
                    isScrolled
                      ? 'text-charcoal hover:text-maroon'
                      : 'text-white/90 hover:text-gold'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-maroon' : 'bg-gold'
                  }`} />
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gold text-charcoal px-6 py-2.5 rounded-lg font-lato text-sm font-semibold tracking-wide hover:bg-gold-light hover:shadow-lg transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                Book Now
              </a>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-cream z-50 lg:hidden shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="font-playfair font-bold text-maroon text-xl">
                    Raj Rajeshwari Haveli
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-charcoal hover:text-maroon transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-4 font-lato text-charcoal hover:text-gold hover:bg-beige/50 rounded-lg transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-beige">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-charcoal">
                      <Phone className="w-5 h-5 text-gold" />
                      <span className="font-lato text-sm">+91 9829077627</span>
                    </div>
                    <div className="flex items-center space-x-3 text-charcoal">
                      <MapPin className="w-5 h-5 text-gold" />
                      <span className="font-lato text-sm">Khatipura, Jaipur</span>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-8 block w-full bg-gold text-charcoal text-center py-4 rounded-lg font-lato font-semibold tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Book Your Stay
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
