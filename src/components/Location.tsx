import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Landmark, Building, Train, Plane, Compass } from 'lucide-react';

const locations = [
  { name: 'Hawa Mahal', distance: '8.6 km', time: '10 min', icon: Landmark },
  { name: 'City Palace', distance: '8.3 km', time: '10 min', icon: Landmark },
  { name: 'Amber Fort', distance: '17 km', time: '25 min', icon: Landmark },
  { name: 'Akshardham Temple', distance: '2.2 km', time: '5 min', icon: Building },
  { name: 'Jaipur Railway Station', distance: '4.2 km', time: '8 min', icon: Train },
  { name: 'Jaipur Airport', distance: '14 km', time: '20 min', icon: Plane },
  { name: 'Jantar Mantar', distance: '8.3 km', time: '10 min', icon: Compass },
  { name: 'Albert Hall Museum', distance: '7 km', time: '12 min', icon: Building },
];

export function Location() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="py-20 bg-beige">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold font-lato text-sm tracking-[0.2em] uppercase font-semibold"
          >
            LOCATION
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6"
          >
            Discover Jaipur From Here
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-lato text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            Strategically located in the heart of Khatipura, close to all major attractions
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-xl h-[500px]"
          >
            <iframe
              title="Raj Rajeshwari Haveli Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8776064215997!2d75.7871266!3d26.8671324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db448d5c00001%3A0x1c3c7a5c5c5c5c5c!2sRaj%20Rajeshwari%20Haveli!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-playfair text-xl font-bold text-charcoal mb-2">
                    Our Address
                  </h3>
                  <p className="font-lato text-charcoal/70 leading-relaxed">
                    24, Parivahan Nagar Road,<br />
                    Chinkara Colony, Khatipura,<br />
                    Jaipur 302012, Rajasthan
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <location.icon className="w-5 h-5 text-gold" />
                    <span className="font-lato font-medium text-charcoal">
                      {location.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-charcoal/60">
                    <span className="font-lato text-sm">{location.distance}</span>
                    <div className="flex items-center gap-1 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{location.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
