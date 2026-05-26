import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

export function FloatingElements() {
  const { scrollPosition } = useScrollPosition();
  const showBackToTop = scrollPosition > 500;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a
        href="https://wa.me/919829012345?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Raj%20Rajeshwari%20Haveli"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:inline font-lato text-sm whitespace-nowrap pr-2">
          Chat Now
        </span>
      </a>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-24 z-40 bg-gold text-charcoal p-3 rounded-full shadow-lg hover:bg-gold-light hover:scale-110 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
