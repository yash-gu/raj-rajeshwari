import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Castle, Heart, UtensilsCrossed } from 'lucide-react';
import aboutImage from '../assets/images/about-1.jpg';

const usps = [
  { icon: Castle, title: 'Heritage Architecture', desc: 'Authentic Rajput design' },
  { icon: Heart, title: 'Royal Hospitality', desc: 'Treat guests like royalty' },
  { icon: UtensilsCrossed, title: 'Authentic Cuisine', desc: 'Home-cooked Rajasthani flavors' },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-beige">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Raj Rajeshwari Haveli courtyard"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-maroon/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold rounded-lg flex items-center justify-center shadow-xl">
              <div className="text-center">
                <p className="font-playfair text-3xl font-bold text-charcoal">Est.</p>
                <p className="font-playfair text-xl font-bold text-charcoal">2019</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold font-lato text-sm tracking-[0.2em] uppercase font-semibold">
              OUR HERITAGE
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6 leading-tight">
              A Rajput Legacy,<br />
              <span className="text-maroon">Open To The World</span>
            </h2>
            <p className="font-lato text-lg text-charcoal/80 leading-relaxed mb-8">
              Nestled in the serene Khatipura neighbourhood of Jaipur, Raj Rajeshwari Haveli
              is a living heritage property owned by Thakur Dilip Singh of the Chouhan Rajput
              family. With its marble floors, stained glass windows, soaring ceilings, and
              palatial furnishings, the Haveli transports guests to a world of royal Rajasthani
              grandeur - without ever sacrificing modern comfort. Ranked 5.0/5 on Tripadvisor
              from 23 guest reviews, visitors consistently praise the authentic hospitality
              and curated heritage experience.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {usps.map((usp, index) => (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto bg-gold/20 rounded-full flex items-center justify-center mb-3">
                    <usp.icon className="w-7 h-7 text-gold" />
                  </div>
                  <p className="font-playfair text-sm font-semibold text-charcoal">
                    {usp.title}
                  </p>
                  <p className="font-lato text-xs text-charcoal/60 mt-1">
                    {usp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
