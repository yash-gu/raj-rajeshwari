import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Heart,
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Rooms', href: '#rooms' },
  { name: 'Dining', href: '#dining' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const attractions = [
  'Hawa Mahal',
  'City Palace',
  'Amber Fort',
  'Jantar Mantar',
  'Albert Hall Museum',
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-maroon-light mb-2">
              Raj Rajeshwari Haveli
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-14 bg-gold" />
              <span className="text-gold font-lato text-sm tracking-[0.3em]">
                JAIPUR
              </span>
              <div className="h-px w-14 bg-gold" />
            </div>
            <p className="font-playfair text-xl text-gold italic mb-4">
              "Where Royalty Lives On"
            </p>
            <p className="font-lato text-white/70 text-sm leading-relaxed">
              A heritage Rajput haveli offering authentic Rajasthani hospitality
              in the heart of Jaipur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-playfair text-lg font-bold text-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-lato text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-playfair text-lg font-bold text-gold mb-6">
              Nearby Attractions
            </h4>
            <ul className="space-y-3">
              {attractions.map((attraction) => (
                <li key={attraction}>
                  <span className="font-lato text-white/70">
                    {attraction}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-playfair text-lg font-bold text-gold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919829077627"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="font-lato text-sm">+91 9829077627</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rajrajeshwarihaveli.com"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span className="font-lato text-sm">info@rajrajeshwarihaveli.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="font-lato text-sm text-white/70">
                  24, Parivahan Nagar Road,<br />
                  Khatipura, Jaipur 302012
                </span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold group transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-charcoal" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold group transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-charcoal" />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold group transition-colors"
                aria-label="TripAdvisor"
              >
                <span className="font-lato text-xs text-white group-hover:text-charcoal font-bold">
                  TA
                </span>
              </a>
              <a
                href="https://booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold group transition-colors"
                aria-label="Booking.com"
              >
                <span className="font-lato text-xs text-white group-hover:text-charcoal font-bold">
                  B
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-lato text-sm text-white/50">
              {currentYear} Raj Rajeshwari Haveli - Khatipura, Jaipur
            </p>
            <p className="font-lato text-sm text-white/50 flex items-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-gold fill-gold" /> for heritage travelers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
