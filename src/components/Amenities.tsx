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
  Sparkles,
} from 'lucide-react';

const categorizedAmenities = [
  {
    category: 'In-Suite Luxury',
    desc: 'Crafted comforts within your chamber.',
    items: [
      { icon: Wifi, name: 'Free High Speed WiFi' },
      { icon: Shirt, name: 'Express Laundry Services' },
      { icon: ConciergeBell, name: '24/7 Concierge Support' },
      { icon: UtensilsCrossed, name: 'Royal Breakfast Menu' },
    ]
  },
  {
    category: 'Heritage Experience',
    desc: 'Immersive cultural journeys.',
    items: [
      { icon: Users, name: 'Traditional Yoga Classes' },
      { icon: MapPin, name: 'Bespoke Tour Desk Guidance' },
      { icon: UtensilsCrossed, name: 'Courtyard Folk Nights' },
    ]
  },
  {
    category: 'Modern Conveniences',
    desc: 'Seamless services for peace of mind.',
    items: [
      { icon: Clock, name: '24hr Front Desk Check-in' },
      { icon: Car, name: 'Secure Parking On Site' },
      { icon: Plane, name: 'Airport Transfer Options' },
      { icon: Banknote, name: 'Direct Booking Discounts' },
    ]
  }
];

export function Amenities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="py-24 bg-cream relative">
      <div className="absolute inset-0 bg-gold-glow pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> GUEST SERVICES <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-4">
            Curated Heritage Luxury
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto">
            Enjoy premium conveniences integrated into the historic Rajput architecture of the haveli.
          </p>
        </div>

        {/* Categorized Layout Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categorizedAmenities.map((cat, groupIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + groupIdx * 0.15, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-beige shadow-md hover:shadow-xl hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-playfair text-2xl font-bold text-maroon mb-2">
                  {cat.category}
                </h3>
                <p className="font-lato text-xs text-charcoal/60 mb-6 pb-4 border-b border-beige">
                  {cat.desc}
                </p>

                <div className="space-y-5">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-4 group/item cursor-default"
                    >
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center group-hover/item:bg-gold/20 transition-colors shrink-0">
                        <item.icon className="w-5 h-5 text-gold group-hover/item:scale-110 transition-transform" />
                      </div>
                      <span className="font-lato text-sm font-semibold text-charcoal/80 group-hover/item:text-maroon transition-colors">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
