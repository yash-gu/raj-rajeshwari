import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BedDouble,
  Users,
  Maximize2,
  Wifi,
  Tv,
  Wind,
  Coffee,
  Bath,
  Laptop,
  Castle,
  Home,
} from 'lucide-react';
import room1 from '../assets/images/gallery-1.jpg';
import room2 from '../assets/images/gallery-2.jpg';
import room3 from '../assets/images/gallery-3.jpg';

const rooms = [
  {
    name: 'King Room',
    image: room1,
    size: '40 sq m',
    view: 'City View',
    beds: '1 King Bed',
    sleeps: 2,
    features: ['AC', 'LED TV', 'Balcony', 'Bathrobe', 'Free WiFi', 'PC Workspace', 'Coffee Maker'],
    price: 'From INR 4,500/night',
  },
  {
    name: 'Queen Room',
    image: room2,
    size: '30 sq m',
    view: 'City View',
    beds: '1 Large Bed',
    sleeps: 2,
    features: ['AC', 'LED TV', 'Balcony', 'Bathrobe', 'Free WiFi', 'Dressing Area'],
    price: 'From INR 3,500/night',
  },
  {
    name: 'Standard Double Room',
    image: room3,
    size: '23 sq m',
    view: 'Courtyard View',
    beds: '1 Double Bed',
    sleeps: 2,
    features: ['AC', 'LED TV', 'Private Bathroom', 'Free WiFi', 'Daily Housekeeping'],
    price: 'From INR 2,500/night',
  },
];

const featureIcons: Record<string, React.ElementType> = {
  AC: Wind,
  'LED TV': Tv,
  Balcony: Home,
  Bathrobe: Bath,
  'Free WiFi': Wifi,
  'PC Workspace': Laptop,
  'Coffee Maker': Coffee,
  'Dressing Area': Castle,
  'Private Bathroom': Bath,
  'Daily Housekeeping': BedDouble,
};

export function Rooms() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="rooms" className="py-20 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold font-lato text-sm tracking-[0.2em] uppercase font-semibold"
          >
            ACCOMMODATIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6"
          >
            Royal Accommodations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-lato text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            Each room is a palatial retreat, richly furnished and impeccably maintained
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-gold"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-lato font-semibold">
                  {room.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-3">
                  {room.name}
                </h3>

                <div className="flex items-center gap-4 text-charcoal/70 mb-4">
                  <div className="flex items-center gap-1">
                    <Maximize2 className="w-4 h-4 text-gold" />
                    <span className="font-lato text-sm">{room.size}</span>
                  </div>
                  <span className="text-charcoal/30">|</span>
                  <span className="font-lato text-sm">{room.view}</span>
                </div>

                <div className="border-t border-beige pt-4 space-y-3">
                  <div className="flex items-center gap-2 text-charcoal/70">
                    <BedDouble className="w-4 h-4 text-gold" />
                    <span className="font-lato text-sm">{room.beds}</span>
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/70">
                    <Users className="w-4 h-4 text-gold" />
                    <span className="font-lato text-sm">Sleeps {room.sleeps}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {room.features.slice(0, 5).map((feature) => {
                    const Icon = featureIcons[feature] || Wifi;
                    return (
                      <span
                        key={feature}
                        className="flex items-center gap-1 bg-beige px-2 py-1 rounded text-xs font-lato text-charcoal/80"
                      >
                        <Icon className="w-3 h-3 text-gold" />
                        {feature}
                      </span>
                    );
                  })}
                  {room.features.length > 5 && (
                    <span className="flex items-center bg-beige px-2 py-1 rounded text-xs font-lato text-charcoal/80">
                      +{room.features.length - 5} more
                    </span>
                  )}
                </div>

                <a
                  href="#contact"
                  className="mt-6 w-full block bg-gold text-charcoal text-center py-3 rounded-lg font-lato font-semibold tracking-wide hover:bg-gold-light transition-colors duration-300"
                >
                  Book This Room
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
