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

      {/* WhatsApp Chat & Back to Top (Bottom-Right) */}
      <a
        href="https://wa.me/919829077627?text=Hello%2C%20I%2520would%2520like%2520to%2520enquire%252520about%252520a%252520booking%252520at%252520Raj%252520Rajeshwari%252520Haveli"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center gap-2 group border border-green-400/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden group-hover:inline font-lato text-xs font-bold uppercase tracking-wider whitespace-nowrap pr-2">
          WhatsApp Host
        </span>
      </a>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-24 z-40 bg-gold text-charcoal p-3.5 rounded-full shadow-xl hover:bg-gold-light hover:scale-110 transition-all duration-300 border border-gold-light/20"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
