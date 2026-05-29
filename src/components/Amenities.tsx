import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Wifi,
  Car,
  Plane,
  Clock,
  Users,
  ConciergeBell,
  UtensilsCrossed,
  Banknote,
  MapPin,
  Shirt,
} from 'lucide-react';

const amenities = [
  { icon: Wifi, name: 'Free High Speed Internet (WiFi)' },
  { icon: Car, name: 'Free Parking' },
  { icon: Clock, name: '24hr Front Desk' },
  { icon: UtensilsCrossed, name: 'Free Breakfast' },
  { icon: ConciergeBell, name: 'Concierge Service' },
  { icon: Banknote, name: 'Best Price Guarantee' },
  { icon: MapPin, name: 'Tour Desk' },
  { icon: Shirt, name: 'Laundry Service' },
  { icon: Plane, name: 'Airport Transfer' },
  { icon: Users, name: 'Yoga Classes' },
];

export function Amenities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="py-20 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold font-lato text-sm tracking-[0.2em] uppercase font-semibold"
          >
            FACILITIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6"
          >
            Everything You Need,<br />Nothing You Don't
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-lato text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            Modern amenities blended seamlessly with traditional heritage charm
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.05, duration: 0.5 }}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border border-transparent hover:border-gold/30"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <amenity.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-lato text-sm font-semibold text-charcoal tracking-wide">
                {amenity.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
