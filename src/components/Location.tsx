import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Landmark, Building, Train, Plane, Compass, Sparkles } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Destinations' },
  { id: 'forts', label: 'Palaces & Forts' },
  { id: 'museums', label: 'Temples & Museums' },
  { id: 'transit', label: 'Transit Hubs' },
];

const locations = [
  { name: 'Hawa Mahal', distance: '8.6 km', time: '10 min', icon: Landmark, category: 'forts' },
  { name: 'City Palace', distance: '8.3 km', time: '10 min', icon: Landmark, category: 'forts' },
  { name: 'Amber Fort', distance: '17.0 km', time: '25 min', icon: Landmark, category: 'forts' },
  { name: 'Jantar Mantar Observatory', distance: '8.3 km', time: '10 min', icon: Compass, category: 'forts' },
  { name: 'Akshardham Temple', distance: '2.2 km', time: '5 min', icon: Building, category: 'museums' },
  { name: 'Albert Hall Museum', distance: '7.0 km', time: '12 min', icon: Building, category: 'museums' },
  { name: 'Jaipur Railway Station', distance: '4.2 km', time: '8 min', icon: Train, category: 'transit' },
  { name: 'Jaipur International Airport', distance: '14.0 km', time: '20 min', icon: Plane, category: 'transit' },
];

export function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredLocations = activeCategory === 'all'
    ? locations
    : locations.filter((loc) => loc.category === activeCategory);

  return (
    <section id="location" className="py-24 bg-parchment relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 mandala-pattern opacity-30 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> NEIGHBORHOOD <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-4">
            Discover Jaipur From Here
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto">
            Situated in the peaceful locality of Khatipura, our heritage haveli hotel keeps you away from busy traffic while maintaining close access to Jaipur Junction railway station, the airport, and key tourist hotspots.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Map Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border-royal h-[350px] sm:h-[480px] lg:h-[520px] bg-white p-2"
          >
            <iframe
              title="Raj Rajeshwari Haveli Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.54483756854!2d75.73976697629232!3d26.918855976644265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ed2a60bf65%3A0xe54d371e7c53dcb0!2sRaj%20Rajeshwari%20Haveli!5e0!3m2!1sen!2sin!4v1717676767676!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Attraction guides & category filters (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Quick Address Card */}
            <div className="bg-white rounded-2xl shadow-md border border-beige p-5 flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-1">
                  Our Address
                </h3>
                <p className="font-lato text-sm text-charcoal/70 leading-relaxed">
                  24, Ramayan Marg, Parivahan Nagar Road,<br />
                  Chinkara Colony, Khatipura, Jaipur - 302012, Rajasthan, India
                </p>
              </div>
            </div>

            {/* Neighborhood Filter tabs */}
            <div className="flex flex-wrap gap-2 border-b border-gold/15 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-lato text-xs font-semibold tracking-wide border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-maroon border-maroon text-gold shadow-sm'
                      : 'bg-white border-beige text-charcoal hover:bg-beige/45'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* List of Attractions */}
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {filteredLocations.map((loc) => (
                    <div
                      key={loc.name}
                      className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-beige/40 hover:shadow-md transition-shadow group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-gold/5 rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                          <loc.icon className="w-4.5 h-4.5 text-gold" />
                        </div>
                        <span className="font-lato font-semibold text-charcoal text-sm sm:text-base">
                          {loc.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-charcoal/50 text-xs sm:text-sm">
                        <span className="font-lato font-medium text-maroon/80">{loc.distance}</span>
                        <div className="flex items-center gap-1.5 bg-beige/30 px-2.5 py-1 rounded-md">
                          <Clock className="w-3.5 h-3.5 text-gold" />
                          <span className="font-lato font-bold">{loc.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
